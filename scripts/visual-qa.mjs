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
  shader: {},
  experience: {},
  spotlight: {},
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

  await desktop.waitForFunction(
    () =>
      document
        .querySelector("[data-silk-background]")
        ?.getAttribute("data-silk-state") !== "fallback"
  );
  const homeSpotlightCardCount = await desktop
    .locator("[data-spotlight-card]")
    .count();
  const silkInitial = await desktop.evaluate(() => {
    window.__silkCanvasForQa = document.querySelector("[data-silk-canvas]");
    const layer = document.querySelector("[data-silk-background]");
    return {
      count: document.querySelectorAll("[data-silk-canvas]").length,
      state: layer?.getAttribute("data-silk-state") ?? null
    };
  });

  await desktop.getByRole("link", { name: "Work", exact: true }).first().click();
  await desktop.waitForURL(/\/work\/?$/);
  await desktop.waitForLoadState("networkidle");
  const silkPersistedToWork = await desktop.evaluate(
    () =>
      window.__silkCanvasForQa ===
      document.querySelector("[data-silk-canvas]")
  );
  const workSpotlightCards = desktop.locator("[data-spotlight-card]");
  const workSpotlightCardCount = await workSpotlightCards.count();
  const spotlightCards = [];
  for (let index = 0; index < Math.min(3, workSpotlightCardCount); index += 1) {
    const card = workSpotlightCards.nth(index);
    const size = await card.evaluate((element) => ({
      width: element.clientWidth,
      height: element.clientHeight
    }));
    await card.hover({
      position: {
        x: size.width * (0.28 + index * 0.2),
        y: size.height * (0.35 + index * 0.08)
      }
    });
    await desktop.waitForFunction(
      (cardIndex) =>
        document
          .querySelectorAll("[data-spotlight-card]")
          [cardIndex]?.getAttribute("data-spotlight-active") === "true",
      index
    );
    await desktop.waitForTimeout(320);
    spotlightCards.push(
      await card.evaluate((element) => ({
        active: element.getAttribute("data-spotlight-active"),
        x: element.style.getPropertyValue("--spotlight-x"),
        y: element.style.getPropertyValue("--spotlight-y"),
        glowOpacity: getComputedStyle(element, "::before").opacity,
        nodeFontSizes: Array.from(
          element.querySelectorAll(".project-visual__node")
        ).map((node) => Number.parseFloat(getComputedStyle(node).fontSize))
      }))
    );
    await card.screenshot({
      path: path.join(outputDirectory, `spotlight-card-${index + 1}-desktop.png`)
    });
  }
  const inactiveAfterPointerLeave = await workSpotlightCards
    .nth(0)
    .getAttribute("data-spotlight-active");
  await desktop.screenshot({
    path: path.join(outputDirectory, "work-desktop.png"),
    fullPage: true
  });

  await desktop.locator(".work-index a.text-link").first().click();
  await desktop.waitForURL(/\/work\/mls\/?$/);
  await desktop.waitForLoadState("networkidle");
  const silkPersistedToCase = await desktop.evaluate(
    () =>
      window.__silkCanvasForQa ===
      document.querySelector("[data-silk-canvas]")
  );
  const caseStudySpotlightCardCount = await desktop
    .locator("[data-spotlight-card]")
    .count();
  report.spotlight = {
    homeCardCount: homeSpotlightCardCount,
    workCardCount: workSpotlightCardCount,
    caseStudyCardCount: caseStudySpotlightCardCount,
    cards: spotlightCards,
    firstCardInactiveAfterLeave: inactiveAfterPointerLeave === "false"
  };
  await desktop.screenshot({
    path: path.join(outputDirectory, "case-study-desktop.png"),
    fullPage: true
  });

  await desktop.evaluate(() => {
    Object.defineProperty(document, "hidden", {
      configurable: true,
      value: true
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await desktop.waitForFunction(
    () => document.querySelector("[data-silk-background]")?.getAttribute("data-silk-state") === "paused"
  );
  const pausedState = await desktop
    .locator("[data-silk-background]")
    .getAttribute("data-silk-state");
  await desktop.evaluate(() => {
    Object.defineProperty(document, "hidden", {
      configurable: true,
      value: false
    });
    document.dispatchEvent(new Event("visibilitychange"));
    Reflect.deleteProperty(document, "hidden");
  });
  await desktop.waitForFunction(
    () => document.querySelector("[data-silk-background]")?.getAttribute("data-silk-state") === "running"
  );
  const resumedState = await desktop
    .locator("[data-silk-background]")
    .getAttribute("data-silk-state");
  const visibilityLifecycle = {
    pausedState,
    resumedState,
    resumed: pausedState === "paused" && resumedState === "running"
  };

  const contextLossSupported = await desktop.evaluate(() => {
    const canvas = document.querySelector("[data-silk-canvas]");
    const gl = canvas?.getContext("webgl");
    const extension = gl?.getExtension("WEBGL_lose_context") ?? null;
    window.__silkContextLossForQa = extension;
    extension?.loseContext();
    return Boolean(extension);
  });
  let contextRestored = null;
  if (contextLossSupported) {
    await desktop.waitForFunction(
      () =>
        document
          .querySelector("[data-silk-background]")
          ?.getAttribute("data-silk-state") === "fallback"
    );
    await desktop.evaluate(() =>
      window.__silkContextLossForQa?.restoreContext()
    );
    await desktop.waitForFunction(
      () =>
        document
          .querySelector("[data-silk-background]")
          ?.getAttribute("data-silk-state") === "running"
    );
    contextRestored = true;
  }

  report.shader = {
    desktopCanvasCount: silkInitial.count,
    desktopState: silkInitial.state,
    persistedHomeToWork: silkPersistedToWork,
    persistedWorkToCase: silkPersistedToCase,
    visibilityLifecycle,
    contextLossSupported,
    contextRestored
  };

  await desktop.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  await desktop.waitForFunction(
    () =>
      document
        .querySelector("[data-experience-timeline]")
        ?.getAttribute("data-active-index") === "5"
  );
  const experienceInitial = await desktop.evaluate(() => {
    const timeline = document.querySelector("[data-experience-timeline]");
    const viewport = timeline?.querySelector(".experience-timeline__viewport");
    const items = Array.from(
      timeline?.querySelectorAll(".experience-timeline__item") ?? []
    );
    const viewportRect = viewport?.getBoundingClientRect();
    const visibleCurrentCards = items.filter((item) => {
      if (item.getAttribute("data-current") !== "true" || !viewportRect) return false;
      const rect = item.getBoundingClientRect();
      return rect.left >= viewportRect.left - 2 && rect.right <= viewportRect.right + 2;
    }).length;
    return {
      activeIndex: timeline?.getAttribute("data-active-index") ?? null,
      itemCount: items.length,
      visibleCurrentCards,
      archiveRoles: items.slice(0, 5).map((item) => item.querySelector("h3")?.textContent?.trim()),
      years: items.map((item) => item.querySelector(".experience-timeline__year")?.textContent?.trim())
    };
  });
  await desktop.locator(".experience-section").screenshot({
    path: path.join(outputDirectory, "experience-current-desktop.png")
  });
  await desktop.evaluate(() => {
    const viewport = document.querySelector(".experience-timeline__viewport");
    const target = document.querySelectorAll(".experience-timeline__item")[5];
    viewport?.scrollTo({ left: target?.offsetLeft ?? 0, behavior: "auto" });
  });
  await desktop.waitForFunction(
    () =>
      document
        .querySelector("[data-experience-timeline]")
        ?.getAttribute("data-active-index") === "5"
  );
  await desktop.getByRole("button", { name: "View earlier experience" }).click();
  await desktop.waitForFunction(
    () =>
      document
        .querySelector("[data-experience-timeline]")
        ?.getAttribute("data-active-index") === "4"
  );
  const experienceEarlier = await desktop.evaluate(() => ({
    activeIndex:
      document
        .querySelector("[data-experience-timeline]")
        ?.getAttribute("data-active-index") ?? null,
    status:
      document.querySelector(".experience-timeline__status")?.textContent?.trim() ?? null
  }));
  const traversal = [];
  for (const expectedIndex of [3, 2, 1, 0]) {
    await desktop.getByRole("button", { name: "View earlier experience" }).click();
    await desktop.waitForFunction(
      (index) =>
        document
          .querySelector("[data-experience-timeline]")
          ?.getAttribute("data-active-index") === String(index),
      expectedIndex
    );
    traversal.push(
      await desktop.locator(".experience-timeline__status").textContent()
    );
  }
  const earliestDisabled = await desktop
    .getByRole("button", { name: "View earlier experience" })
    .isDisabled();
  await desktop.getByRole("button", { name: "View newer experience" }).click();
  await desktop.waitForFunction(
    () =>
      document
        .querySelector("[data-experience-timeline]")
        ?.getAttribute("data-active-index") === "1"
  );
  const newerControlMoved = await desktop
    .locator("[data-experience-timeline]")
    .getAttribute("data-active-index");
  await desktop.evaluate(() => {
    const viewport = document.querySelector(".experience-timeline__viewport");
    const target = document.querySelectorAll(".experience-timeline__item")[4];
    viewport?.scrollTo({ left: target?.offsetLeft ?? 0, behavior: "auto" });
  });
  await desktop.waitForFunction(
    () =>
      document
        .querySelector("[data-experience-timeline]")
        ?.getAttribute("data-active-index") === "4"
  );
  await desktop.locator(".experience-section").screenshot({
    path: path.join(outputDirectory, "experience-earlier-desktop.png")
  });
  report.experience = {
    initial: experienceInitial,
    earlier: experienceEarlier,
    traversal,
    earliestDisabled,
    newerControlMoved
  };

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
  await mobile.waitForFunction(
    () =>
      document
        .querySelector("[data-experience-timeline]")
        ?.getAttribute("data-active-index") === "5"
  );
  const mobileExperienceIndex = await mobile
    .locator("[data-experience-timeline]")
    .getAttribute("data-active-index");
  await mobile.locator(".experience-section").screenshot({
    path: path.join(outputDirectory, "experience-current-mobile.png")
  });
  await mobile.screenshot({
    path: path.join(outputDirectory, "home-mobile.png"),
    fullPage: true
  });

  const mobileOverflow = await mobile.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth
  );
  const mobileSpotlight = mobile.locator("[data-spotlight-card]").first();
  await mobileSpotlight.dispatchEvent("pointerenter", {
    pointerType: "touch",
    clientX: 120,
    clientY: 180
  });
  await mobileSpotlight.dispatchEvent("pointermove", {
    pointerType: "touch",
    clientX: 140,
    clientY: 210
  });
  const mobileSpotlightState = await mobileSpotlight.evaluate((element) => ({
    active: element.getAttribute("data-spotlight-active"),
    glowDisplay: getComputedStyle(element, "::before").display,
    nodeFontSizes: Array.from(
      element.querySelectorAll(".project-visual__node")
    ).map((node) => Number.parseFloat(getComputedStyle(node).fontSize))
  }));
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
  const mobileSilkState = await mobile
    .locator("[data-silk-background]")
    .getAttribute("data-silk-state");

  report.mobile = {
    consoleErrors: mobileErrors,
    silkState: mobileSilkState,
    spotlight: mobileSpotlightState,
    experienceInitialIndex: mobileExperienceIndex,
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

  const reducedMotionContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    reducedMotion: "reduce"
  });
  const reducedMotionPage = await reducedMotionContext.newPage();
  await reducedMotionPage.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  report.shader.reducedMotionState = await reducedMotionPage
    .locator("[data-silk-background]")
    .getAttribute("data-silk-state");
  const reducedSpotlight = reducedMotionPage.locator("[data-spotlight-card]").first();
  await reducedSpotlight.hover({ position: { x: 160, y: 180 } });
  report.spotlight.reducedMotionActive = await reducedSpotlight.getAttribute(
    "data-spotlight-active"
  );
  await reducedMotionContext.close();

  const fallbackContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
  });
  await fallbackContext.addInitScript(() => {
    const originalGetContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      if (type === "webgl") return null;
      return originalGetContext.call(this, type, ...args);
    };
  });
  const fallbackPage = await fallbackContext.newPage();
  const fallbackErrors = [];
  fallbackPage.on("console", (message) => {
    if (message.type() === "error") fallbackErrors.push(message.text());
  });
  fallbackPage.on("pageerror", (error) =>
    fallbackErrors.push(String(error))
  );
  await fallbackPage.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  report.shader.fallbackState = await fallbackPage
    .locator("[data-silk-background]")
    .getAttribute("data-silk-state");
  report.shader.fallbackConsoleErrors = fallbackErrors;
  await fallbackContext.close();
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
const failedShader =
  report.shader.desktopCanvasCount !== 1 ||
  report.shader.desktopState !== "running" ||
  !report.shader.persistedHomeToWork ||
  !report.shader.persistedWorkToCase ||
  !report.shader.visibilityLifecycle.resumed ||
  (report.shader.contextLossSupported && !report.shader.contextRestored) ||
  report.mobile.silkState !== "static" ||
  report.shader.reducedMotionState !== "static" ||
  report.shader.fallbackState !== "fallback" ||
  report.shader.fallbackConsoleErrors.length > 0;
