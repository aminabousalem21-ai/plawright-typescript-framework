import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { UserPage } from "../pages/UserPage";
import { PimPage } from "../pages/PimPage";
import { LeftNavigationPage } from "../pages/LeftNavigationsPage";
import CommonUtils from "../utils/CommonUtils";

export type Fixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  userPage: UserPage;
  pimPage: PimPage;
  leftNavigationPage: LeftNavigationPage;
  commonUtils: CommonUtils;
};

export const test = baseTest.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  userPage: async ({ page }, use) => {
    await use(new UserPage(page));
  },
  pimPage: async ({ page }, use) => {
    await use(new PimPage(page));
  },
  leftNavigationPage: async ({ page }, use) => {
    await use(new LeftNavigationPage(page));
  },
  commonUtils: async (_, use) => {
    await use(new CommonUtils());
  },
});
