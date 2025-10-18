import { expect, Page } from '@playwright/test';
import { loginLocale } from "./locale";
import { BasePage } from "../base-page/base-page";

const locale: object = loginLocale();

export class LoginPage extends BasePage{
  constructor(page: Page) {
    super(page);
  }

  /* ============ Elements =============== */

  readonly loginElements = {
    testLoginPageLink: `//a[text()="${locale.testLoginPage}"]`,
    testExceptionsLink: `//a[text()="${locale.testExceptions}"]`,
    headerPage: `h1.post-title`,
    username: `input#username`,
    password: `input#password`,
  }

  /* ============ Methods =============== */

  async clickTestLoginPageLink() {
    await this.waitAndClick(this.loginElements.testLoginPageLink);
  }

  async clickTestExceptionsLink() {
    await this.waitAndClick(this.loginElements.testExceptionsLink);
  }

  async inputUsername(username: string) {
    await this.waitAndFill(this.loginElements.username, username);
  }

  async inputPassword(password: string) {
    await this.waitAndFill(this.loginElements.password, password);
  }

  async clickSubmitBtn() {
    await this.page.getByRole('button', {name: `${locale.submit}`}).click();
  }

  /* ============ Verifications =============== */
  async verifyPracticePageDisplayed() {
    const title = this.page.locator(this.loginElements.headerPage)
      await expect(title).toContainText(`${locale.practice}`);
  }
}
