import { defineConfig } from "cypress";



export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1310,
    viewportHeight: 1262,
    "specPattern": 'cypress/e2e/**/*.cy.js',
    "supportFile": 'cypress/support/commands.ts'
  },
});
