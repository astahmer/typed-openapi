import { cac } from "cac";
import { readFileSync } from "fs";
import { generateClientFiles } from "./generate-client-files.ts";
import { allowedRuntimes } from "./generator.ts";

const { name, version } = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const cli = cac(name);

cli
  .command("<input>", "Generate")
  .option("-o, --output <path>", "Output path for the api client ts file (defaults to `<input>.<runtime>.ts`)")
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
    "Path to typed-openapi config JSON (defaults to typed-openapi.config.json / .typed-openapi.json when present)",
  )
  .option("--format", "Format generated files with oxfmt (defaults to false)", { default: false })
  .option("--schemas-only", "Only generate schemas, skipping client generation (defaults to false)", { default: false })
  .option("--include-client", "Include API client types and implementation (defaults to true)", { default: true })
  .option("--jsdoc", "Emit OpenAPI descriptions as JSDoc comments (defaults to false)", {
    default: true,
  })
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
    "--default-fetcher [name]",
    "Generate default fetcher, defaults to false, can optionally specify a name (will be generated next to the main file) or absolute path for the generated file",
  )
  .action(async (input: string, _options: any) => {
    return generateClientFiles(input, _options);
  });

cli.help();
cli.version(version);
cli.parse();