const expectedArchiveRoles = [
  "EDM Music Producer",
  "Music Composer",
  "Web Programming Learner",
  "WPU Community Manager & Bellshade Ex-Founder",
  "Community Lead Codepolitan & Project Manager Virtual Moves Co"
];
const failedExperience =
  report.experience.initial.activeIndex !== "5" ||
  report.experience.initial.itemCount !== 8 ||
  report.experience.initial.visibleCurrentCards !== 3 ||
  JSON.stringify(report.experience.initial.archiveRoles) !==
    JSON.stringify(expectedArchiveRoles) ||
  JSON.stringify(report.experience.initial.years.slice(0, 5)) !==
    JSON.stringify(["2017", "2018", "2019", "2021", "2022"]) ||
  report.experience.earlier.activeIndex !== "4" ||
  report.experience.earlier.status !== "Viewing 2022" ||
  JSON.stringify(report.experience.traversal) !==
    JSON.stringify(["Viewing 2021", "Viewing 2019", "Viewing 2018", "Viewing 2017"]) ||
  !report.experience.earliestDisabled ||
  report.experience.newerControlMoved !== "1" ||
  report.mobile.experienceInitialIndex !== "5";
const failedSpotlight =
  report.spotlight.homeCardCount !== 3 ||
  report.spotlight.workCardCount !== 6 ||
  report.spotlight.caseStudyCardCount !== 1 ||
  report.spotlight.cards.length !== 3 ||
  report.spotlight.cards.some(
    (card) =>
      card.active !== "true" ||
      !card.x.endsWith("px") ||
      !card.y.endsWith("px") ||
      card.glowOpacity !== "1" ||
      card.nodeFontSizes.some((size) => size < 13)
  ) ||
  !report.spotlight.firstCardInactiveAfterLeave ||
  report.mobile.spotlight.active !== "false" ||
  report.mobile.spotlight.nodeFontSizes.some((size) => size < 11) ||
  report.spotlight.reducedMotionActive !== "false";
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
  failedShader ||
  failedExperience ||
  failedSpotlight ||
  report.accessibility.seriousOrCritical > 0
) {
  process.exit(1);
}
