import { Page, Locator } from "@playwright/test";

export class PimPage {
  readonly page: Page;
  readonly addPimButton: Locator;
  readonly firstNameTextBox: Locator;
  readonly middleNameTextBox: Locator;
  readonly lastNameTextBox: Locator;
  readonly saveButton: Locator;
  readonly editButton: Locator;
  readonly employeeNameSearchTextBox: Locator;
  readonly searchButton: Locator;
  readonly newEmployeeNameHeading: Locator;
  readonly personalDetailsHeading: Locator;
  readonly personalDetailsEditButton: Locator;
  readonly personalDetailsSaveButton: Locator;
  readonly otherIdTextBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addPimButton = page.getByRole("button", { name: "Add" });
    this.firstNameTextBox = page.getByRole("textbox", { name: "First Name" });
    this.middleNameTextBox = page.getByRole("textbox", { name: "Middle Name" });
    this.lastNameTextBox = page.getByRole("textbox", { name: "Last Name" });
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.editButton = page.getByRole("button", { name: "Edit" });
    this.employeeNameSearchTextBox = page.getByRole("textbox", {
      name: "Employee Name",
    });
    this.searchButton = page.getByRole("button", { name: "Search" });
    this.newEmployeeNameHeading = page.locator(".orangehrm-edit-employee-name");
    this.personalDetailsHeading = page.getByRole("heading", {
      name: "Personal Details",
    });
    this.personalDetailsEditButton = page
      .getByRole("button", { name: "Edit" })
      .first();
    this.personalDetailsSaveButton = page
      .getByRole("button", { name: "Save" })
      .first();
    this.otherIdTextBox = page.locator('input[name="otherId"]');
  }

  async addEmployee(
    firstName: string,
    middleName: string,
    lastName: string
  ): Promise<void> {
    await this.addPimButton.click();
    await this.firstNameTextBox.fill(firstName);
    await this.middleNameTextBox.fill(middleName);
    await this.lastNameTextBox.fill(lastName);
    await this.saveButton.click();
  }

  async gotoEmployeePersonalDetails(empNumber: string): Promise<void> {
    await this.page.goto(
      `${process.env.BASE_URL}/web/index.php/pim/viewPersonalDetails/empNumber/${empNumber}`
    );
  }

  async updateEmployeeLastName(newLastName: string): Promise<void> {
    await this.editButton.first().click({ timeout: 1000 }).catch(() => {});
    await this.lastNameTextBox.fill(newLastName);
    await this.saveButton.click();
  }

  async searchEmployeeByName(employeeName: string): Promise<void> {
    await this.employeeNameSearchTextBox.fill(employeeName);
    await this.searchButton.click();
  }

  employeeNameCell(employeeName: string): Locator {
    return this.page.getByRole("cell", { name: employeeName });
  }

  async updateOtherId(newOtherId: string): Promise<void> {
    await this.personalDetailsEditButton
      .click({ timeout: 1000 })
      .catch(() => {});
    await this.otherIdTextBox.fill(newOtherId);
    await this.personalDetailsSaveButton.click();
  }
}
