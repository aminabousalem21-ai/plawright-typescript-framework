import { test } from "../../fixtures/hooks-fixtures";
import { expect } from "@playwright/test";
import { buildEmployeeData, loginAsAdmin } from "./e2e-helpers";

test("e2e search employee in pim list", async ({
  loginPage,
  commonUtils,
  dashboardPage,
  leftNavigationPage,
  pimPage,
  userPage,
}) => {
  const employee = buildEmployeeData();
  const fullName = `${employee.firstName} ${employee.lastName}`;

  await loginAsAdmin({ loginPage, commonUtils, dashboardPage });

  await leftNavigationPage.openPimModule();
  await pimPage.addEmployee(
    employee.firstName,
    employee.middleName,
    employee.lastName
  );

  await expect(pimPage.newEmployeeNameHeading).toHaveText(fullName);

  await leftNavigationPage.openPimModule();
  await pimPage.searchEmployeeByName(fullName);

  await expect(pimPage.employeeNameCell(employee.lastName)).toBeVisible();

  await userPage.logout();
  await expect(loginPage.usernameTextBox).toBeVisible();
});
