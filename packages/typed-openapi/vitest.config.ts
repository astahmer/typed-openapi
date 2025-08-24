/// <reference types="vitest" />

import { defineConfig, configDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    hideSkippedTests: true,
    ...process.env["TEST_UNIT"] ? {
      exclude: [
        ...configDefaults.exclude,
        '**\/tests\/integration-runtime-msw.test.ts',
      ],
    } : undefined,
    snapshotFormat: {
      escapeString: false,
    },
  },
});
