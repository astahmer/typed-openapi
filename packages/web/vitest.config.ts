import { defineConfig } from "vitest/config";
import { createViteAppConfig } from "./vite.config.ts";

/** Vitest: real node:fs (no browser fs.shim) — see playground-runtimes ExtraLib checks. */
export default defineConfig({
  ...createViteAppConfig({ shimFs: false }),
  test: {
    environment: "node",
  },
});
