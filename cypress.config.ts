const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    baseUrl: 'https://pet-shop.buckhill.com.hr',
    "retries": {
      "runMode": 3,
      "openMode": 3
    }
  },
});
