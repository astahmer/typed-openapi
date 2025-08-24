import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { basename, join, dirname, isAbsolute } from "pathe";
import { type } from "arktype";
import { mkdir, writeFile } from "fs/promises";
import {
  allowedRuntimes,
  generateFile,
  DEFAULT_SUCCESS_STATUS_CODES,
  DEFAULT_ERROR_STATUS_CODES,
  type GeneratorOptions,
} from "./generator.ts";
import { mapOpenApiEndpoints } from "./map-openapi-endpoints.ts";
import { generateTanstackQueryFile } from "./tanstack-query.generator.ts";
import { prettify } from "./format.ts";
import type { NameTransformOptions } from "./types.ts";
import { generateDefaultFetcher } from "./default-fetcher.generator.ts";

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
  "defaultFetcher?": type({
    "envApiBaseUrl?": "string",
    "clientPath?": "string",
    "fetcherName?": "string",
    "apiName?": "string",
  }),
  schemasOnly: "boolean",
  "includeClient?": "boolean | 'true' | 'false'",
  "successStatusCodes?": "string",
  "errorStatusCodes?": "string",
});

type GenerateClientFilesOptions = typeof optionsSchema.infer & {
  nameTransform?: NameTransformOptions;
};

export async function generateClientFiles(input: string, options: GenerateClientFilesOptions) {
  // TODO CLI option to save that file?
  const openApiDoc = (await SwaggerParser.bundle(input)) as OpenAPIObject;

  const ctx = mapOpenApiEndpoints(openApiDoc, options);
  console.log(`Found ${ctx.endpointList.length} endpoints`);

  // Parse success status codes if provided
  const successStatusCodes = options.successStatusCodes
    ? (options.successStatusCodes.split(",").map((code) => parseInt(code.trim(), 10)) as readonly number[])
    : undefined;

  // Parse error status codes if provided
  const errorStatusCodes = options.errorStatusCodes
    ? (options.errorStatusCodes.split(",").map((code) => parseInt(code.trim(), 10)) as readonly number[])
    : undefined;

  // Convert string boolean to actual boolean
  const includeClient =
    options.includeClient === "false" ? false : options.includeClient === "true" ? true : options.includeClient;

  const generatorOptions: GeneratorOptions = {
    ...ctx,
    runtime: options.runtime,
    schemasOnly: options.schemasOnly,
    nameTransform: options.nameTransform,
    includeClient: includeClient ?? true,
    successStatusCodes: successStatusCodes ?? DEFAULT_SUCCESS_STATUS_CODES,
    errorStatusCodes: errorStatusCodes ?? DEFAULT_ERROR_STATUS_CODES,
  };

  const content = await prettify(generateFile(generatorOptions));
  const outputPath = join(
    cwd,
    options.output ?? input + `.${options.runtime === "none" ? "client" : options.runtime}.ts`,
  );

  console.log("Generating client...", outputPath);
  await ensureDir(dirname(outputPath));
  await writeFile(outputPath, content);

  if (options.tanstack) {
    const tanstackContent = await generateTanstackQueryFile({
      ...generatorOptions,
      relativeApiClientPath: "./" + basename(outputPath),
    });
    let tanstackOutputPath: string;
    if (typeof options.tanstack === "string" && isAbsolute(options.tanstack)) {
      tanstackOutputPath = options.tanstack;
    } else {
      tanstackOutputPath = join(
        dirname(outputPath),
        typeof options.tanstack === "string" ? options.tanstack : `tanstack.client.ts`,
      );
    }
    console.log("Generating tanstack client...", tanstackOutputPath);
    await ensureDir(dirname(tanstackOutputPath));
    await writeFile(tanstackOutputPath, tanstackContent);
  }

  if (options.defaultFetcher) {
    const defaultFetcherContent = generateDefaultFetcher({
      envApiBaseUrl: options.defaultFetcher.envApiBaseUrl,
      clientPath: options.defaultFetcher.clientPath ?? basename(outputPath),
      fetcherName: options.defaultFetcher.fetcherName,
      apiName: options.defaultFetcher.apiName,
    });
    let defaultFetcherOutputPath: string;
    if (typeof options.defaultFetcher === "string" && isAbsolute(options.defaultFetcher)) {
      defaultFetcherOutputPath = options.defaultFetcher;
    } else {
      defaultFetcherOutputPath = join(
        dirname(outputPath),
        typeof options.defaultFetcher === "string" ? options.defaultFetcher : `api.client.ts`,
      );
    }
    console.log("Generating default fetcher...", defaultFetcherOutputPath);
    await ensureDir(dirname(defaultFetcherOutputPath));
    await writeFile(defaultFetcherOutputPath, defaultFetcherContent);
  }

  console.log(`Done in ${new Date().getTime() - now.getTime()}ms !`);
}
