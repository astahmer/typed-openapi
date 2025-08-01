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
    `Runtime to use for validation; defaults to \`none\`; available: ${allowedRuntimes.toString()}`,
    { default: "none" },
  )
  .option("--schemas-only", "Only generate schemas, skipping client generation (defaults to false)", { default: false })
  .option("--include-client", "Include API client types and implementation (defaults to true)", { default: true })
  .option(
    "--success-status-codes <codes>",
    "Comma-separated list of success status codes (defaults to 2xx and 3xx ranges)",
  )
  .option(
    "--tanstack [name]",
    "Generate tanstack client, defaults to false, can optionally specify a name for the generated file",
  )
  .action(async (input: string, _options: any) => {
    return generateClientFiles(input, _options);
  });

cli.help();
cli.version(version);
cli.parse();
