import { cac } from "cac";
import { readFileSync } from "fs";
import { generateClientFiles } from "./generate-client-files.ts";
import { allowedRuntimes } from "./generator.ts";

const { name, version } = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const cli = cac(name);

cli
  .command("[input]", "Generate (OpenAPI path; optional when `input` is set in config)")
  .option("-o, --output <path>", "Output path for the api client ts file (defaults to `<input>.<runtime>.ts`)")
  .option("--input-dir <path>", "Directory for the default output when the OpenAPI input is an HTTP(S) URL")
  .option(
    "-r, --runtime <n>",
    `Runtime to use for validation; defaults to \`none\` (or config file); available: ${allowedRuntimes.toString()}`,
  )
  .option(
    "--validation <level>",
    "Validation depth for runtime schemas: `loose` (structure only), `formats` (+ email/uuid/…), `strict` (+ min/max/pattern/…). Default: `strict` when runtime ≠ none",
    { default: undefined },
  )
  .option(
    "-c, --config <path>",
    "Path to typed-openapi config (JSON or TS/JS with defineConfig); defaults to typed-openapi.config.ts / .json when present",
  )
  .option("--format", "Format generated files with oxfmt (defaults to false)")
  .option("--schemas-only", "Only generate schemas, skipping client generation (defaults to false)")
  .option("--include-client", "Include API client types and implementation (defaults to true)")
  .option("--jsdoc", "Emit OpenAPI descriptions as JSDoc comments (defaults to true)")
  .option(
    "--success-status-codes <codes>",
    "Comma-separated list of success status codes (defaults to 2xx and 3xx ranges)",
  )
  .option("--error-status-codes <codes>", "Comma-separated list of error status codes (defaults to 4xx and 5xx ranges)")
  .option(
    "--tanstack [name]",
    "Generate tanstack client, defaults to false, can optionally specify a name (will be generated next to the main file) or absolute path for the generated file",
  )
  .option(
    "--msw [name]",
    "Generate MSW request handlers, defaults to false; optional output name/path next to the main file",
  )
  .option("--msw-faker", "Use @faker-js/faker in generated MSW mock factories (requires the package installed)")
  .option("--msw-base-url <url>", 'Base URL/prefix for MSW handlers (default: "*")')
  .option(
    "--default-fetcher [name]",
    "Generate default fetcher, defaults to false, can optionally specify a name (will be generated next to the main file) or absolute path for the generated file",
  )
  .option("--endpoint <regex>", "Keep endpoints matching regex (method/path/operationId/alias/tags); repeatable")
  .option("--schema <regex>", "When tree-shaking, also keep schemas matching regex (name/ref); repeatable")
  .option("--tree-shake-schemas", "Drop unused component schemas (default: on when --endpoint is set)")
  .option("--no-tree-shake-schemas", "Emit all component schemas even when filtering endpoints")
  .option(
    "--schema-naming <mode>",
    "Component schema naming: auto | always-name | prefer-inline (inline single-use non-recursive schemas)",
  )
  .option(
    "--client <kind>",
    "API client style: promise | effect (default: effect when runtime is effect/effect3, else promise)",
  )
  .option("--validate-side <side>", "When using a runtime: none | input | output | both (default: both)")
  .option(
    "--coerce",
    "Coerce number/boolean path|query|cookie|header params from strings (default: on when runtime ≠ none)",
  )
  .option("--no-coerce", "Disable string coercion for path|query|cookie|header params")
  .option(
    "--transform-dates",
    "Map format date-time/date to Date (types + runtime transforms; none-runtime revives ISO strings)",
  )
  .option("--transform-bigint", "Map format int64 to bigint (types + runtime transforms)")
  .option(
    "--runtime-types",
    "Generate and use an experimental .d.ts sidecar for runtime validator types",
  )
  .option("--no-runtime-types", "Inline runtime validator types instead of generating a .d.ts sidecar")
  .action(async (input: string | undefined, _options: any) => {
    return generateClientFiles(input, _options);
  });

cli.help();
cli.version(version);
cli.parse();
