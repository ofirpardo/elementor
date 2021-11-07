const { test, expect } = require('@playwright/test');
const { editorPage } = require('../pages/editor-page');
const { wpAdminPage } = require('../pages/wp-admin-page');

test('Icon widget sanity test', async ({ page }) => {
  const wpAdmin = new wpAdminPage(page);
  await wpAdmin.createNewPage();
  
  const editor = new editorPage(page);
  await editor.addWidgitByName('icon');
  const icon = await editor.previewFrame.waitForSelector('i.fa-star');
  expect(await icon.getAttribute('class')).toContain('fa-star');
  await page.selectOption('select', 'stacked');
  await page.selectOption('text=Shape Circle Square >> select', 'square');
  await page.click('text=Left Center Right >> i');

  // Style
  const width = '90'
  await page.click('text=Style');
  await page.fill('input[type="number"]', width);
  // Wait for animation
  await page.waitForTimeout(1000)
  const style = await page.evaluate(e => getComputedStyle(e),icon)
  expect(style.fontSize).toBe(`${width}px`);
});
