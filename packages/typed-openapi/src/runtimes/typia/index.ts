import { applyArrayConstraints, applyNumberConstraints, applyStringConstraints } from "../shared.ts";
import type { SchemaNode } from "../../schema-ir/types.ts";
import type { EmitCtx, RuntimeAdapter } from "../types.ts";
import { canEmitAsInterface, emitNamedInterface, irToTs, buildIrToTsOptions } from "../../schema-ir/ir-to-ts.ts";

const toTs = (node: SchemaNode, ctx?: EmitCtx) =>
  irToTs(
    node,
    buildIrToTsOptions({
      prefixRefsWithSchemas: false,
      transformDates: ctx?.transformDates,
      transformBigInt: ctx?.transformBigInt,
    }),
  );

const createIs = (typeExpr: string) => `typia.createIs<${typeExpr}>()`;

/** Build a Typia-friendly type expression with `tags.*` constraints when validation allows. */
const typiaTypeExpr = (node: SchemaNode, ctx: EmitCtx): string => {
  switch (node.kind) {
    case "string": {
      if (ctx.transformDates && (node.constraints.format === "date-time" || node.constraints.format === "date")) {
        return "Date";
      }
      const c = applyStringConstraints(node.constraints, ctx.validation);
      const parts: string[] = ["string"];
      if (c.minLength !== undefined) parts.push(`tags.MinLength<${c.minLength}>`);
      if (c.maxLength !== undefined) parts.push(`tags.MaxLength<${c.maxLength}>`);
      if (c.pattern !== undefined) parts.push(`tags.Pattern<${JSON.stringify(c.pattern)}>`);
      if (c.format === "email") parts.push(`tags.Format<"email">`);
      else if (c.format === "uuid") parts.push(`tags.Format<"uuid">`);
      else if (c.format === "uri" || c.format === "url") parts.push(`tags.Format<"url">`);
      else if (c.format === "date-time") parts.push(`tags.Format<"date-time">`);
      return parts.length === 1 ? "string" : `(${parts.join(" & ")})`;
    }
    case "number": {
      if (ctx.transformBigInt && node.constraints.format === "int64") {
        return "bigint";
      }
      const c = applyNumberConstraints(node.constraints, ctx.validation);
      const parts: string[] = [node.integer ? "(number & tags.Type<'int32'>)" : "number"];
      if (c.minimum !== undefined) parts.push(`tags.Minimum<${c.minimum}>`);
      if (c.maximum !== undefined) parts.push(`tags.Maximum<${c.maximum}>`);
      if (c.exclusiveMinimum !== undefined) parts.push(`tags.ExclusiveMinimum<${c.exclusiveMinimum}>`);
      if (c.exclusiveMaximum !== undefined) parts.push(`tags.ExclusiveMaximum<${c.exclusiveMaximum}>`);
      if (c.multipleOf !== undefined) parts.push(`tags.MultipleOf<${c.multipleOf}>`);
      return parts.length === 1 ? parts[0]! : `(${parts.join(" & ")})`;
    }
    case "array": {
      const items = typiaTypeExpr(node.items, ctx);
      const c = applyArrayConstraints(node.constraints, ctx.validation);
      const parts: string[] = [`Array<${items}>`];
      if (c.minItems !== undefined) parts.push(`tags.MinItems<${c.minItems}>`);
      if (c.maxItems !== undefined) parts.push(`tags.MaxItems<${c.maxItems}>`);
      return parts.length === 1 ? parts[0]! : `(${parts.join(" & ")})`;
    }
    case "object": {
      // Object-level min/maxProperties lack portable typia tags; keep structural IR type.
      return toTs(node, ctx);
    }
    case "ref":
      if (!node.generics?.length && node.name !== "Partial" && node.name !== "Record") {
        return node.name;
      }
      return toTs(node, ctx);
    default:
      return toTs(node, ctx);
  }
};

const emitNode = (node: SchemaNode, ctx: EmitCtx): string => {
  if (node.kind === "ref" && !node.generics?.length && node.name !== "Partial" && node.name !== "Record") {
    return `is${node.name}`;
  }
  return createIs(typiaTypeExpr(node, ctx));
};

export const typiaAdapter: RuntimeAdapter = {
  name: "typia",
  imports: () => `import typia, { tags } from "typia";`,
  inferType: (expr) => `typeof ${expr} extends (input: unknown) => input is infer U ? U : never`,
  schemaType: (typeReference) => `(input: unknown) => input is ${typeReference}`,
  annotateSchema: (schemaExpr, typeReference) =>
    `${schemaExpr} as unknown as (input: unknown) => input is ${typeReference}`,
  emitNode,
  literalString: (value) => createIs(JSON.stringify(value)),
  unknown: () => createIs("unknown"),
  never: () => createIs("never"),
  emitNamedSchema: (name, node, ctx, typeReference) => {
    const irOpts = buildIrToTsOptions({
      prefixRefsWithSchemas: false,
      transformDates: ctx.transformDates,
      transformBigInt: ctx.transformBigInt,
    });
    if (typeReference) {
      return [
        `export type ${name} = ${typeReference};`,
        `export const is${name} = typia.createIs<${typeReference}>();`,
        `export const assert${name} = typia.createAssert<${typeReference}>();`,
        `export const validate${name} = typia.createValidate<${typeReference}>();`,
      ].join("\n");
    }
    // Recursive record/object as interface — same TS2456 fix as none-runtime.
    const typeDecl =
      ctx.recursiveNames.has(name) && canEmitAsInterface(node)
        ? emitNamedInterface(name, node, irOpts)
        : `export type ${name} = ${typiaTypeExpr(node, ctx)};`;
    return [
      typeDecl,
      `export const is${name} = typia.createIs<${name}>();`,
      `export const assert${name} = typia.createAssert<${name}>();`,
      `export const validate${name} = typia.createValidate<${name}>();`,
    ].join("\n");
  },
};
