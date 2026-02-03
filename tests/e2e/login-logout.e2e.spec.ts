import { test } from "../../fixtures/hooks-fixtures";
import { expect } from "@playwright/test";
import { loginAsAdmin } from "./e2e-helpers";

test("e2e login and logout", async ({
  loginPage,
  commonUtils,
  dashboardPage,
  userPage,
}) => {
  await loginAsAdmin({ loginPage, commonUtils, dashboardPage });

  await userPage.logout();
  await expect(loginPage.usernameTextBox).toBeVisible();
});
