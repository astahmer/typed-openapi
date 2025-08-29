import type { OperationObject, ReferenceObject, SchemaObject } from "openapi3-ts/oas31";
import type { SchemaObject as SchemaObject3 } from "openapi3-ts/oas30";

import type { RefResolver } from "./ref-resolver.ts";
import type { Method } from "./map-openapi-endpoints.ts";

export type LibSchemaObject = SchemaObject & SchemaObject3;

export type OpenapiSchemaConvertArgs = {
  schema: SchemaObject | ReferenceObject;
  ctx: OpenapiSchemaConvertContext;
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

export type OpenapiSchemaConvertContext = {
  refs: RefResolver;
  nameTransform?: NameTransformOptions;
};
