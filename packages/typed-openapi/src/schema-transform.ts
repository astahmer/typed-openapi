import type { SchemaObject } from "openapi3-ts/oas31";
import type { SchemaObject as SchemaObject3 } from "openapi3-ts/oas30";

export type LibSchemaObject = SchemaObject & SchemaObject3;

/**
 * Result of a user `transformSchema` callback.
 * - `type`: TypeScript type string replacing the default generated type (e.g. `"Temporal.Instant"`, `"Foo"`).
 * - `runtime`: runtime validator expression replacing the default one for the active runtime
 *   (e.g. `"z.string().transform((s) => Temporal.Instant.from(s))"`).
 * Both are optional; a transform may override only the type, only the runtime, or both.
 */
export type SchemaTransformResult = {
  type?: string;
  runtime?: string;
};

/**
 * User-supplied schema transform, analogous to `openapi-typescript`'s `transform` option.
 * Runs on the raw OpenAPI SchemaObject (before IR conversion), so it can match on `type`,
 * `format`, `x-` vendor extensions, `$ref`, etc. Return `undefined` to keep the default emission.
 *
 * Because config files are validated as plain data, this callback is only available through
 * the library API / `defineConfig` in a TS/JS config file — it cannot be expressed in JSON configs
 * or as a CLI flag.
 */
export type SchemaTransform = (
  schema: LibSchemaObject,
  ctx: { path: string[]; ref?: string },
) => SchemaTransformResult | undefined;
