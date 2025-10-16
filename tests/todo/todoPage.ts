import { Page } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly inputSelector = '.new-todo';
  readonly todoList = '.todo-list li';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/todomvc');
  }

  async addTodo(todoText: string) {
    await this.page.fill(this.inputSelector, todoText);
    await this.page.press(this.inputSelector, 'Enter');
  }

  async toggleTodo(index: number) {
    const checkbox = this.page.locator(this.todoList).nth(index).locator('input.toggle');
    await checkbox.click();
  }

  async deleteTodo(index: number) {
    const item = this.page.locator(this.todoList).nth(index);
    await item.hover();
    await item.locator('button.destroy').click();
  }

  async getTodoList(): Promise<string[]> {
    return this.page.locator(this.todoList).allTextContents();
  }
}
