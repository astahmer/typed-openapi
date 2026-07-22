#!/usr/bin/env node
/** Type-check generated snapshots in isolation and publish a comparable report. */
import { spawnSync } from "node:child_process";
import { mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const snapshotsDir = join(packageRoot, "tests/snapshots");
const docsDir = join(packageRoot, "docs");
const runs = Number.parseInt(process.env.BENCH_RUNS ?? "5", 10);
const snapshotPattern = /^(?<schema>.+)\.(?<runtime>arktype|client|effect3?|typebox|typia|valibot|zod3?)\.ts$/;
const tsc = [
  "exec",
  "tsc",
  "--ignoreConfig",
  "--noEmit",
  "--skipLibCheck",
  "--strict",
  "--target",
  "ESNext",
  "--module",
  "NodeNext",
  "--moduleResolution",
  "NodeNext",
  "--allowImportingTsExtensions",
  "--lib",
  "DOM,ES2021",
  "--extendedDiagnostics",
];

if (!Number.isSafeInteger(runs) || runs < 1) throw new Error("BENCH_RUNS must be a positive integer.");

const names = {
  arktype: "ArkType",
  client: "Client only",
  effect: "Effect",
  effect3: "Effect 3",
  typebox: "TypeBox",
  typia: "Typia",
  valibot: "Valibot",
  zod: "Zod 4",
  zod3: "Zod 3",
};
const name = (runtime) => names[runtime] ?? runtime;
const median = (values) => {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
};
const standardDeviation = (values) => {
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
  return Math.sqrt(values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / values.length);
};
const metric = (output, label, suffix = "") => {
  const match = output.match(new RegExp(`^${label}:\\s+([\\d.]+)${suffix}\\s*$`, "m"));
  if (!match) throw new Error(`Missing '${label}' in TypeScript diagnostics.`);
  return Number(match[1]);
};
const formatSeconds = (value) => `${value.toFixed(3)} s`;
const formatNumber = (value) => Math.round(value).toLocaleString();
const formatKb = (value) => `${formatNumber(value)} KB`;

function measure(file) {
  const result = spawnSync("pnpm", [...tsc, file], {
    cwd: packageRoot,
    encoding: "utf8",
    env: { ...process.env, NODE_OPTIONS: "" },
  });
  const output = `${result.stdout ?? ""}${result.stderr ?? ""}`;
  if (result.status !== 0) throw new Error(`Type-check failed for ${file}:\n${output}`);
  return {
    checkTime: metric(output, "Check time", "s"),
    totalTime: metric(output, "Total time", "s"),
    instantiations: metric(output, "Instantiations"),
    memoryUsed: metric(output, "Memory used", "K"),
  };
}

function rank(rows, metricName) {
  return [...rows]
    .sort((a, b) => a[metricName] - b[metricName] || a.runtime.localeCompare(b.runtime))
    .map((row, index) => ({ ...row, [`${metricName}Rank`]: index + 1 }));
}

function summarizeByRuntime(rows) {
  const summaries = [...Map.groupBy(rows, (row) => row.runtime)].map(([runtime, values]) => ({
    runtime,
    checkTime: median(values.map((value) => value.checkTime)),
    instantiations: median(values.map((value) => value.instantiations)),
    memoryUsed: median(values.map((value) => value.memoryUsed)),
    averageRank:
      values.reduce((sum, value) => sum + value.checkTimeRank + value.instantiationsRank + value.memoryUsedRank, 0) /
      (values.length * 3),
  }));
  return rank(rank(rank(summaries, "checkTime"), "instantiations"), "memoryUsed").sort(
    (a, b) => a.averageRank - b.averageRank || a.runtime.localeCompare(b.runtime),
  );
}

function renderReport(results, typescriptVersion) {
  const summary = summarizeByRuntime(results);
  const schemas = [...new Set(results.map((result) => result.schema))].sort((a, b) => a.localeCompare(b));
  const winner = (key) => [...summary].sort((a, b) => a[key] - b[key])[0];
  const lines = [
    "# Generated snapshot type-check benchmarks",
    "",
    "This report compares TypeScript cost of compiling each generated OpenAPI snapshot in isolation. Lower values are better.",
    "",
    "## Method",
    "",
    `- ${runs} cold compiler processes per snapshot; check time, instantiations, and memory use are each reported as a median.`,
    "- Every `tests/snapshots/<schema>.<runtime>.ts` file is included; this currently covers Docker, Kombo, Petstore, and long-operation-id snapshots.",
    "- Compiler settings: `strict`, `noEmit`, `skipLibCheck`, `NodeNext`, and TypeScript extended diagnostics.",
    "- The existing `test:bench:attest` suite remains the focused Petstore instantiation regression check; this report adds broader compiler diagnostics.",
    "- **Balanced rank** is equal-weight mean of each snapshot's rank for check time, instantiations, and memory. It is a consistency signal, not a substitute for individual metrics.",
    `- TypeScript: ${typescriptVersion}; Node: ${process.version}; platform: ${process.platform}/${process.arch}.`,
    "",
    "## Overall runtime ranking",
    "",
    "| Overall rank | Runtime | Balanced rank | Time rank | Instantiation rank | Memory rank | Median check time | Median instantiations | Median memory |",
    "| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |",
    ...summary.map(
      (row, index) =>
        `| ${index + 1} | ${name(row.runtime)} | ${row.averageRank.toFixed(2)} | ${row.checkTimeRank} | ${row.instantiationsRank} | ${row.memoryUsedRank} | ${formatSeconds(row.checkTime)} | ${formatNumber(row.instantiations)} | ${formatKb(row.memoryUsed)} |`,
    ),
    "",
    "## Metric leaders",
    "",
    "| Metric | Winner | Result |",
    "| --- | --- | ---: |",
    `| Median check time | ${name(winner("checkTime").runtime)} | ${formatSeconds(winner("checkTime").checkTime)} |`,
    `| Median instantiations | ${name(winner("instantiations").runtime)} | ${formatNumber(winner("instantiations").instantiations)} |`,
    `| Median memory | ${name(winner("memoryUsed").runtime)} | ${formatKb(winner("memoryUsed").memoryUsed)} |`,
  ];
  for (const schema of schemas) {
    const rows = results
      .filter((result) => result.schema === schema)
      .sort((a, b) => a.checkTime - b.checkTime || a.runtime.localeCompare(b.runtime));
    const fastest = rows[0].checkTime;
    lines.push(
      "",
      `## ${schema}`,
      "",
      "| Check rank | Runtime | Median check time | vs. fastest | Instantiations | Memory | Time σ |",
      "| ---: | --- | ---: | ---: | ---: | ---: | ---: |",
      ...rows.map(
        (row) =>
          `| ${row.checkTimeRank} | ${name(row.runtime)} | ${formatSeconds(row.checkTime)} | ${(row.checkTime / fastest).toFixed(2)}× | ${formatNumber(row.instantiations)} | ${formatKb(row.memoryUsed)} | ${formatSeconds(row.checkTimeStandardDeviation)} |`,
      ),
    );
  }
  lines.push(
    "",
    "## Reproduce",
    "",
    "```sh",
    "pnpm --filter typed-openapi run bench:typecheck",
    "# Raise sample count when comparing a change",
    "BENCH_RUNS=9 pnpm --filter typed-openapi run bench:typecheck",
    "```",
    "",
    "Raw measurements are stored beside this report in `typecheck-benchmarks.json`.",
    "",
  );
  return lines.join("\n");
}

const snapshots = readdirSync(snapshotsDir)
  .map((file) => ({ file, match: file.match(snapshotPattern) }))
  .filter((entry) => entry.match)
  .map(({ file, match }) => ({ file, ...match.groups }))
  .sort((a, b) => a.file.localeCompare(b.file));
if (!snapshots.length) throw new Error("No generated snapshot files found.");

console.log(`Benchmarking ${snapshots.length} snapshots with ${runs} runs each...`);
const measured = snapshots.map((snapshot) => {
  const samples = Array.from({ length: runs }, () => measure(join("tests/snapshots", snapshot.file)));
  const result = {
    ...snapshot,
    checkTime: median(samples.map((sample) => sample.checkTime)),
    checkTimeStandardDeviation: standardDeviation(samples.map((sample) => sample.checkTime)),
    totalTime: median(samples.map((sample) => sample.totalTime)),
    instantiations: median(samples.map((sample) => sample.instantiations)),
    memoryUsed: median(samples.map((sample) => sample.memoryUsed)),
    samples,
  };
  console.log(
    `${snapshot.file}: ${formatSeconds(result.checkTime)}, ${formatNumber(result.instantiations)} instantiations`,
  );
  return result;
});
const ranked = [...Map.groupBy(measured, (result) => result.schema).values()].flatMap((rows) =>
  ["checkTime", "instantiations", "memoryUsed"].reduce((current, metricName) => rank(current, metricName), rows),
);
const version = spawnSync("pnpm", ["exec", "tsc", "--version"], { cwd: packageRoot, encoding: "utf8" });
const typescriptVersion = `${version.stdout}${version.stderr}`.match(/Version\s+(.+)/)?.[1]?.trim() ?? "unknown";
mkdirSync(docsDir, { recursive: true });
writeFileSync(
  join(docsDir, "typecheck-benchmarks.json"),
  JSON.stringify({ runs, typescriptVersion, results: ranked }, null, 2) + "\n",
);
writeFileSync(join(docsDir, "typecheck-benchmarks.md"), renderReport(ranked, typescriptVersion));
console.log(`Wrote ${join(docsDir, "typecheck-benchmarks.md")}`);
