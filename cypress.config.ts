import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173/',
    viewportWidth: 1080,
    viewportHeight: 1306,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
