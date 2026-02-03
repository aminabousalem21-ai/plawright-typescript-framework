import { test } from "../../fixtures/hooks-fixtures";
import { expect } from "@playwright/test";
import loginModuleData from "../../data/login-module-data.json";

test("e2e invalid login shows error", async ({ loginPage }) => {
  await loginPage.gotoOrangeHrm();
  await loginPage.loginOrangeHrm(
    loginModuleData.wrong_username,
    loginModuleData.wrong_password
  );

  await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(
    loginModuleData.invalid_credentials
  );
  await expect(loginPage.usernameTextBox).toBeVisible();
});
