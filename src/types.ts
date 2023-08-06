import type { ReferenceObject, SchemaObject } from "openapi3-ts/oas31";

import type { RefResolver } from "./ref-resolver";
import { Box } from "./box";

export type BoxDefinition = {
  type: string;
  params: unknown;
  value: string;
};
export type BoxParams = string | BoxDefinition;
export type WithSchema = {
  schema: SchemaObject | ReferenceObject | undefined;
  ctx: OpenapiSchemaConvertContext;
};

export type BoxUnion = WithSchema & {
  type: "union";
  params: {
    types: Array<BoxParams>;
  };
  value: string;
};

export type BoxIntersection = WithSchema & {
  type: "intersection";
  params: {
    types: Array<BoxParams>;
  };
  value: string;
};

export type BoxArray = WithSchema & {
  type: "array";
  params: {
    type: BoxParams;
  };
  value: string;
};

export type BoxOptional = WithSchema & {
  type: "optional";
  params: {
    type: BoxParams;
  };
  value: string;
};

export type BoxRef = WithSchema & {
  type: "ref";
  params: { name: string; generics?: BoxParams[] | undefined };
  value: string;
};

export type BoxLiteral = WithSchema & {
  type: "literal";
  params: {};
  value: string;
};

export type BoxKeyword = WithSchema & {
  type: "keyword";
  params: { name: string };
  value: string;
};

export type BoxObject = WithSchema & {
  type: "object";
  params: { props: Record<string, BoxParams> };
  value: string;
};

export type AnyBoxDef =
  | BoxUnion
  | BoxIntersection
  | BoxArray
  | BoxOptional
  | BoxRef
  | BoxLiteral
  | BoxKeyword
  | BoxObject;
export type AnyBox = Box<AnyBoxDef>;

export type OpenapiSchemaConvertArgs = {
  schema: SchemaObject | ReferenceObject;
  ctx: OpenapiSchemaConvertContext;
  meta?: {} | undefined;
};

export type FactoryCreator = (
  schema: SchemaObject | ReferenceObject,
  ctx: OpenapiSchemaConvertContext,
) => GenericFactory;
export type OpenapiSchemaConvertContext = {
  factory: FactoryCreator | GenericFactory;
  refs: RefResolver;
  onBox?: (box: Box<AnyBoxDef>) => Box<AnyBoxDef>;
};

export type StringOrBox = string | Box<AnyBoxDef>;

export type BoxFactory = {
  union: (types: Array<StringOrBox>) => Box<BoxUnion>;
  intersection: (types: Array<StringOrBox>) => Box<BoxIntersection>;
  array: (type: StringOrBox) => Box<BoxArray>;
  object: (props: Record<string, StringOrBox>) => Box<BoxObject>;
  optional: (type: StringOrBox) => Box<BoxOptional>;
  reference: (name: string, generics?: Array<StringOrBox> | undefined) => Box<BoxRef>;
  literal: (value: StringOrBox) => Box<BoxLiteral>;
  string: () => Box<BoxKeyword>;
  number: () => Box<BoxKeyword>;
  boolean: () => Box<BoxKeyword>;
  unknown: () => Box<BoxKeyword>;
  any: () => Box<BoxKeyword>;
  never: () => Box<BoxKeyword>;
};

export type GenericFactory = {
  callback?: OpenapiSchemaConvertContext["onBox"];
  union: (types: Array<StringOrBox>) => string;
  intersection: (types: Array<StringOrBox>) => string;
  array: (type: StringOrBox) => string;
  object: (props: Record<string, StringOrBox>) => string;
  optional: (type: StringOrBox) => string;
  reference: (name: string, generics?: Array<StringOrBox> | undefined) => string;
  literal: (value: StringOrBox) => string;
  string: () => string;
  number: () => string;
  boolean: () => string;
  unknown: () => string;
  any: () => string;
  never: () => string;
};
