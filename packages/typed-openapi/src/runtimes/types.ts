import type { SchemaNode } from "../schema-ir/types.ts";
import type { ValidationPolicy } from "./validation.ts";

export type OutputRuntime = "none" | "zod" | "zod3" | "effect" | "effect3" | "valibot" | "arktype";

export type EmitCtx = {
  validation: ValidationPolicy;
  /** Named schemas that are recursive and need lazy/suspend wrapping when referenced from themselves */
  recursiveNames: Set<string>;
  /** Currently emitting schema name (for lazy detection) */
  currentSchemaName?: string;
  /**
   * When set, named schema refs emit as ArkType/module string defs (`"Foo"` / `"Foo[]"`)
   * so they resolve inside `type.module({ ... })`.
   */
  moduleSchemaNames?: Set<string>;
  /**
   * When true, emit number/boolean (and integer) schemas with string coercion —
   * for path/query/cookie/header params that arrive as strings over HTTP.
   */
  coercePrimitives?: boolean;
  /** Indent level helper */
  indent: string;
};

export type NamedSchema = { name: string; node: SchemaNode };

export type RuntimeAdapter = {
  name: Exclude<OutputRuntime, "none">;
  imports: () => string;
  /** Wrap a schema expression for type inference export */
  inferType: (schemaExpr: string) => string;
  /** Emit a schema expression for a node (inline, no export) */
  emitNode: (node: SchemaNode, ctx: EmitCtx) => string;
  /** How to wrap a named recursive schema definition */
  wrapLazy?: (name: string, bodyExpr: string) => string;
  /** Emit `export const Name = ...` (+ optional type) for a top-level schema */
  emitNamedSchema: (name: string, node: SchemaNode, ctx: EmitCtx) => string;
  /**
   * Optional batch emit for all component schemas (e.g. ArkType `type.module` for recursion).
   * When present, used instead of looping `emitNamedSchema`.
   */
  emitNamedSchemas?: (schemas: NamedSchema[], ctx: EmitCtx) => string;
  /** Emit endpoint const object body fields using emitNode */
  literalString: (value: string) => string;
  unknown: () => string;
  never: () => string;
};

export const createEmitCtx = (
  validation: ValidationPolicy,
  recursiveNames: Set<string> = new Set(),
  options?: { coercePrimitives?: boolean },
): EmitCtx => ({
  validation,
  recursiveNames,
  indent: "  ",
  ...(options?.coercePrimitives ? { coercePrimitives: true } : {}),
});
