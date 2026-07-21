import { setup } from "@ark/attest";

/** Vitest globalSetup — enables attest type assertions / instantiation caches. */
export default () =>
  setup({
    // Skip type collection during default unit runs; CI uses ATTEST_skipTypes=0.
    skipTypes: process.env.ATTEST_skipTypes !== "0",
    benchPercentThreshold: 20,
    benchErrorOnThresholdExceeded: true,
  });
