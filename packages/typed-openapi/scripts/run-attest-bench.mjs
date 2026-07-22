#!/usr/bin/env node
/**
 * Run @ark/attest benches without host NODE_OPTIONS (e.g. nub --require) that
 * break tsx via ERR_METHOD_NOT_IMPLEMENTED resolveSync.
 */
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);
const tsx = require.resolve("tsx/cli");
const here = dirname(fileURLToPath(import.meta.url));
const bench = join(here, "../tests/attest-generated.bench.ts");

const env = { ...process.env, NODE_OPTIONS: "" };
const result = spawnSync(process.execPath, [tsx, bench, ...process.argv.slice(2)], {
  stdio: "inherit",
  env,
});
process.exit(result.status ?? 1);
