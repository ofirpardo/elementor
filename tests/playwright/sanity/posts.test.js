const { test, expect } = require('@playwright/test');
const { editorPage } = require('../pages/editor-page');
const { wpAdminPage } = require('../pages/wp-admin-page');

test('Posts widget sanity test', async ({ page }) => {
  const wpAdmin = new wpAdminPage(page);
  await wpAdmin.createNewPage();
  
  const editor = new editorPage(page);
  await editor.addWidgitByName('posts');
  const postsHello = await editor.previewFrame.waitForSelector('text=Hello world!');
  expect(await postsHello.innerText()).toBe('Hello world!');
  const postsWelcome = await editor.previewFrame.waitForSelector('text=Welcome to WordPress. This is your first post. Edit or delete it, then start writing!');
  expect(await postsWelcome.innerText()).toBe('Welcome to WordPress. This is your first post. Edit or delete it, then start writing!');
  const postsReadMore = await editor.previewFrame.waitForSelector('text=Read More »');
  expect(await postsReadMore.innerText()).toBe('Read More »');
});
