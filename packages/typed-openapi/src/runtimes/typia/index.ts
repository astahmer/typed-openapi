import { applyArrayConstraints, applyNumberConstraints, applyStringConstraints } from "../shared.ts";
import type { SchemaNode } from "../../schema-ir/types.ts";
import type { EmitCtx, RuntimeAdapter } from "../types.ts";
import { irToTs } from "../../schema-ir/ir-to-ts.ts";

const toTs = (node: SchemaNode) => irToTs(node, { prefixRefsWithSchemas: false });

const createIs = (typeExpr: string) => `typia.createIs<${typeExpr}>()`;

/** Build a Typia-friendly type expression with `tags.*` constraints when validation allows. */
const typiaTypeExpr = (node: SchemaNode, ctx: EmitCtx): string => {
  switch (node.kind) {
    case "string": {
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
      return toTs(node);
    }
    case "ref":
      if (!node.generics?.length && node.name !== "Partial" && node.name !== "Record") {
        return node.name;
      }
      return toTs(node);
    default:
      return toTs(node);
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
  emitNode,
  literalString: (value) => createIs(JSON.stringify(value)),
  unknown: () => createIs("unknown"),
  never: () => createIs("never"),
  emitNamedSchema: (name, node, ctx) => {
    const typeExpr = typiaTypeExpr(node, ctx);
    return [
      `export type ${name} = ${typeExpr};`,
      `export const is${name} = typia.createIs<${name}>();`,
      `export const assert${name} = typia.createAssert<${name}>();`,
      `export const validate${name} = typia.createValidate<${name}>();`,
    ].join("\n");
  },
};
