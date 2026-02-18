import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'fdarmg',
  e2e: {
    baseUrl: "https://practicesoftwaretesting.com/",
    specPattern: "cypress/e2e/**/*.spec.ts",
    supportFile: "cypress/support/e2e.ts",
  },
});