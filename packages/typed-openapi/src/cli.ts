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
    "-r, --runtime <name>",
    `Runtime to use for validation; defaults to \`none\`; available: ${allowedRuntimes.toString()}`,
    { default: "none" },
  )
  .option("--tanstack [name]", "Generate tanstack client, defaults to false, can optionally specify a name for the generated file")
  .option(
    "--schemas-only",
    "Only generate schemas, skipping client generation (defaults to false)",
    { default : false },
  )
  .action(async (input, _options) => {
    return generateClientFiles(input, _options);
  });

cli.help();
cli.version(version);
cli.parse();
