import { Page } from '@playwright/test';

export async function safeClick(page: Page, selector: string) {
  await page.waitForSelector(selector, { state: 'visible' });
  await page.click(selector);
}
