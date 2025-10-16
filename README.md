# APPS E2E AUTOMATION

E2E and API testing for 

## Project Structure

This project mainly consists of

- `environments` - Mapping url, login credential for testing environments
- `helper` - Helper class to simplify configuration, settings, etc.
- `pages` - Page Object Model classes for better readability and maintenance of the test script
- `test-data` - Loading test data for multiple environments
- `tests` - Where test scripts are written

## Setup

This project uses `yarn`. There is only one `yarn.lock` for this project and it is under root directory.

**Important**: Use `yarn` with this project. Using `npm` may result in problems

Set up a token in [GitHub](https://github.com/settings/tokens) to gain access to all Till-X packages.

Once you have generated an access token, install packages using your token.

```bash
# Install dependencies
yarn install
npx playwright install --with-deps (if cannot start because missing browser)
```

## Run test with Playwright on local machine

All the test files put in `test`, using `Playwright`: <https://playwright.dev/>

- To run smoke test for `staging` env:

```bash
yarn run playwright:staging
```

- To run smoke test for `uat` env:

```bash
yarn run playwright:uat
```

- To run smoke test for `prod` env:

```bash
yarn run playwright:prod
```


- To run specific spec test (i.e pos-payment) on `staging` env and in headed mode (Web UI visible):

```bash
test_env=staging yarn run playwright test smoke/pos/adjustments/specific file path --headed
```

## Run tests for releases with Playwright on Github Lab

- Set params for the workflow: ENV, TENANT
- Click on `New Pipline`