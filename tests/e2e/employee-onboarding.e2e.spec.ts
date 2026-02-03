import { test } from "../../fixtures/hooks-fixtures";
import { expect } from "@playwright/test";
import pimModuleData from "../../data/pim-module-data.json";

test("e2e admin can add employee and logout", async ({
  loginPage,
  commonUtils,
  dashboardPage,
  leftNavigationPage,
  pimPage,
  userPage,
}) => {
  const username = commonUtils.decryptData(process.env.USER_NAME as string);
  const password = commonUtils.decryptData(process.env.PASSWORD as string);

  await loginPage.gotoOrangeHrm();
  await loginPage.loginOrangeHrm(username, password);

  await expect(dashboardPage.dashboardTitleText).toHaveText("Dashboard");

  await leftNavigationPage.openPimModule();
  await pimPage.addEmployee(
    pimModuleData.first_name,
    pimModuleData.middle_name,
    pimModuleData.last_name
  );

  await expect(pimPage.newEmployeeNameHeading).toHaveText(
    `${pimModuleData.first_name} ${pimModuleData.last_name}`
  );

  await userPage.logout();
  await expect(loginPage.usernameTextBox).toBeVisible();
});
