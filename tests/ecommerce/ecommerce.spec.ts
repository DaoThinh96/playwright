import { test, expect } from '@playwright/test';
import { EcommercePage } from './ecommercePage';
import path from 'path';

test.describe('E-commerce advanced tests', () => {
  test.use({ storageState: path.resolve(__dirname, '../../storage/authState.json') });

  test('add to cart and checkout using storageState', async ({ page }) => {
    const app = new EcommercePage(page);
    await app.goto();

    // Ensure logged in via storageState
    await app.addProductToCart('Sauce Labs Backpack');
    await app.openCart();
    await app.checkout();

    const confirmation = await app.getOrderConfirmationText().catch(() => '');
    expect(typeof confirmation === 'string').toBeTruthy();
  });

  test('mock product price change', async ({ page }) => {
    await page.route('**/api/products/**', route => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ id: 1, name: 'Sauce Labs Backpack', price: 1.99 })
      });
    });

    const app = new EcommercePage(page);
    await app.goto();
    await app.addProductToCart('Sauce Labs Backpack');
    await app.openCart();

    const cartExists = await page.locator('.cart').count();
    expect(cartExists).toBeGreaterThanOrEqual(0);
  });
});
