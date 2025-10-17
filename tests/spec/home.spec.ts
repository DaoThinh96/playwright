import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/home/home-page';

test.describe('Verify home page', () => {
  test('Navigate to Home page and verify it', async ({ browser, page }) => {
  const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.verifyHomePageDisplayed();
  });
});
