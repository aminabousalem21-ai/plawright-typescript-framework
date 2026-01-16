import { expect } from "@playwright/test";
import { test } from "../fixtures/common-fixtures";

test("Global setup for auto Login", async ({
  page,
  loginPage,
  dashboardPage,
  commonUtils,
}) => {
  const decryptedUsername = commonUtils.decryptData(process.env.USER_NAME!);
  const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);
  await loginPage.gotoOrangeHrm();
  await loginPage.loginOrangeHrm(decryptedUsername, decryptedPassword);
  await page.waitForURL(process.env.BASE_URL + "/web/index.php/auth/login");
  await expect(dashboardPage.dashboardTitleText).toHaveText("Dashboard");
});
