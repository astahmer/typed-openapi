#!/usr/bin/env node
/**
 * Measure generated OpenAPI type-checking in two complementary modes:
 * - generated: compile the generated module itself
 * - usage: compile a realistic API-client call site against that module
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const snapshotsDir = join(packageRoot, "tests/snapshots");
const docsDir = join(packageRoot, "docs");
const usageDir = join(packageRoot, "tmp/typecheck-benchmarks");
const runs = Number.parseInt(process.env.BENCH_RUNS ?? "5", 10);
const requestedMode = process.env.BENCH_MODE ?? "both";
const modes = requestedMode === "both" ? ["generated", "usage"] : [requestedMode];
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
if (!modes.every((mode) => mode === "generated" || mode === "usage")) {
  throw new Error("BENCH_MODE must be 'generated', 'usage', or 'both'.");
}

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
const formatSeconds = (value) => `${value.toFixed(3)} s`;
const formatNumber = (value) => Math.round(value).toLocaleString();
const formatKb = (value) => `${formatNumber(value)} KB`;
const formatMultiplier = (value) => `${value.toFixed(2)}×`;
const resultKey = (result) => `${result.schema}:${result.runtime}`;

const inputValue = (runtime, value) => (runtime === "effect3" ? `${value} as never` : value);
const optionalQuery = (runtime, value) => (runtime === "arktype" ? `[${value}, "?"]` : inputValue(runtime, value));
const usageBySchema = {
  "docker.openapi": {
    calls: (runtime) => [
      `api.get("/services/{id}", {
  query: ${optionalQuery(runtime, "{ insertDefaults: true }")},
  path: ${inputValue(runtime, '{ id: "abc" }')},
})`,
    ],
    consume: `response[0].Endpoint?.Ports?.[0]?.PublishMode === "host"`,
  },
  petstore: {
    calls: (runtime) => [
      `api.get("/pet/{petId}", { path: ${inputValue(runtime, `{ petId: ${["arktype", "effect", "effect3"].includes(runtime) ? '"1"' : "1"} }`)} })`,
      `api.get("/pet/findByStatus", { query: ${optionalQuery(runtime, '{ status: "available" }')} })`,
    ],
    consume: `response[0]?.tags?.[0]?.name ?? response[1]?.[0]?.status`,
  },
  "kombo.openapi": {
    calls: (runtime) => [
      `api.get("/hris/employees", {
  header: ${inputValue(runtime, '{ "X-Integration-Id": "integration" }')},
  query: ${optionalQuery(runtime, '{ include_deleted: "false", page_size: 1 }')},
})`,
    ],
    consume: `response[0].data.results[0]?.work_email ?? response[0].data.next`,
  },
};

function writeUsageProbe(snapshot) {
  const usage = usageBySchema[snapshot.schema];
  if (!usage) throw new Error(`No usage probe defined for ${snapshot.schema}.`);

  const isEffect = snapshot.runtime === "effect" || snapshot.runtime === "effect3";
  const createClient = isEffect ? "createEffectApiClient" : "createApiClient";
  const calls = usage
    .calls(snapshot.runtime)
    .map((call) => `  ${call}`)
    .join(",\n");
  const consume = isEffect
    ? `Effect.all([\n${calls}\n]).pipe(Effect.map((response) => ${usage.consume}))`
    : `Promise.all([\n${calls}\n]).then((response) => ${usage.consume})`;
  const probe = join(usageDir, snapshot.file);

  mkdirSync(dirname(probe), { recursive: true });
  writeFileSync(
    probe,
    [
      `import { ${createClient} } from "../../tests/snapshots/${snapshot.file}";`,
      ...(isEffect ? ['import { Effect } from "effect";'] : []),
      "",
      `const api = ${createClient}({} as Parameters<typeof ${createClient}>[0]);`,
      "",
      "// Keep request-parameter inference and response-property access in the compiler workload.",
      `export const usage = ${consume};`,
      "",
    ].join("\n"),
  );
  return join("tmp/typecheck-benchmarks", snapshot.file);
}

function parseMetric(output, label, suffix = "") {
  const match = output.match(new RegExp(`^${label}:\\s+([\\d.]+)${suffix}\\s*$`, "m"));
  if (!match) throw new Error(`Missing '${label}' in TypeScript diagnostics.`);
  return Number(match[1]);
}

function measure(file) {
  const result = spawnSync("pnpm", [...tsc, file], {
    cwd: packageRoot,
    encoding: "utf8",
    env: { ...process.env, NODE_OPTIONS: "" },
  });
  const output = `${result.stdout ?? ""}${result.stderr ?? ""}`;
  if (result.status !== 0) throw new Error(`Type-check failed for ${file}:\n${output}`);
  return {
    checkTime: parseMetric(output, "Check time", "s"),
    totalTime: parseMetric(output, "Total time", "s"),
    instantiations: parseMetric(output, "Instantiations"),
    memoryUsed: parseMetric(output, "Memory used", "K"),
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

function renderReport({ mode, results, typescriptVersion }) {
  const isUsage = mode === "usage";
  const summary = summarizeByRuntime(results);
  const schemas = [...new Set(results.map((result) => result.schema))].sort((a, b) => a.localeCompare(b));
  const winner = (key) => [...summary].sort((a, b) => a[key] - b[key])[0];
  const lines = [
    `# ${isUsage ? "API-client usage" : "Generated snapshot"} type-check benchmarks`,
    "",
    isUsage
      ? "This report measures TypeScript cost of type-checking realistic generated API-client usage. Lower values are better."
      : "This report measures TypeScript cost of compiling generated OpenAPI modules without API-client calls. Lower values are better.",
    "",
    "## Method",
    "",
    `- ${runs} cold compiler processes per snapshot; check time, instantiations, and memory use are each reported as a median.`,
    "- Docker, Kombo, and Petstore runtime snapshots are included; long-operation-id is intentionally excluded.",
    isUsage
      ? "- Probes create a client, pass schema-specific request params, then consume typed response fields. Effect clients use `Effect.map`; other clients use `Promise.then`."
      : "- Each generated snapshot is compiled directly, establishing the declaration and schema baseline before application code invokes the client.",
    ...(isUsage
      ? [
          "- Effect 3 snapshots currently need `as never` for parameter objects because their generated input type exposes schema internals; their request call and response consumption are still measured.",
        ]
      : []),
    "- Compiler settings: `strict`, `noEmit`, `skipLibCheck`, `NodeNext`, and TypeScript extended diagnostics.",
    "- The existing `test:bench:attest` suite remains the focused Petstore instantiation regression check.",
    "- **Balanced rank** is equal-weight mean of each snapshot's rank for check time, instantiations, and memory. It is a consistency signal, not a substitute for individual metrics.",
    `- TypeScript: ${typescriptVersion}; Node: ${process.version}; platform: ${process.platform}/${process.arch}.`,
    "",
  ];

  if (isUsage) {
    lines.push(
      "## Usage probes",
      "",
      "| Schema | Typed requests | Response use |",
      "| --- | --- | --- |",
      "| Docker | `GET /services/{id}` with `path.id` and `query.insertDefaults` | `Endpoint.Ports[0].PublishMode` |",
      "| Petstore | `GET /pet/{petId}` and `GET /pet/findByStatus` with path and query params | pet tag name and status |",
      "| Kombo | `GET /hris/employees` with integration header and paging query | first employee work email or cursor |",
      "",
    );
  }

  lines.push(
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
  );

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
          `| ${row.checkTimeRank} | ${name(row.runtime)} | ${formatSeconds(row.checkTime)} | ${formatMultiplier(row.checkTime / fastest)} | ${formatNumber(row.instantiations)} | ${formatKb(row.memoryUsed)} | ${formatSeconds(row.checkTimeStandardDeviation)} |`,
      ),
    );
  }

  lines.push(
    "",
    "## Reproduce",
    "",
    "```sh",
    "pnpm --filter typed-openapi run bench:typecheck",
    "pnpm --filter typed-openapi run bench:typecheck:generated",
    "pnpm --filter typed-openapi run bench:typecheck:usage",
    "BENCH_RUNS=9 pnpm --filter typed-openapi run bench:typecheck",
    "```",
    "",
  );
  return lines.join("\n");
}

function writeComparison(baseline, usage) {
  const baselineByKey = new Map(baseline.results.map((result) => [resultKey(result), result]));
  const rows = usage.results
    .map((usageResult) => ({ baseline: baselineByKey.get(resultKey(usageResult)), usage: usageResult }))
    .filter((row) => row.baseline)
    .sort((a, b) => a.usage.schema.localeCompare(b.usage.schema) || a.usage.runtime.localeCompare(b.usage.runtime));
  const runtimeRows = [...Map.groupBy(rows, (row) => row.usage.runtime)]
    .map(([runtime, values]) => ({
      runtime,
      instantiations: median(values.map((row) => row.usage.instantiations / row.baseline.instantiations)),
      checkTime: median(values.map((row) => row.usage.checkTime / row.baseline.checkTime)),
      memoryUsed: median(values.map((row) => row.usage.memoryUsed / row.baseline.memoryUsed)),
    }))
    .sort((a, b) => a.runtime.localeCompare(b.runtime));
  const lines = [
    "# Type-check benchmark comparison",
    "",
    "Usage-to-baseline multipliers isolate the additional compiler work caused by typed API-client calls. Higher values mean application usage adds more work beyond importing generated declarations.",
    "",
    "## Median multiplier by runtime",
    "",
    "| Runtime | Instantiations | Check time | Memory |",
    "| --- | ---: | ---: | ---: |",
    ...runtimeRows.map(
      (row) =>
        `| ${name(row.runtime)} | ${formatMultiplier(row.instantiations)} | ${formatMultiplier(row.checkTime)} | ${formatMultiplier(row.memoryUsed)} |`,
    ),
    "",
    "## Per-schema comparison",
    "",
    "| Schema | Runtime | Baseline instantiations | Usage instantiations | Usage / baseline | Baseline check time | Usage check time | Usage / baseline | Baseline memory | Usage memory | Usage / baseline |",
    "| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |",
    ...rows.map(
      ({ baseline: base, usage: used }) =>
        `| ${used.schema} | ${name(used.runtime)} | ${formatNumber(base.instantiations)} | ${formatNumber(used.instantiations)} | ${formatMultiplier(used.instantiations / base.instantiations)} | ${formatSeconds(base.checkTime)} | ${formatSeconds(used.checkTime)} | ${formatMultiplier(used.checkTime / base.checkTime)} | ${formatKb(base.memoryUsed)} | ${formatKb(used.memoryUsed)} | ${formatMultiplier(used.memoryUsed / base.memoryUsed)} |`,
    ),
    "",
    "Check-time ratios are more sensitive to machine noise than instantiations; use the five-run medians and prioritize instantiation trends when evaluating changes.",
    "",
    "- [Generated snapshot baseline](typecheck-benchmarks.generated.md)",
    "- [API-client usage benchmark](typecheck-benchmarks.usage.md)",
    "",
  ];
  writeFileSync(join(docsDir, "typecheck-benchmarks.md"), lines.join("\n"));
  writeFileSync(join(docsDir, "typecheck-benchmarks.json"), JSON.stringify({ baseline, usage }, null, 2) + "\n");
}

const snapshots = readdirSync(snapshotsDir)
  .map((file) => ({ file, match: file.match(snapshotPattern) }))
  .filter((entry) => entry.match && entry.match.groups.schema in usageBySchema)
  .map(({ file, match }) => ({ file, ...match.groups }))
  .sort((a, b) => a.file.localeCompare(b.file));
if (!snapshots.length) throw new Error("No generated snapshot files found.");

function runMode(mode) {
  console.log(`Benchmarking ${snapshots.length} ${mode} snapshots with ${runs} runs each...`);
  const measured = snapshots.map((snapshot) => {
    const target = mode === "usage" ? writeUsageProbe(snapshot) : join("tests/snapshots", snapshot.file);
    const samples = Array.from({ length: runs }, () => measure(target));
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
  const results = [...Map.groupBy(measured, (result) => result.schema).values()].flatMap((rows) =>
    ["checkTime", "instantiations", "memoryUsed"].reduce((current, metricName) => rank(current, metricName), rows),
  );
  const version = spawnSync("pnpm", ["exec", "tsc", "--version"], { cwd: packageRoot, encoding: "utf8" });
  const typescriptVersion = `${version.stdout}${version.stderr}`.match(/Version\s+(.+)/)?.[1]?.trim() ?? "unknown";
  const report = { mode, runs, typescriptVersion, results };
  writeFileSync(join(docsDir, `typecheck-benchmarks.${mode}.json`), JSON.stringify(report, null, 2) + "\n");
  writeFileSync(join(docsDir, `typecheck-benchmarks.${mode}.md`), renderReport(report));
  return report;
}

function readReport(mode) {
  const file = join(docsDir, `typecheck-benchmarks.${mode}.json`);
  return existsSync(file) ? JSON.parse(readFileSync(file, "utf8")) : undefined;
}

mkdirSync(docsDir, { recursive: true });
const reports = Object.fromEntries(modes.map((mode) => [mode, runMode(mode)]));
const baseline = reports.generated ?? readReport("generated");
const usage = reports.usage ?? readReport("usage");
if (baseline && usage) writeComparison(baseline, usage);
