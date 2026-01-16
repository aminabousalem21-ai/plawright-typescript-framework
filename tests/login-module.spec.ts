import { test } from "../fixtures/common-fixtures";
import loginModuleData from "../data/login-module-data.json";
import { expect } from "@playwright/test";

test("login verify user cannot log with invalid password", async ({
  loginPage,
  commonUtils,
}) => {
  const username = commonUtils.decryptData(process.env.USER_NAME as string);

  await loginPage.loginOrangeHrm(username, loginModuleData.wrong_password);
  await expect(loginPage.invelidcredentialsErrorPopup).toHaveText(
    loginModuleData.invalid_credentials
  );

  await expect(loginPage.usernameTextBox).toBeVisible();
});

test("login verify user cannot log with invalid username", async ({
  loginPage,
  commonUtils,
}) => {
  await loginPage.loginOrangeHrm(
    loginModuleData.wrong_username,
    commonUtils.decryptData(process.env.PASSWORD!)
  );
  await expect(loginPage.invelidcredentialsErrorPopup).toHaveText(
    loginModuleData.invalid_credentials
  );
  await expect(loginPage.usernameTextBox).toBeVisible();
});

test("login verify user cannot log with invalid username and password", async ({
  loginPage,
  commonUtils,
}) => {
  await loginPage.loginOrangeHrm(
    loginModuleData.wrong_username,
    loginModuleData.wrong_password
  );
  await expect(loginPage.invelidcredentialsErrorPopup).toHaveText(
    loginModuleData.invalid_credentials
  );
  await expect(loginPage.usernameTextBox).toBeVisible();
});
