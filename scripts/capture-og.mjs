import { chromium } from "playwright";

const browser = await chromium.launch({
  headless: true,
  executablePath:
    process.env.CHROME_PATH ??
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
});

try {
  const context = await browser.newContext({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
    reducedMotion: "reduce"
  });
  const page = await context.newPage();
  await page.goto(process.env.PORTFOLIO_URL ?? "http://127.0.0.1:3001", {
    waitUntil: "networkidle"
  });
  await page.screenshot({
    path: "public/images/social/og-home.png",
    fullPage: false
  });
  await context.close();
} finally {
  await browser.close();
}
