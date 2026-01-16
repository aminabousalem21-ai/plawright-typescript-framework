import { test } from "../fixtures/hooks-fixtures";
import pimeModuleData from "../data/pim-module-data.json";
import { expect } from "@playwright/test";

test("verify that a new employee is created", async ({
  gotoURL,
  leftNavigationPage,
  pimPage,
}) => {
  await leftNavigationPage.openPimModule();

  await pimPage.addEmployee(
    pimeModuleData.first_name,
    pimeModuleData.middle_name,
    pimeModuleData.last_name
  );

  await expect(pimPage.newEmployeeNameHeading).toHaveText(
    `${pimeModuleData.first_name} ${pimeModuleData.last_name}`
  );
});
