

import { Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class LogingPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  
  /* ============ Elements =============== */

  readonly loginElements = {
    usernameTxt: '.usernameField',
    acceptBtn: '.cmButtons #cmCloseBanner',
  }
    
 //
}