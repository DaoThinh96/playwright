import { Route } from '@playwright/test';

export function mockCreateTodoError(route: Route) {
  if (route.request().method() === 'POST') {
    return route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ error: 'Internal Server Error' }),
    });
  }
  return route.continue();
}
