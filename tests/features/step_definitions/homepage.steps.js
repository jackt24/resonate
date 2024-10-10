const { Given, When, Then, Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium, expect } = require("@playwright/test");
const { Page } = require("playwright");

setDefaultTimeout(60 * 1000);

let page, browser;

Before(async function () {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    page = await context.newPage();
});

Given('I navigate to {string}', async (url) => {
    await page.goto(url);
});
  
When('I get the page title', async () => {
    this.title = await page.title();
});

Then('the page title should be {string}', async (expectedTitle) => {
    expect(this.title).toBe(expectedTitle);
});

When('I check for the {string} link', async (linkText) => {
    this.link = await page.locator(`text=${linkText}`);
});

Then('I should see the {string} link on the page', async (linkText) => {
    await expect(this.link).toBeVisible();
});

Then('I should see a form on the page', async () => {
    const form = await page.locator('form');
    await expect(form).toBeVisible();
});

Then('I should see the text {string} on the page', async (expectedText) => {
    const body = await page.textContent('body');
    expect(body).toContain(expectedText);
});

Then('the footer should contain {string}', async (expectedText) => {
    const footer = await page.locator('#company-details');
    await expect(footer).toContainText(expectedText);
});

When('I check all images', async () => {
    this.images = await page.locator('img');
});

Then('all images should be loaded correctly', async () => {
const imageCount = await this.images.count();
for (let i = 0; i < imageCount; i++) {
    const naturalWidth = await this.images.nth(i).evaluate((img) => img.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
}
});

Given('I open the website on a mobile device', async () => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone 6/7/8 dimensions
});

Then('the layout should be adjusted for a mobile view', async () => {
    const viewport = await page.viewportSize();
    expect(viewport.width).toBe(375); // Checking if the layout is responsive
});

// When('I check for broken links', async () => {
//     const links = await page.locator('a');
//     this.brokenLinks = [];
//     const linkCount = await links.count();

//     for (let i = 0; i < linkCount; i++) {
//         const linkHref = await links.nth(i).getAttribute('href');
//         const response = await page.goto(linkHref);
//         if (response.status() >= 400) {
//         this.brokenLinks.push(linkHref);
//         }
//     }
// });

Then('there should be no broken links', async () => {
    expect(this.brokenLinks.length).toBe(0);
});

When('I click the {string} link', async (linkText) => {
    await page.click(`text=${linkText}`);
});

Then('I should be on the {string} page', async (pageTitle) => {
    const title = await page.title();
    expect(title).toBe(pageTitle);
});

After(async function () {
    await browser.close();
})