// @ts-check
const { test, expect } = require('@playwright/test');

test('Visit the Resonate homepage', async ({ page }) => {
  await page.goto('/');
  console.log("Visiting homepage:" + await page.url())
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Resonate/);
});

test('Visit the Resonate - Who Are We - page', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Who We Are' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Our Journey' })).toBeVisible();
});
