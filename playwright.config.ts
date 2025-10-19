import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  globalSetup: "./helper/global-setup.ts",
  testDir: './tests',
  snapshotPathTemplate: `test-data/snapshot/${process.env.tenant}/desktop/{arg}{ext}`,
  /* Maximum time one test can run for. */
  timeout: 240 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 30000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["line"],
    [
      "allure-playwright",
    ],
  ],
  /* Register global setup script in the Playwright configuration file */
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',

    // Capture screenshot on failure
    screenshot: 'only-on-failure',
    video: 'on',
    viewport: { width: 1900, height: 940 },
    extraHTTPHeaders: {
      // We set this header per GitHub guidelines.
      'Accept': 'application/vnd.github.v3+json',
      // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8; application/json', 
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
      // 'Authorization': `token ${process.env.API_TOKEN}`,
    },
    bypassCSP: true,
    ignoreHTTPSErrors: true,
    javaScriptEnabled: true,
    launchOptions: { args: ['--test-third-party-cookie-phaseout', '--disable-web-security'] },
    storageState: './LoginAuth.json',
  },

  /* Configure projects for major browsers */
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'],
    //     viewport: { width: 1600, height: 1200 },
    //     launchOptions: {
    //       args: ["--start-maximized", '--test-third-party-cookie-phaseout'],
          
    //     }
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { channel: 'chrome' },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
});
