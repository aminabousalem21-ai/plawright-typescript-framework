import { expect } from "@playwright/test";
import type { Fixtures } from "../../fixtures/pom-fixture";
import pimModuleData from "../../data/pim-module-data.json";
import recruitmentModuleData from "../../data/recruitment-module-data.json";

const randomLetters = (length = 4) =>
  Array.from({ length }, () =>
    "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)]
  ).join("");

export const buildEmployeeData = () => {
  const suffix = randomLetters();
  return {
    firstName: `${pimModuleData.first_name}${suffix}`,
    middleName: `${pimModuleData.middle_name}${suffix}`,
    lastName: `${pimModuleData.last_name}${suffix}`,
  };
};

export const buildCandidateData = () => {
  const suffix = randomLetters();
  const firstName = `${recruitmentModuleData.first_name}${suffix}`;
  const middleName = `${recruitmentModuleData.middle_name}${suffix}`;
  const lastName = `${recruitmentModuleData.last_name}${suffix}`;
  const email = `${firstName}.${lastName}@${recruitmentModuleData.email_domain}`.toLowerCase();

  return {
    firstName,
    middleName,
    lastName,
    email,
  };
};

export const loginAsAdmin = async ({
  loginPage,
  commonUtils,
  dashboardPage,
}: Pick<Fixtures, "loginPage" | "commonUtils" | "dashboardPage">) => {
  const username = commonUtils.decryptData(process.env.USER_NAME as string);
  const password = commonUtils.decryptData(process.env.PASSWORD as string);

  await loginPage.gotoOrangeHrm();
  await loginPage.loginOrangeHrm(username, password);
  await expect(dashboardPage.dashboardTitleText).toHaveText("Dashboard");
};
