import { Page } from '@playwright/test';

export class EcommercePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/ecommerce');
  }

  async login(username: string, password: string) {
    await this.page.goto('/login');
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
  }

  async addProductToCart(productName: string) {
    await this.page.locator('text=' + productName).first().click();
    await this.page.click('button#add-to-cart');
  }

  async openCart() {
    await this.page.click('a[href="/cart"]');
  }

  async checkout() {
    await this.page.click('button#checkout');
  }

  async getOrderConfirmationText() {
    return this.page.locator('.order-confirmation').innerText();
  }
}
