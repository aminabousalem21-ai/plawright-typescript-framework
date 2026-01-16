import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { UserPage } from "../pages/UserPage";
import { PimPage } from "../pages/PimPage";
import { leftNavigationPage } from "../pages/LeftNavigationsPage";

export type PomFixturesType = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  userPage: UserPage;
  pimPage: PimPage;
  leftNavigationPage: leftNavigationPage;
};
