import type { OperationObject } from "openapi3-ts/oas31";

import type { Method } from "./map-openapi-endpoints.ts";

export type { LibSchemaObject, SchemaTransform, SchemaTransformResult } from "./schema-transform.ts";

/** How to interpret OpenAPI schema keywords that this generator treats differently from the spec. */
export type OpenapiConfig = {
  /**
   * Value used when an object schema omits `additionalProperties`.
   *
   * Unset or `false`: named objects stay closed (extra keys are rejected in types and validators).
   * `true`: follow OpenAPI/JSON Schema (`true` when omitted).
   * Explicit `additionalProperties: true` / `false` / schema objects always win.
   * Property-less `{ type: object }` stays a free-form record unless explicitly `false`.
   */
  additionalPropertiesDefault?: boolean;
};

export type NameTransformOptions = {
  transformSchemaName?: (name: string) => string;
  transformEndpointName?: (endpoint: {
    alias: string;
    operation: OperationObject;
    method: Method;
    path: string;
  }) => string;
};
