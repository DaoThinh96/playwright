import { test, expect } from '@playwright/test';
import { HomePage } from '../../page-objects/home/home-page';
import ENV from '../../../helper/env-config';

test.describe('Verify home page', () => {
  test('Navigate to Home page and verify it', async ({ page }) => {
  const homePage = new HomePage(page);
    await homePage.goto(`${ENV.BASE_URL}`);
    await homePage.verifyHomePageDisplayed();
  });

  test('Mocking entries api and simulate 500 error', async ({ browser, page }) => {
  const homePage = new HomePage(page);
    await homePage.goto(`${ENV.BASE_URL}`);
  });
});
