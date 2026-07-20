import { readFileSync, existsSync } from "node:fs";
import { resolve } from "pathe";
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
});

export type TypedOpenapiConfigFile = typeof configFileSchema.infer;

const DEFAULT_CONFIG_NAMES = ["typed-openapi.config.json", ".typed-openapi.json", "typed-openapi.json"] as const;

export const findDefaultConfigPath = (cwd: string = process.cwd()): string | undefined => {
  for (const name of DEFAULT_CONFIG_NAMES) {
    const path = resolve(cwd, name);
    if (existsSync(path)) return path;
  }
  return undefined;
};

export const loadConfigFile = (path: string): TypedOpenapiConfigFile => {
  const raw = readFileSync(path, "utf8");
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    throw new Error(`Failed to parse config file ${path}: ${(err as Error).message}`);
  }
  const result = configFileSchema(parsed);
  if (result instanceof type.errors) {
    throw new Error(`Invalid config file ${path}:\n${result.summary}`);
  }
  return result;
};

export const validationFromConfig = (
  value: TypedOpenapiConfigFile["validation"] | undefined,
): ValidationPreset | (Partial<ValidationPolicy> & { preset?: ValidationPreset }) | undefined => {
  if (value === undefined) return undefined;
  if (typeof value === "string") return value;
  return value;
};

/** Merge CLI options over config file; CLI wins when set. */
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

export const resolveValidationFromOptions = (
  validation: TypedOpenapiConfigFile["validation"] | ValidationPreset | undefined,
): ValidationPolicy | undefined => {
  if (validation === undefined) return undefined;
  return resolveValidationPolicy(validationFromConfig(validation as TypedOpenapiConfigFile["validation"]));
};
