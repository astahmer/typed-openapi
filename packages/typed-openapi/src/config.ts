import { readFileSync, existsSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { extname, resolve } from "pathe";
import { type } from "arktype";
import type { ValidationPreset, ValidationPolicy } from "./runtimes/validation.ts";
import { resolveValidationPolicy } from "./runtimes/validation.ts";

const validationOverrideSchema = type({
  "preset?": "'loose' | 'formats' | 'strict'",
  "formats?": "boolean",
  "stringConstraints?": "boolean",
  "numberConstraints?": "boolean",
  "arrayConstraints?": "boolean",
  "objectConstraints?": "boolean",
});

export const configFileSchema = type({
  "input?": "string",
  "inputDir?": "string",
  "runtime?": "string",
  "validation?": type("'loose' | 'formats' | 'strict'").or(validationOverrideSchema),
  "output?": "string",
  "schemasOnly?": "boolean",
  "includeClient?": "boolean",
  "jsdoc?": "boolean",
  "format?": "boolean",
  "endpointPatterns?": "string[]",
  "schemaPatterns?": "string[]",
  "treeShakeSchemas?": "boolean",
  "schemaNaming?": "'auto' | 'always-name' | 'prefer-inline'",
  "client?": "'promise' | 'effect'",
  "validateSide?": "'none' | 'input' | 'output' | 'both'",
  "coerce?": "boolean",
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
  "successStatusCodes?": "string",
  "errorStatusCodes?": "string",
  "transformDates?": "boolean",
  "transformBigInt?": "boolean",
});

export type TypedOpenapiConfigFile = typeof configFileSchema.infer;

/** Full config type for `defineConfig` / `typed-openapi.config.ts`. */
export type TypedOpenapiConfig = TypedOpenapiConfigFile;

/**
 * Type-helper for `typed-openapi.config.ts` (and `.mts` / `.js`).
 * Identity at runtime — exists for editor autocomplete + typechecking.
 */
export function defineConfig(config: TypedOpenapiConfig): TypedOpenapiConfig {
  return config;
}

const DEFAULT_CONFIG_NAMES = [
  "typed-openapi.config.ts",
  "typed-openapi.config.mts",
  "typed-openapi.config.js",
  "typed-openapi.config.mjs",
  "typed-openapi.config.json",
  ".typed-openapi.json",
  "typed-openapi.json",
] as const;

export const findDefaultConfigPath = (cwd: string = process.cwd()): string | undefined => {
  for (const name of DEFAULT_CONFIG_NAMES) {
    const path = resolve(cwd, name);
    if (existsSync(path)) return path;
  }
  return undefined;
};

const isJsonConfig = (path: string) => extname(path).toLowerCase() === ".json";

const parseAndValidate = (path: string, parsed: unknown): TypedOpenapiConfigFile => {
  const result = configFileSchema(parsed);
  if (result instanceof type.errors) {
    throw new Error(`Invalid config file ${path}:\n${result.summary}`);
  }
  return result;
};

/** Sync JSON config load (legacy). Prefer `loadConfig` for TS/JS configs. */
export const loadConfigFile = (path: string): TypedOpenapiConfigFile => {
  if (!isJsonConfig(path)) {
    throw new Error(
      `loadConfigFile only supports JSON configs; use await loadConfig(${JSON.stringify(path)}) for TS/JS`,
    );
  }
  const raw = readFileSync(path, "utf8");
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    throw new Error(`Failed to parse config file ${path}: ${(err as Error).message}`);
  }
  return parseAndValidate(path, parsed);
};

/** Load JSON or TS/JS config (`defineConfig` default export or module exports). */
export const loadConfig = async (path: string): Promise<TypedOpenapiConfigFile> => {
  if (isJsonConfig(path)) {
    return loadConfigFile(path);
  }

  const abs = resolve(path);
  const url = pathToFileURL(abs).href;

  // Register tsx so .ts / .mts configs can be imported in Node.
  let unregister: (() => void) | undefined;
  try {
    const { register } = await import("tsx/esm/api");
    unregister = register({
      // namespace isolation so we can unregister cleanly
      namespace: `typed-openapi-config-${Date.now()}`,
    });
  } catch {
    // tsx optional at runtime for plain .js/.mjs; .ts will fail below with a clear error
  }

  try {
    const mod = (await import(`${url}?t=${Date.now()}`)) as {
      default?: TypedOpenapiConfigFile | { default?: TypedOpenapiConfigFile };
      config?: TypedOpenapiConfigFile;
    };
    const candidate = mod.default ?? mod.config ?? mod;
    const parsed =
      candidate && typeof candidate === "object" && "default" in candidate
        ? (candidate as { default: TypedOpenapiConfigFile }).default
        : candidate;
    return parseAndValidate(path, parsed);
  } catch (err) {
    const hint = extname(path).match(/^\.m?ts$/) ? " (ensure tsx is available — it ships with typed-openapi)" : "";
    throw new Error(`Failed to load config file ${path}${hint}: ${(err as Error).message}`);
  } finally {
    unregister?.();
  }
};

export const validationFromConfig = (
  value: TypedOpenapiConfigFile["validation"] | undefined,
): ValidationPreset | (Partial<ValidationPolicy> & { preset?: ValidationPreset }) | undefined => {
  if (value === undefined) return undefined;
  if (typeof value === "string") return value;
  return value;
};

/** Merge CLI options over config file; CLI wins when set (undefined = leave config / apply defaults later). */
export const mergeConfigWithCli = <T extends Record<string, unknown>>(
  fileConfig: TypedOpenapiConfigFile | undefined,
  cliOptions: T,
): T & TypedOpenapiConfigFile => {
  const base = { ...(fileConfig ?? {}) } as Record<string, unknown>;
  for (const [key, value] of Object.entries(cliOptions)) {
    if (value !== undefined) base[key] = value;
  }
  return base as T & TypedOpenapiConfigFile;
};

/** Defaults applied after config+CLI merge when still unset. */
export const applyGeneratorOptionDefaults = <T extends Record<string, unknown>>(options: T): T => {
  const out = { ...options } as Record<string, unknown>;
  if (out["format"] === undefined) out["format"] = false;
  if (out["schemasOnly"] === undefined) out["schemasOnly"] = false;
  if (out["includeClient"] === undefined) out["includeClient"] = true;
  if (out["jsdoc"] === undefined) out["jsdoc"] = true;
  return out as T;
};

export const resolveValidationFromOptions = (
  validation: TypedOpenapiConfigFile["validation"] | ValidationPreset | undefined,
): ValidationPolicy | undefined => {
  if (validation === undefined) return undefined;
  return resolveValidationPolicy(validationFromConfig(validation as TypedOpenapiConfigFile["validation"]));
};
