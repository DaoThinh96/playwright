import { test, expect } from '@playwright/test';
import { TodoPage } from './todoPage';

test.describe('TodoMVC advanced tests', () => {
  test('add, toggle, delete todos and validate UI', async ({ browser }) => {
    // Two isolated contexts to simulate two users
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    const todo1 = new TodoPage(page1);
    await todo1.goto();

    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    const todo2 = new TodoPage(page2);
    await todo2.goto();

    // User 1 adds todos
    await todo1.addTodo('Task A');
    await todo1.addTodo('Task B');
    await todo1.addTodo('Task C');
    expect(await todo1.getTodoList()).toEqual(['Task A', 'Task B', 'Task C']);

    // Toggle first todo
    await todo1.toggleTodo(0);
    const firstItem = page1.locator('.todo-list li').first();
    await expect(firstItem).toHaveClass(/completed/);

    // Delete second todo (index 1)
    await todo1.deleteTodo(1);
    expect(await todo1.getTodoList()).toEqual(['Task A', 'Task C']);

    // Ensure user 2 has isolated state (no todos)
    expect(await todo2.getTodoList()).toEqual([]);

    await context1.close();
    await context2.close();
  });

  test('mock 500 error when creating todo', async ({ page }) => {
    await page.route('**/api/todos', route => {
      if (route.request().method() === 'POST') {
        route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({ error: 'Internal Server Error' }),
        });
      } else {
        route.continue();
      }
    });

    const todo = new TodoPage(page);
    await todo.goto();
    await todo.addTodo('Should fail');

    // Depending on the app behavior, check for error message or no new todo
    // We'll assert that no todo is added
    expect(await todo.getTodoList()).not.toContain('Should fail');
  });
});
