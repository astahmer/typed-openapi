import { irToTs } from "../../schema-ir/ir-to-ts.ts";
import type { SchemaNode } from "../../schema-ir/types.ts";
import type { EmitCtx, RuntimeAdapter } from "../types.ts";

const toTs = (node: SchemaNode) => irToTs(node, { prefixRefsWithSchemas: false });

const createIs = (typeExpr: string) => `typia.createIs<${typeExpr}>()`;

const emitNode = (node: SchemaNode, _ctx: EmitCtx): string => {
  if (node.kind === "ref" && !node.generics?.length && node.name !== "Partial" && node.name !== "Record") {
    return `is${node.name}`;
  }
  return createIs(toTs(node));
};

export const typiaAdapter: RuntimeAdapter = {
  name: "typia",
  imports: () => `import typia from "typia";`,
  inferType: (expr) => `typeof ${expr} extends (input: unknown) => input is infer U ? U : never`,
  emitNode,
  literalString: (value) => createIs(JSON.stringify(value)),
  unknown: () => createIs("unknown"),
  never: () => createIs("never"),
  emitNamedSchema: (name, node) => {
    const typeExpr = toTs(node);
    return [
      `export type ${name} = ${typeExpr};`,
      `export const is${name} = typia.createIs<${name}>();`,
      `export const assert${name} = typia.createAssert<${name}>();`,
      `export const validate${name} = typia.createValidate<${name}>();`,
    ].join("\n");
  },
};
