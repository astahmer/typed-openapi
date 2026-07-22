#!/usr/bin/env node
/**
 * Parallel test orchestrator for typed-openapi.
 *
 * Order:
 *  1. Shared fixtures (petstore + effect client for tstyche/MSW)
 *  2. Unit alone (many vitest workers — avoid stacking other vitest)
 *  3. Wave: matrix integration + runtime MSW + attest bench
 *  4. Wave: package typecheck + tstyche + attest types + matrix typecheck
 */
import { spawn } from "node:child_process";

const run = (name, args, env = {}) =>
  new Promise((resolve, reject) => {
    console.log(`\n▶ ${name}: pnpm ${args.join(" ")}`);
    const child = spawn("pnpm", args, {
      stdio: "inherit",
      env: { ...process.env, ...env },
    });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        console.log(`✔ ${name}`);
        resolve();
      } else {
        reject(new Error(`${name} failed (exit ${code ?? "?"})`));
      }
    });
  });

const runAll = async (label, tasks) => {
  console.log(`\n══ ${label} ══`);
  const results = await Promise.allSettled(tasks);
  const failed = results.filter((r) => r.status === "rejected");
  if (failed.length) {
    console.error(`\nFailed in ${label}:`);
    for (const f of failed) {
      if (f.status === "rejected") console.error(`  - ${f.reason?.message ?? f.reason}`);
    }
    throw new Error(`${label} had ${failed.length} failure(s)`);
  }
};

await run("fixtures", ["run", "gen:fixtures"]);
await run("unit", ["run", "test:unit"]);

await runAll("wave runtime", [
  run("matrix:integration", ["run", "test:matrix:integration"]),
  run("runtime:run", ["run", "test:runtime:run"]),
  run("bench:attest", ["run", "test:bench:attest"]),
]);

await runAll("wave types", [
  run("typecheck", ["run", "typecheck"]),
  run("types", ["exec", "tstyche"]),
  run("types:attest", ["run", "test:types:attest"]),
  run("matrix:typecheck", ["run", "test:matrix:typecheck"]),
]);

console.log("\n✔ test:all — all suites passed");
