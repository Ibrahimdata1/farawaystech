import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  retries: 1,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    // Mobile Android (Chrome)
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
    // Mobile iOS (Safari)
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 13"] },
    },
    // Small phone
    {
      name: "Mobile Chrome SE",
      use: { ...devices["iPhone SE"] },
    },
  ],
  webServer: {
    command: "npm run build && npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
