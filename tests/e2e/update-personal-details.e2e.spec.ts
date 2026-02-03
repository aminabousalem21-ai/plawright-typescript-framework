import { test } from "../../fixtures/hooks-fixtures";
import { expect } from "@playwright/test";
import { loginAsAdmin } from "./e2e-helpers";

const randomDigits = (length = 6) =>
  Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");

test("e2e update employee personal details and save", async ({
  loginPage,
  commonUtils,
  dashboardPage,
  pimPage,
  userPage,
}) => {
  await loginAsAdmin({ loginPage, commonUtils, dashboardPage });

  await pimPage.gotoEmployeePersonalDetails("7");
  await expect(pimPage.personalDetailsHeading).toBeVisible();

  const newOtherId = `AUTO-${randomDigits()}`;
  await pimPage.updateOtherId(newOtherId);

  await expect(pimPage.otherIdTextBox).toHaveValue(newOtherId);

  await userPage.logout();
  await expect(loginPage.usernameTextBox).toBeVisible();
});
