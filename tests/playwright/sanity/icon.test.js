const { test, expect } = require('@playwright/test');
const { editorPage } = require('../pages/editor-page');
const { wpAdminPage } = require('../pages/wp-admin-page');

test('Icon widget sanity test', async ({ page }) => {
  let icon
  const getComputedStyle = async (element,pseudo) => page.evaluate(([e, p]) => getComputedStyle(e,p),[element,pseudo])

  const wpAdmin = new wpAdminPage(page);
  await wpAdmin.createNewPage();
  
  const editor = new editorPage(page);
  await editor.addWidgitByName('icon');
  icon = await editor.previewFrame.waitForSelector('i.fa-star');
  style = await getComputedStyle(icon, 'before')
  expect(style.content.charCodeAt()).toBe(34);

  //Conent
  await page.click('.elementor-control-media__preview');
  await page.click('.elementor-icons-manager__tab__item__icon.fas.fa-surprise');
  await page.click('button:has-text("Insert")');
  await page.waitForTimeout(1000)
  icon = await editor.previewFrame.waitForSelector('i.fa-surprise');
  // TODO Add visual validation


  await page.selectOption('select', 'stacked');
  await page.selectOption('text=Shape Circle Square >> select', 'square');
  await page.click('text=Left Center Right >> i');
  // TODO Add visual validation

  // Style
  const width = '90'
  await page.click('text=Style');
  await page.fill('input[type="number"]', width);
  // Wait for animation
  await page.waitForTimeout(1000);
  icon = await editor.previewFrame.waitForSelector('.elementor-icon:first-child');
  style = await getComputedStyle(icon,'')
  expect(style.fontSize).toBe(`${width}px`);
});
