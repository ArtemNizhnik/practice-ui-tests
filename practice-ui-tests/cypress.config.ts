import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  e2e: {
    baseUrl: "https://practicesoftwaretesting.com",
    specPattern: "cypress/e2e/**/*.spec.ts",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});