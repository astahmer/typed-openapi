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
import { generateMswFile } from "./msw.generator.ts";
import {
  findDefaultConfigPath,
  loadConfig,
  mergeConfigWithCli,
  applyGeneratorOptionDefaults,
  validationFromConfig,
} from "./config.ts";

const cwd = process.cwd();
const now = new Date();

async function ensureDir(dirPath: string): Promise<void> {
  try {
    await mkdir(dirPath, { recursive: true });
  } catch (error) {
    console.error(`Error ensuring directory: ${(error as Error).message}`);
  }
}

const validationOptionSchema = type("'loose' | 'formats' | 'strict'").or(
  type({
    "preset?": "'loose' | 'formats' | 'strict'",
    "formats?": "boolean",
    "stringConstraints?": "boolean",
    "numberConstraints?": "boolean",
    "arrayConstraints?": "boolean",
    "objectConstraints?": "boolean",
  }),
);

export const optionsSchema = type({
  "output?": "string",
  "runtime?": allowedRuntimes,
  "validation?": validationOptionSchema,
  "config?": "string",
  "format?": "boolean | 'true' | 'false'",
  "tanstack?": "boolean | string",
  "msw?": "boolean | string",
  "mswFaker?": "boolean",
  "mswBaseUrl?": "string",
  "defaultFetcher?": type("boolean | string").or(
    type({
      "envApiBaseUrl?": "string",
      "clientPath?": "string",
      "fetcherName?": "string",
      "apiName?": "string",
    }),
  ),
  "schemasOnly?": "boolean",
  "includeClient?": "boolean | 'true' | 'false'",
  "jsdoc?": "boolean | 'true' | 'false'",
  "successStatusCodes?": "string",
  "errorStatusCodes?": "string",
  "transformDates?": "boolean",
  "transformBigInt?": "boolean",
});

export type GenerateClientFilesOptions = typeof optionsSchema.infer & {
  nameTransform?: NameTransformOptions;
  /** From CLI `--endpoint` (cac may pass string | string[]) */
  endpoint?: string | string[];
  /** From CLI `--schema` */
  schema?: string | string[];
  treeShakeSchemas?: boolean;
  filterEndpoints?: GeneratorOptions["filterEndpoints"];
  filterSchemas?: GeneratorOptions["filterSchemas"];
  endpointPatterns?: string[];
  schemaPatterns?: string[];
  schemaNaming?: GeneratorOptions["schemaNaming"];
  shouldNameSchema?: GeneratorOptions["shouldNameSchema"];
  "schema-naming"?: GeneratorOptions["schemaNaming"];
  client?: GeneratorOptions["client"];
  validateSide?: GeneratorOptions["validateSide"];
  "validate-side"?: GeneratorOptions["validateSide"];
  coerce?: boolean;
  msw?: boolean | string;
  mswFaker?: boolean;
  mswBaseUrl?: string;
  transformDates?: boolean;
  transformBigInt?: boolean;
  "transform-dates"?: boolean;
  "transform-bigint"?: boolean;
};

function parseBooleanOption(value: boolean | "true" | "false" | undefined) {
  if (value === "false") {
    return false;
  }

  if (value === "true") {
    return true;
  }

  return value;
}

const asStringArray = (value: string | string[] | undefined): string[] | undefined => {
  if (value === undefined) return undefined;
  return Array.isArray(value) ? value : [value];
};

