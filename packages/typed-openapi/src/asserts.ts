import type { LibSchemaObject } from "./types";

export type SingleType = Exclude<LibSchemaObject["type"], any[] | undefined>;
export const isPrimitiveType = (type: unknown): type is PrimitiveType => primitiveTypeList.includes(type as any);

const primitiveTypeList = ["string", "number", "integer", "boolean", "null"] as const;
export type PrimitiveType = (typeof primitiveTypeList)[number];
