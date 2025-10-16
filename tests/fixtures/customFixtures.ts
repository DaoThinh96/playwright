import { test as baseTest } from '@playwright/test';
import path from 'path';
import fs from 'fs';

type TestFixtures = {
  // add typed fixtures here
};

export const test = baseTest.extend<TestFixtures>({});

// Optional global setup helper to create storageState once (candidate improvement)
export async function createAuthState(page, username = 'standard_user', password = 'secret_sauce') {
  await page.goto('/login');
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');
  const storage = await page.context().storageState();
  const outPath = path.resolve(__dirname, '../../storage/authState.json');
  fs.mkdirSync(path.dirname(outPath), { exist_ok: true });
  fs.writeFileSync(outPath, JSON.stringify(storage, null, 2));
}
