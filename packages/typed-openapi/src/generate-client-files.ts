import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { basename, join, dirname } from "pathe";
import { type } from "arktype";
import { mkdir, writeFile } from "fs/promises";
import { allowedRuntimes, generateFile } from "./generator.ts";
import { mapOpenApiEndpoints } from "./map-openapi-endpoints.ts";
import { generateTanstackQueryFile } from "./tanstack-query.generator.ts";
import { prettify } from "./format.ts";
import type { NameTransformOptions } from "./types.ts";

const cwd = process.cwd();
const now = new Date();

async function ensureDir(dirPath: string): Promise<void> {
  try {
    await mkdir(dirPath, { recursive: true });
  } catch (error) {
    console.error(`Error ensuring directory: ${(error as Error).message}`);
  }
}

export const optionsSchema = type({
  "output?": "string",
  runtime: allowedRuntimes,
  tanstack: "boolean | string",
  schemasOnly: "boolean",
});

type GenerateClientFilesOptions = typeof optionsSchema.infer & {
  nameTransform?: NameTransformOptions;
};

export async function generateClientFiles(input: string, options: GenerateClientFilesOptions) {
  const openApiDoc = (await SwaggerParser.bundle(input)) as OpenAPIObject;

  const ctx = mapOpenApiEndpoints(openApiDoc, options);
  console.log(`Found ${ctx.endpointList.length} endpoints`);

  const content = await prettify(
    generateFile({
      ...ctx,
      runtime: options.runtime,
      schemasOnly: options.schemasOnly,
      nameTransform: options.nameTransform,
    }),
  );
  const outputPath = join(
    cwd,
    options.output ?? input + `.${options.runtime === "none" ? "client" : options.runtime}.ts`,
  );

  console.log("Generating client...", outputPath);
  await ensureDir(dirname(outputPath));
  await writeFile(outputPath, content);

  if (options.tanstack) {
    const tanstackContent = await generateTanstackQueryFile({
      ...ctx,
      relativeApiClientPath: "./" + basename(outputPath),
    });
    const tanstackOutputPath = join(
      dirname(outputPath),
      typeof options.tanstack === "string" ? options.tanstack : `tanstack.client.ts`,
    );
    console.log("Generating tanstack client...", tanstackOutputPath);
    await ensureDir(dirname(tanstackOutputPath));
    await writeFile(tanstackOutputPath, tanstackContent);
  }

  console.log(`Done in ${new Date().getTime() - now.getTime()}ms !`);
}
