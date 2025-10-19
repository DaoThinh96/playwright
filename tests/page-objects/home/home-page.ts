import { expect, Page } from '@playwright/test';
import { homeLocale } from "./locale";
import { BasePage } from "../base-page/base-page";

const locale: object = homeLocale();

export class HomePage extends BasePage{
  constructor(page: Page) {
    super(page);
  }

  /* ============ Elements =============== */

  readonly homeElements = {
    tabName: (name: string) => `//a[text()="${name}"]`,
    headerHomePage: `h1.post-title`,
  }

  /* ============ Methods =============== */

  async goto(url: string) {
    await this.page.goto(url);
  }

  async clickTabMenu(name: string) {
    await this.waitAndClick(this.homeElements.tabName(name));
  }

  /* ============ Verifications =============== */
  async verifyHomePageDisplayed() {
    const title = this.page.locator(this.homeElements.headerHomePage)
      await expect(title).toContainText(`${locale.hello}`);
  }
}
