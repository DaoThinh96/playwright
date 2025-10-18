
import { Browser, Page, chromium } from '@playwright/test';
import { test } from '../fixtures/base-fixture';
import { BrowserType  } from 'playwright';
import { LoginPage } from '../page-objects/login-page/login-page';
import ENV from "../../helper/env-config";

test.describe('Verify practice page', () => {

  let base_url: string = `${ENV.BASE_URL}`;
  test('Navigate to Practice page and verify it', async ({ browser, page, loginPage }) => {
    await page.waitForTimeout(10000);
  });
});
