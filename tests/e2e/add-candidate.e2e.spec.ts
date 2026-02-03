import { test } from "../../fixtures/hooks-fixtures";
import { expect } from "@playwright/test";
import { buildCandidateData, loginAsAdmin } from "./e2e-helpers";

test("e2e add recruitment candidate", async ({
  loginPage,
  commonUtils,
  dashboardPage,
  recruitmentPage,
  userPage,
}) => {
  await loginAsAdmin({ loginPage, commonUtils, dashboardPage });

  const candidate = buildCandidateData();

  await recruitmentPage.gotoAddCandidate();
  await recruitmentPage.addCandidate(candidate);

  await expect(recruitmentPage.page).toHaveURL(
    /\/web\/index\.php\/recruitment\/viewCandidate\//
  );

  await userPage.logout();
  await expect(loginPage.usernameTextBox).toBeVisible();
});
