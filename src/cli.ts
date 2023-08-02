import SwaggerParser from "@apidevtools/swagger-parser";
import { cac } from "cac";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { join } from "pathe";

import { writeFile } from "fs/promises";
// @ts-expect-error
import { name, version } from "../package.json";
import { generateTsRouter } from "./generator";
import { mapOpenApiEndpoints } from "./map-openapi-endpoints";

const cwd = process.cwd();
const cli = cac(name);
const now = new Date();

cli
  .command("<input>", "Generate")
  .option("-o, --output <path>", "Output path for the api client ts file (defaults to `<input>.client.ts`)")
  .action(async (input, options) => {
    const openApiDoc = (await SwaggerParser.bundle(input)) as OpenAPIObject;

    const router = mapOpenApiEndpoints(openApiDoc);
    console.log(`Found ${router.endpointList.length} endpoints`);

    const content = generateTsRouter(router);
    const output = join(cwd, options.output ?? input + ".client.ts");

    console.log("Generating...", output);
    await writeFile(output, content);
    console.log(`Done in ${new Date().getTime() - now.getTime()}ms !`);
  });

cli.help();
cli.version(version);
cli.parse();
