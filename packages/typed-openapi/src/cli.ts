import SwaggerParser from "@apidevtools/swagger-parser";
import { cac } from "cac";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { join } from "pathe";
import { type } from "arktype";

import { writeFile } from "fs/promises";
import { name, version } from "../package.json";
import { allowedRuntimes, generateFile } from "./generator";
import { mapOpenApiEndpoints } from "./map-openapi-endpoints";

const cwd = process.cwd();
const cli = cac(name);
const now = new Date();

const optionsSchema = type({ "output?": "string", runtime: allowedRuntimes });

cli
  .command("<input>", "Generate")
  .option("-o, --output <path>", "Output path for the api client ts file (defaults to `<input>.<runtime>.ts`)")
  .option(
    "-r, --runtime <name>",
    `Runtime to use for validation; defaults to \`none\`; available: ${allowedRuntimes.definition}`,
    { default: "none" },
  )
  .action(async (input, _options) => {
    const options = optionsSchema.assert(_options);
    const openApiDoc = (await SwaggerParser.bundle(input)) as OpenAPIObject;

    const ctx = mapOpenApiEndpoints(openApiDoc);
    console.log(`Found ${ctx.endpointList.length} endpoints`);

    const content = generateFile({ ...ctx, runtime: options.runtime });
    const output = join(
      cwd,
      options.output ?? input + `.${options.runtime === "none" ? "client" : options.runtime}.ts`,
    );

    console.log("Generating...", output);
    await writeFile(output, content);
    console.log(`Done in ${new Date().getTime() - now.getTime()}ms !`);
  });

cli.help();
cli.version(version);
cli.parse();
