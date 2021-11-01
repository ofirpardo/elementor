const { test, expect } = require('@playwright/test');
const { editorPage } = require('../pages/editor-page');
const { wpAdminPage } = require('../pages/wp-admin-page');

test('Text Editor widget sanity test', async ({ page }) => {
  const wpAdmin = new wpAdminPage(page);
  await wpAdmin.createNewPage();
  
  const editor = new editorPage(page);
  await editor.addWidgitByName('text-editor');
  const textEditor = await editor.previewFrame.waitForSelector('text=Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.');
  expect(await textEditor.innerText()).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.');
});
