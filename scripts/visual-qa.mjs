import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const baseUrl = process.env.PORTFOLIO_URL ?? "http://127.0.0.1:3001";
const outputDirectory = process.env.QA_OUT_DIR ?? path.resolve("tmp", "visual-qa");
const chromeExecutable =
  process.env.CHROME_PATH ??
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

await mkdir(outputDirectory, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: chromeExecutable
});

const routes = [
  "/",
  "/work",
  "/work/mls",
  "/work/ml-space",
  "/work/museum-cms",
  "/about",
  "/process",
  "/thoughts",
  "/resume",
  "/contact"
];

const report = {
  baseUrl,
  routes: [],
  desktop: {},
  mobile: {},
  accessibility: {}
};

try {
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
  });
  const desktop = await desktopContext.newPage();
  const desktopErrors = [];
  desktop.on("console", (message) => {
    if (message.type() === "error") desktopErrors.push(message.text());
  });
  desktop.on("pageerror", (error) => desktopErrors.push(String(error)));

  for (const route of routes) {
    const response = await desktop.goto(`${baseUrl}${route}`, {
      waitUntil: "networkidle"
    });
    const routeResult = await desktop.evaluate(() => ({
      title: document.title,
      horizontalOverflow:
        document.documentElement.scrollWidth > window.innerWidth,
      brokenImages: Array.from(document.images)
        .filter((image) => image.complete && image.naturalWidth === 0)
        .map((image) => image.currentSrc || image.src),
      h1Count: document.querySelectorAll("h1").length
    }));
    report.routes.push({
      route,
      status: response?.status() ?? null,
      ...routeResult
    });
  }

  await desktop.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  await desktop.screenshot({
    path: path.join(outputDirectory, "home-desktop.png"),
    fullPage: true
  });
  await desktop.locator(".hero").screenshot({
    path: path.join(outputDirectory, "hero-desktop.png")
  });

  const initialScroll = await desktop.evaluate(() => window.scrollY);
  await desktop.mouse.wheel(0, 760);
  await desktop.waitForTimeout(900);
  const wheelScroll = await desktop.evaluate(() => window.scrollY);
  await desktop.evaluate(() =>
    window.scrollTo({ top: 0, behavior: "instant" })
  );
  await desktop.locator(".arrow-cta").click();
  await desktop.waitForTimeout(1300);
  const anchorScroll = await desktop.evaluate(() => window.scrollY);

  const axeResults = await new AxeBuilder({ page: desktop })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();

  report.desktop = {
    consoleErrors: desktopErrors,
    smoothWheelMoved: wheelScroll > initialScroll + 100,
    anchorMoved: anchorScroll > 300,
    initialScroll,
    wheelScroll,
    anchorScroll
  };
  report.accessibility = {
    violations: axeResults.violations.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      description: violation.description,
      nodes: violation.nodes.length
    })),
    seriousOrCritical: axeResults.violations.filter((violation) =>
      ["serious", "critical"].includes(violation.impact ?? "")
    ).length
  };
  await desktopContext.close();

  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1
  });
  const mobile = await mobileContext.newPage();
  const mobileErrors = [];
  mobile.on("console", (message) => {
    if (message.type() === "error") mobileErrors.push(message.text());
  });
  mobile.on("pageerror", (error) => mobileErrors.push(String(error)));
  await mobile.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  await mobile.screenshot({
    path: path.join(outputDirectory, "home-mobile.png"),
    fullPage: true
  });

  const mobileOverflow = await mobile.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth
  );
  await mobile.locator(".menu-toggle").click();
  await mobile.waitForTimeout(250);
  const menuOpened = await mobile
    .locator(".menu-toggle")
    .getAttribute("aria-expanded");
  const firstMenuFocus = await mobile.evaluate(() =>
    document.activeElement?.getAttribute("href") ?? ""
  );
  await mobile.keyboard.press("Shift+Tab");
  await mobile.keyboard.press("Shift+Tab");
  const wrappedMenuFocus = await mobile.evaluate(() =>
    document.activeElement?.getAttribute("href") ?? ""
  );
  await mobile.keyboard.press("Escape");
  await mobile.waitForTimeout(250);
  const menuClosed = await mobile
    .locator(".menu-toggle")
    .getAttribute("aria-expanded");
  const focusRestored = await mobile.evaluate(() =>
    document.activeElement?.classList.contains("menu-toggle") ?? false
  );

  report.mobile = {
    consoleErrors: mobileErrors,
    horizontalOverflow: mobileOverflow,
    menuOpened: menuOpened === "true",
    firstMenuFocus,
    firstFocusInsideMenu: /\/work\/?$/.test(firstMenuFocus),
    wrappedMenuFocus,
    focusTrapWrapped: /\/resume\/?$/.test(wrappedMenuFocus),
    escapeClosed: menuClosed === "false",
    focusRestored
  };
  await mobileContext.close();
} finally {
  await browser.close();
}

await writeFile(
  path.join(outputDirectory, "report.json"),
  JSON.stringify(report, null, 2),
  "utf8"
);

console.log(JSON.stringify(report, null, 2));

const failedRoute = report.routes.some(
  (route) =>
    route.status !== 200 ||
    route.horizontalOverflow ||
    route.brokenImages.length > 0 ||
    route.h1Count !== 1
);
const failedInteraction =
  report.desktop.consoleErrors.length > 0 ||
  !report.desktop.smoothWheelMoved ||
  !report.desktop.anchorMoved ||
  report.mobile.consoleErrors.length > 0 ||
  report.mobile.horizontalOverflow ||
  !report.mobile.menuOpened ||
  !report.mobile.firstFocusInsideMenu ||
  !report.mobile.focusTrapWrapped ||
  !report.mobile.escapeClosed ||
  !report.mobile.focusRestored;

if (
  failedRoute ||
  failedInteraction ||
  report.accessibility.seriousOrCritical > 0
) {
  process.exit(1);
}
