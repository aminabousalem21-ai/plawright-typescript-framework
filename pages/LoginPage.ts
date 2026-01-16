import { Locator, Page, test as baseTest } from "@playwright/test";
import { Fixtures } from "../fixtures/pom-fixture";
import { DashboardPage } from "./DashboardPage";
import { LeftNavigationPage } from "./LeftNavigationsPage";
import { PimPage } from "./PimPage";
import { UserPage } from "./UserPage";

export class LoginPage {
  readonly page: Page;
  readonly usernameTextBox: Locator;
  readonly passwordTextBox: Locator;
  readonly loginButton: Locator;
  readonly invalidCredentialsErrorPopup: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameTextBox = page.getByRole("textbox", { name: "Username" });
    this.passwordTextBox = page.locator("#password");
    this.loginButton = page.locator("#login-button");
    this.invalidCredentialsErrorPopup = page.getByText("Invalid credentials");
  }

  async gotoOrangeHrm() {
    await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
  }

  async loginOrangeHrm(usernameVal: string, passwordVal: string) {
    await this.usernameTextBox.fill(usernameVal);
    await this.passwordTextBox.fill(passwordVal);
    await this.loginButton.click();
  }
}

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
});
