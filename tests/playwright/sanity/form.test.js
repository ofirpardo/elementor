const { test, expect } = require('@playwright/test');
const { editorPage } = require('../pages/editor-page');
const { wpAdminPage } = require('../pages/wp-admin-page');

test('Form widget sanity test', async ({ page }) => {
  const wpAdmin = new wpAdminPage(page);
  await wpAdmin.createNewPage();
  
  const editor = new editorPage(page);
  await editor.addWidgitByName('form');
  const form = await editor.previewFrame.waitForSelector('text=Name Email Message Submit Send');
  expect(await form.innerText()).toBe('Name\nEmail\nMessage\nSubmit\nSend');
});
