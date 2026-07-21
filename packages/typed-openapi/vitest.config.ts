/// <reference types="vitest" />

import { defineConfig, configDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    hideSkippedTests: true,
    globalSetup: ["./tests/setup-attest.ts"],
    ...(process.env["TEST_UNIT"]
      ? {
          exclude: [
            ...configDefaults.exclude,
            "**/tests/integration-runtime-msw.test.ts",
            "**/tests/integration-effect-msw.test.ts",
            "**/tests/runtime-client-matrix.integration.test.ts",
            "**/tests/runtime-client-matrix.typecheck.test.ts",
            "**/tests/attest-generated.types.test.ts",
            "**/tests/attest-generated.bench.ts",
          ],
        }
      : undefined),
    snapshotFormat: {
      escapeString: false,
    },
  },
});
