// cucumber-runner.js
const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const playwright = require('@playwright/test');

setDefaultTimeout(60 * 1000);

class CustomWorld {
  async launchBrowser() {
    this.browser = await playwright.chromium.launch({headless:true});
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
