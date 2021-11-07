// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 40000,
  globalTimeout: 900000,
  reporter: 'list',
  testDir: '../sanity',
<<<<<<< HEAD
  testMatch: 'image.test.js',
  globalSetup: require.resolve('./global-setup'),
  // retries:1,
=======
  globalSetup: require.resolve( './global-setup' ),
  retries: 1,
>>>>>>> 953902f926d5493b159450613a1e702227eb2235
  use: {
    headless: false,
    storageState: './tests/playwright/config/storageState.json',
<<<<<<< HEAD
    baseURL:'http://test.local/',
=======
    baseURL: 'http://localhost:8888/',
>>>>>>> 953902f926d5493b159450613a1e702227eb2235
    viewport: { width: 1440, height: 960 },
    // video: 'on-first-retry',
  },
};

module.exports = config;

