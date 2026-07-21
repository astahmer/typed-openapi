import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { setup } from "@ark/attest";

const pkgRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Vitest globalSetup — enables attest type assertions / instantiation caches. */
export default () =>
  setup({
    // Skip type collection during default unit runs; CI uses ATTEST_skipTypes=0.
    skipTypes: process.env["ATTEST_skipTypes"] !== "0",
    // Dedicated project: main tsconfig excludes this file (keeps package tsc lean).
    tsconfig: join(pkgRoot, "tsconfig.attest.json"),
    benchPercentThreshold: 20,
    benchErrorOnThresholdExceeded: true,
  });
