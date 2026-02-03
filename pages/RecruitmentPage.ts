import { Locator, Page } from "@playwright/test";

export type CandidateData = {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
};

export class RecruitmentPage {
  readonly page: Page;
  readonly firstNameTextBox: Locator;
  readonly middleNameTextBox: Locator;
  readonly lastNameTextBox: Locator;
  readonly emailTextBox: Locator;
  readonly vacancyDropdown: Locator;
  readonly vacancyOptions: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameTextBox = page.getByRole("textbox", { name: "First Name" });
    this.middleNameTextBox = page.getByRole("textbox", { name: "Middle Name" });
    this.lastNameTextBox = page.getByRole("textbox", { name: "Last Name" });
    this.emailTextBox = page.getByRole("textbox", { name: "Email" });
    this.vacancyDropdown = page.getByRole("combobox", { name: "Vacancy" });
    this.vacancyOptions = page.locator(
      ".oxd-select-dropdown .oxd-select-option"
    );
    this.saveButton = page.getByRole("button", { name: "Save" });
  }

  async gotoAddCandidate(): Promise<void> {
    await this.page.goto(
      `${process.env.BASE_URL}/web/index.php/recruitment/addCandidate`
    );
  }

  async selectFirstVacancy(): Promise<void> {
    await this.vacancyDropdown.click().catch(async () => {
      await this.page.locator(".oxd-select-text-input").first().click();
    });
    await this.vacancyOptions.first().click();
  }

  async addCandidate(candidate: CandidateData): Promise<void> {
    await this.firstNameTextBox.fill(candidate.firstName);
    if (candidate.middleName) {
      await this.middleNameTextBox.fill(candidate.middleName);
    }
    await this.lastNameTextBox.fill(candidate.lastName);
    await this.emailTextBox.fill(candidate.email);
    await this.selectFirstVacancy();
    await this.saveButton.click();
  }
}
