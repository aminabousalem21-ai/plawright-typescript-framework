import { Page, Locator } from "@playwright/test";

export class PimPage {
  readonly page: Page;
  readonly addPimButton: Locator;
  readonly firstNameTextBox: Locator;
  readonly middleNameTextBox: Locator;
  readonly lastNameTextBox: Locator;
  readonly saveButton: Locator;
  readonly newEmployeeNameHeading: Locator;

  PimPage(page: Page) {
    this.page = page;
    this.addPimButton = page.getByRole("button", { name: "Add" });
    this.firstNameTextBox = page.getByRole("textbox", { name: "First Name" });
    this.middleNameTextBox = page.getByRole("textbox", { name: "Middle Name" });
    this.lastNameTextBox = page.getByRole("textbox", { name: "Last Name" });
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.newEmployeeNameHeading = page.locator(".orangehrmedit-employee-name");
  }

  addEmployee(first_name: String, last_name: string, middle_name: string) {
    await this.addPimButton.click();
    await this.firstNameTextBox.fill(first_name);
    await this.lastNameTextBox.fill(last_name);
    await this.middleNameTextBox.fill(middle_name);
    await this.saveButton.click();
  }
}
