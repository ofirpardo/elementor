// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 40000,
  globalTimeout: 900000,
  reporter: 'list',
  testDir: '../sanity',
  globalSetup: require.resolve('./global-setup'),
  // retries:1,
  use: {
    headless: true,
    storageState: 'storageState.json',
    baseURL:'http://localhost:8888/',
    viewport: { width: 1440, height: 960 },
    video: 'on',
  },
};

module.exports = config;
