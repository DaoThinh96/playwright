import { test as base } from "@playwright/test";
import { expect } from "@playwright/test";
import { LoginPage } from '../page-objects/login-page/login-page';
import ENV from "../../helper/env-config";

type MyFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({page}, use) => {
        let base_url = `${ENV.BASE_URL}`
        const loginPage = new LoginPage(page);

        await loginPage.goto(base_url)
        await page.locator("#login2").click();
        await page.locator("#loginusername").fill("test");
        await page.locator("#loginpassword").fill("test");
        await page.locator('[onclick="logIn()"]').click();
        await expect(page.locator("#logout2")).toBeVisible();
        await page.context().storageState({ path: "./LoginAuth.json" });

        await use(loginPage);
    }
}) 

export { expect } from '@playwright/test';