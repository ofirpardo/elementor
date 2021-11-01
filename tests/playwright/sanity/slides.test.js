const { test, expect } = require('@playwright/test');
const { editorPage } = require('../pages/editor-page');
const { wpAdminPage } = require('../pages/wp-admin-page');

test('Slides widget sanity test', async ({ page }) => {
  const wpAdmin = new wpAdminPage(page);
  await wpAdmin.createNewPage();
  
  const editor = new editorPage(page);
  await editor.addWidgitByName('slides');
  const slides1 = await editor.previewFrame.waitForSelector(':nth-match(:text("Slide 1 Heading Lorem ipsum dolor sit amet consectetur adipiscing elit dolor Cli"), 2)');
  expect(await slides1.innerText()).toBe('Slide 1 Heading\nLorem ipsum dolor sit amet consectetur adipiscing elit dolor\nClick Here');
  await editor.previewFrame.click('[aria-label="Next slide"]');
  const slides2 = await editor.previewFrame.waitForSelector(':nth-match(:text("Slide 2 Heading Lorem ipsum dolor sit amet consectetur adipiscing elit dolor Cli"), 2)');
  expect(await slides2.innerText()).toBe('Slide 2 Heading\nLorem ipsum dolor sit amet consectetur adipiscing elit dolor\nClick Here');
  await editor.previewFrame.click('[aria-label="Next slide"]');
  const slides3 = await editor.previewFrame.waitForSelector(':nth-match(:text("Slide 3 Heading Lorem ipsum dolor sit amet consectetur adipiscing elit dolor Cli"), 2)');
  expect(await slides3.innerText()).toBe('Slide 3 Heading\nLorem ipsum dolor sit amet consectetur adipiscing elit dolor\nClick Here');
});
