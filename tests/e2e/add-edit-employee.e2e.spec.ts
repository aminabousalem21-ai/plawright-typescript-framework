import { test } from "../../fixtures/hooks-fixtures";
import { expect } from "@playwright/test";
import { buildEmployeeData, loginAsAdmin } from "./e2e-helpers";

test("e2e add employee then edit last name", async ({
  loginPage,
  commonUtils,
  dashboardPage,
  leftNavigationPage,
  pimPage,
  userPage,
}) => {
  const employee = buildEmployeeData();
  const updatedLastName = `${employee.lastName}Updated`;

  await loginAsAdmin({ loginPage, commonUtils, dashboardPage });

  await leftNavigationPage.openPimModule();
  await pimPage.addEmployee(
    employee.firstName,
    employee.middleName,
    employee.lastName
  );

  await expect(pimPage.newEmployeeNameHeading).toHaveText(
    `${employee.firstName} ${employee.lastName}`
  );

  await pimPage.updateEmployeeLastName(updatedLastName);

  await expect(pimPage.newEmployeeNameHeading).toHaveText(
    `${employee.firstName} ${updatedLastName}`
  );

  await userPage.logout();
  await expect(loginPage.usernameTextBox).toBeVisible();
});
