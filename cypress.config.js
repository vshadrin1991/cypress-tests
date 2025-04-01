const { defineConfig } = require('cypress')

module.exports = defineConfig({
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 30000,
  viewportHeight: 900,
  viewportWidth: 1240,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
