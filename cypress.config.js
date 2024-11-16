const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://conduit-realworld-example-app.fly.dev/#',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
