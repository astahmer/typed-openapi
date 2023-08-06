import type { SchemaObject } from "openapi3-ts/oas31";

export type SingleType = Exclude<SchemaObject["type"], any[] | undefined>;
export const isPrimitiveType = (type: unknown): type is PrimitiveType => primitiveTypeList.includes(type as any);

const primitiveTypeList = ["string", "number", "integer", "boolean", "null"] as const;
export type PrimitiveType = (typeof primitiveTypeList)[number];
