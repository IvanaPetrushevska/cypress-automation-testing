const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.js',
    defaultCommandTimeout: 6000,
    env: {
      url: "https://rahulshettyacademy.com"
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      embeddedScreenshots: true,
      inlineAssets: true
    }
  }
});