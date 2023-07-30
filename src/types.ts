import type { ReferenceObject, SchemaObject } from "openapi3-ts/oas31";
import { PrimitiveType } from "./asserts";

import type { DocumentResolver } from "./schema-resolver";
import { Box } from "./box";

export type BoxDefinition = {
  type: string;
  params: unknown;
  value: string;
};
export type BoxParams = string | BoxDefinition;

export type BoxTypeNode<T = {}> = T & {
  type: "type";
  params: { name: string; def: BoxParams };
  value: string;
};

export type BoxUnion<T = {}> = T & {
  type: "union";
  params: {
    types: Array<BoxParams>;
  };
  value: string;
};

export type BoxIntersection<T = {}> = T & {
  type: "intersection";
  params: {
    types: Array<BoxParams>;
  };
  value: string;
};

export type BoxArray<T = {}> = T & {
  type: "array";
  params: {
    type: BoxParams;
  };
  value: string;
};

export type BoxOptional<T = {}> = T & {
  type: "optional";
  params: {
    type: BoxParams;
  };
  value: string;
};

export type BoxRef<T = {}> = T & {
  type: "ref";
  params: { name: string; generics?: BoxParams[] | undefined };
  value: string;
};

export type BoxKeyword<T = {}> = T & {
  type: "keyword";
  params: { name: string };
  value: PrimitiveType | "unknown" | "any" | "never";
};

export type BoxObject<T = {}> = T & {
  type: "object";
  params: { props: Record<string, BoxParams> };
  value: string;
};

export type AnyBox =
  | BoxTypeNode
  | BoxUnion
  | BoxIntersection
  | BoxArray
  | BoxOptional
  | BoxRef
  | BoxKeyword
  | BoxObject;

export type TsConversionArgs = {
  schema: SchemaObject | ReferenceObject;
  ctx?: TsConversionContext | undefined;
  meta?: { name?: string; $ref?: string; isInline?: boolean } | undefined;
};

export type TsConversionContext = {
  typeByRef: Record<string, string>;
  resolver: DocumentResolver;
  rootRef?: string;
  visitedsRefs?: Record<string, boolean>;
  onBox?: (box: Box<AnyBox>) => Box<AnyBox>;
};
