const { defineConfig } = require("cypress");

module.exports = defineConfig({


  //reporting part
  reporter:'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'my_cypress_project',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    //retry mechanism
    retries: {
      runMode: 2,  // Number of retries when running through 'cypress run'
      openMode: 1, // Number of retries when running through 'cypress open'
    },
  },
});