export async function generateClientFiles(input: string, options: GenerateClientFilesOptions) {
  const configPath = options.config ?? findDefaultConfigPath(cwd);
  const fileConfig = configPath ? await loadConfig(configPath) : undefined;
  if (configPath) console.log(`Using config ${configPath}`);

  const merged = applyGeneratorOptionDefaults(
    mergeConfigWithCli(fileConfig, options as Record<string, unknown>) as GenerateClientFilesOptions,
  ) as GenerateClientFilesOptions;
  const runtime = (merged.runtime ?? "none") as NonNullable<GenerateClientFilesOptions["runtime"]>;

  // Config may supply input when CLI positional is a placeholder; prefer CLI input.
  const openApiDoc = (await SwaggerParser.bundle(input)) as OpenAPIObject;

  const ctx = mapOpenApiEndpoints(openApiDoc, merged);
  console.log(`Found ${ctx.endpointList.length} endpoints`);

  // Parse success status codes if provided
  const successStatusCodes = merged.successStatusCodes
    ? (merged.successStatusCodes.split(",").map((code) => parseInt(code.trim(), 10)) as readonly number[])
    : undefined;

  // Parse error status codes if provided
  const errorStatusCodes = merged.errorStatusCodes
    ? (merged.errorStatusCodes.split(",").map((code) => parseInt(code.trim(), 10)) as readonly number[])
    : undefined;

  // Convert string boolean to actual boolean
  const includeClient = parseBooleanOption(merged.includeClient);
  const jsdoc = parseBooleanOption(merged.jsdoc) ?? true;
  const shouldFormat = parseBooleanOption(merged.format) ?? false;

  const validation = validationFromConfig(merged.validation);

  const endpointPatterns = asStringArray(options.endpoint) ?? merged.endpointPatterns ?? options.endpointPatterns;
  const schemaPatterns = asStringArray(options.schema) ?? merged.schemaPatterns ?? options.schemaPatterns;
  const treeShakeSchemas = options.treeShakeSchemas ?? merged.treeShakeSchemas;

  const generatorOptions: GeneratorOptions = {
    ...ctx,
    runtime,
    ...(validation ? { validation } : {}),
    schemasOnly: merged.schemasOnly ?? false,
    ...(options.nameTransform ? { nameTransform: options.nameTransform } : {}),
    includeClient: includeClient ?? true,
    jsdoc,
    successStatusCodes: successStatusCodes ?? DEFAULT_SUCCESS_STATUS_CODES,
    errorStatusCodes: errorStatusCodes ?? DEFAULT_ERROR_STATUS_CODES,
    ...(endpointPatterns ? { endpointPatterns } : {}),
    ...(schemaPatterns ? { schemaPatterns } : {}),
    ...(treeShakeSchemas !== undefined ? { treeShakeSchemas } : {}),
    ...(options.filterEndpoints ? { filterEndpoints: options.filterEndpoints } : {}),
    ...(options.filterSchemas ? { filterSchemas: options.filterSchemas } : {}),
    ...(() => {
      const schemaNaming = options.schemaNaming ?? options["schema-naming"] ?? merged.schemaNaming;
      return schemaNaming ? { schemaNaming } : {};
    })(),
    ...(options.shouldNameSchema ? { shouldNameSchema: options.shouldNameSchema } : {}),
    ...(() => {
      const client = options.client ?? merged.client;
      return client ? { client } : {};
    })(),
    ...(() => {
      const validateSide = options.validateSide ?? options["validate-side"] ?? merged.validateSide;
      return validateSide ? { validateSide } : {};
    })(),
    ...(options.coerce !== undefined || merged.coerce !== undefined
      ? { coerce: (options.coerce ?? merged.coerce)! }
      : {}),
    ...(() => {
      const transformDates =
        options.transformDates ?? options["transform-dates"] ?? (merged as { transformDates?: boolean }).transformDates;
      return transformDates ? { transformDates: true } : {};
    })(),
    ...(() => {
      const transformBigInt =
        options.transformBigInt ??
        options["transform-bigint"] ??
        (merged as { transformBigInt?: boolean }).transformBigInt;
      return transformBigInt ? { transformBigInt: true } : {};
    })(),
  };

  const outputPath = join(
    cwd,
    merged.output ?? options.output ?? input + `.${runtime === "none" ? "client" : runtime}.ts`,
  );
  const content = await prettify(generateFile(generatorOptions), { enabled: shouldFormat, filePath: outputPath });

  console.log("Generating client...", outputPath);
  await ensureDir(dirname(outputPath));
  await writeFile(outputPath, content);

  if (options.tanstack || merged.tanstack) {
    const tanstackOpt = options.tanstack ?? merged.tanstack;
    let tanstackOutputPath: string;
    if (typeof tanstackOpt === "string" && isAbsolute(tanstackOpt)) {
      tanstackOutputPath = tanstackOpt;
    } else {
      tanstackOutputPath = join(
        dirname(outputPath),
        typeof tanstackOpt === "string" ? tanstackOpt : `tanstack.client.ts`,
      );
    }
    const tanstackContent = await prettify(
      await generateTanstackQueryFile({
        ...generatorOptions,
        relativeApiClientPath: "./" + basename(outputPath),
        client: generatorOptions.client ?? (runtime === "effect" || runtime === "effect3" ? "effect" : "promise"),
      }),
      { enabled: shouldFormat, filePath: tanstackOutputPath },
    );
    console.log("Generating tanstack client...", tanstackOutputPath);
    await ensureDir(dirname(tanstackOutputPath));
    await writeFile(tanstackOutputPath, tanstackContent);
  }

  const defaultFetcherOpt =
    options.defaultFetcher ?? (merged as { defaultFetcher?: typeof options.defaultFetcher }).defaultFetcher;
  if (defaultFetcherOpt) {
    const fetcherOpts =
      typeof defaultFetcherOpt === "object" && defaultFetcherOpt !== null
        ? defaultFetcherOpt
        : ({} as { envApiBaseUrl?: string; clientPath?: string; fetcherName?: string; apiName?: string });
    const defaultFetcherContent = generateDefaultFetcher({
      envApiBaseUrl: fetcherOpts.envApiBaseUrl,
      clientPath: fetcherOpts.clientPath ?? `./${basename(outputPath)}`,
      fetcherName: fetcherOpts.fetcherName,
      apiName: fetcherOpts.apiName,
      client: generatorOptions.client ?? (runtime === "effect" || runtime === "effect3" ? "effect" : "promise"),
      doc: openApiDoc,
    });
    let defaultFetcherOutputPath: string;
    if (typeof defaultFetcherOpt === "string" && isAbsolute(defaultFetcherOpt)) {
      defaultFetcherOutputPath = defaultFetcherOpt;
    } else {
      defaultFetcherOutputPath = join(
        dirname(outputPath),
        typeof defaultFetcherOpt === "string" ? defaultFetcherOpt : `api.client.ts`,
      );
    }
    const formattedDefaultFetcherContent = await prettify(defaultFetcherContent, {
      enabled: shouldFormat,
      filePath: defaultFetcherOutputPath,
    });
    console.log("Generating default fetcher...", defaultFetcherOutputPath);
    await ensureDir(dirname(defaultFetcherOutputPath));
    await writeFile(defaultFetcherOutputPath, formattedDefaultFetcherContent);
  }

  const mswOpt = options.msw ?? (merged as { msw?: boolean | string }).msw;
  if (mswOpt) {
    let mswOutputPath: string;
    if (typeof mswOpt === "string" && isAbsolute(mswOpt)) {
      mswOutputPath = mswOpt;
    } else {
      mswOutputPath = join(dirname(outputPath), typeof mswOpt === "string" ? mswOpt : `msw.handlers.ts`);
    }
    const mswContent = await prettify(
      generateMswFile({
        endpointList: generatorOptions.endpointList,
        doc: openApiDoc,
        faker: Boolean(options.mswFaker ?? (merged as { mswFaker?: boolean }).mswFaker),
        baseUrl: options.mswBaseUrl ?? (merged as { mswBaseUrl?: string }).mswBaseUrl ?? "*",
      }),
      { enabled: shouldFormat, filePath: mswOutputPath },
    );
    console.log("Generating MSW handlers...", mswOutputPath);
    await ensureDir(dirname(mswOutputPath));
    await writeFile(mswOutputPath, mswContent);
  }

  console.log(`Done in ${new Date().getTime() - now.getTime()}ms !`);
}
