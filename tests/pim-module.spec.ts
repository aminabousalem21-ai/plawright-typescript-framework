import { test } from "../fixtures/hooks-fixtures";
import pimModuleData from "../data/pim-module-data.json";
import { expect } from "@playwright/test";

test("verify that a new employee is created", async ({
  leftNavigationPage,
  pimPage,
}) => {
  await leftNavigationPage.openPimModule();

  await pimPage.addEmployee(
    pimModuleData.first_name,
    pimModuleData.middle_name,
    pimModuleData.last_name
  );

  await expect(pimPage.newEmployeeNameHeading).toHaveText(
    `${pimModuleData.first_name} ${pimModuleData.last_name}`
  );
});
