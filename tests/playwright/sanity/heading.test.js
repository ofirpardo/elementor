const { test, expect } = require('@playwright/test');
const { editorPage } = require('../pages/editor-page');
const { wpAdminPage } = require('../pages/wp-admin-page');

test('Heading widget sanity test', async ({ page }) => {
  const wpAdmin = new wpAdminPage(page);
  await wpAdmin.createNewPage();
  
  const editor = new editorPage(page);
  await editor.addWidgitByName('heading');
  const heading = await editor.previewFrame.waitForSelector('text=Add Your Heading Text Here');
  expect(await heading.innerText()).toBe('Add Your Heading Text Here');
});
