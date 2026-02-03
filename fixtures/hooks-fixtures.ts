import { test } from "../fixtures/pom-fixture";

export { test };

test.beforeAll(async () => {
  console.log("⚡ Global setup: runs once before all tests");
});

test.afterAll(async () => {
  console.log("⚡ Global teardown: runs once after all tests");
});

test.beforeEach(async ({ page }) => {
  console.log("➡️ Before each test: navigating to base URL");
  await page.goto(process.env.BASE_URL!); // ensure BASE_URL is set
});

test.afterEach(async ({ page }) => {
  console.log("⬅️ After each test: clearing cookies and local storage");
  await page.context().clearCookies();
  await page.evaluate(() => localStorage.clear());
});
