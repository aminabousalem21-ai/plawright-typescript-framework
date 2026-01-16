import { test as baseTest } from "./common-fixtures";

type HooksFixturesType = {
  gotoURL: void;
  logout: void;
};

export const test = baseTest.extend<HooksFixturesType>({
  gotoURL: async ({ loginPage }, use) => {
    await loginPage.gotoOrangeHrm();
    await use();
  },

  logout: async ({ userPage }, use) => {
    await use();
    await userPage.logout();
  },
});
