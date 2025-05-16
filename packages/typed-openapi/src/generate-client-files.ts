import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { basename, join, dirname } from "pathe";
import { type } from "arktype";
import { writeFile } from "fs/promises";
import { allowedRuntimes, generateFile } from "./generator.ts";
import { mapOpenApiEndpoints } from "./map-openapi-endpoints.ts";
import { generateTanstackQueryFile } from "./tanstack-query.generator.ts";
import { prettify } from "./format.ts";

const cwd = process.cwd();
const now = new Date();

export const optionsSchema = type({
  "output?": "string",
  runtime: allowedRuntimes,
  tanstack: "boolean | string",
  schemasOnly: "boolean",
});

export async function generateClientFiles(input: string, options: typeof optionsSchema.infer) {
  const openApiDoc = (await SwaggerParser.bundle(input)) as OpenAPIObject;

  const ctx = mapOpenApiEndpoints(openApiDoc);
  console.log(`Found ${ctx.endpointList.length} endpoints`);

  const content = await prettify(generateFile({
    ...ctx,
    runtime: options.runtime,
    schemasOnly: options.schemasOnly,
  }));
  const outputPath = join(
    cwd,
    options.output ?? input + `.${options.runtime === "none" ? "client" : options.runtime}.ts`,
  );

  console.log("Generating client...", outputPath);
  await writeFile(outputPath, content);

  if (options.tanstack) {
    const tanstackContent = await generateTanstackQueryFile({
      ...ctx,
      relativeApiClientPath: './' + basename(outputPath),
    });
    const tanstackOutputPath = join(dirname(outputPath), typeof options.tanstack === "string" ? options.tanstack : `tanstack.client.ts`);
    console.log("Generating tanstack client...", tanstackOutputPath);
    await writeFile(tanstackOutputPath, tanstackContent);
  }

  console.log(`Done in ${new Date().getTime() - now.getTime()}ms !`);
}
