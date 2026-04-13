import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  test: {
    projects: [
      {
        extends: "./vite.config.js",
        test: {
          include: ["**/*.node.test.{js,jsx}"],
          name: "happy-dom",
          environment: "happy-dom",
          coverage: ["text", "json", "html"],
        },
      },
      {
        extends: "./vite.config.js",
        test: {
          include: ["**/*.browser.test.{js,jsx}"],
          name: "browser",
          coverage: ["text", "json", "html"],
          browser: {
            provider: playwright(),
            enabled: true,
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
