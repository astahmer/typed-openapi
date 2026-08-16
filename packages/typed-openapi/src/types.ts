import type { OperationObject } from "openapi3-ts/oas31";

import type { Method } from "./map-openapi-endpoints.ts";

export type { LibSchemaObject, SchemaTransform, SchemaTransformResult } from "./schema-transform.ts";

export type NameTransformOptions = {
  transformSchemaName?: (name: string) => string;
  transformEndpointName?: (endpoint: {
    alias: string;
    operation: OperationObject;
    method: Method;
    path: string;
  }) => string;
};
