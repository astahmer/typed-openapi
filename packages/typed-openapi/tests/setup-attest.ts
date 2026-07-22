import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { setup } from "@ark/attest";
import { genAttestFixtures } from "../scripts/gen-attest-fixtures.ts";

const pkgRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Vitest globalSetup — enables attest type assertions / instantiation caches. */
export default async () => {
  // Must exist before setup() starts the TS program — else imports are `any`.
  if (process.env["ATTEST_skipTypes"] === "0") {
    await genAttestFixtures(pkgRoot);
  }
  return setup({
    // Skip type collection during default unit runs; CI uses ATTEST_skipTypes=0.
    skipTypes: process.env["ATTEST_skipTypes"] !== "0",
    // Dedicated project: main tsconfig excludes this file (keeps package tsc lean).
    tsconfig: join(pkgRoot, "tsconfig.attest.json"),
    benchPercentThreshold: 20,
    benchErrorOnThresholdExceeded: true,
  });
};
