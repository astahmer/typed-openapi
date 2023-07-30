/// <reference types="vitest" />

import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    setupFiles: ["tests-setup.ts"],
    hideSkippedTests: true,
    // snapshotFormat: { indent: 4, escapeString: false },
  },
});
