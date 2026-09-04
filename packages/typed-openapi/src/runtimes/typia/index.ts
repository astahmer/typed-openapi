import {
  applyArrayConstraints,
  applyNumberConstraints,
  applyStringConstraints,
  collectClosedObjectKeys,
  emitKeyAllowed,
  isClosedObjectLike,
} from "../shared.ts";
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

const isExactObject = (node: SchemaNode): boolean =>
  node.kind === "object" &&
  node.additionalProperties === false &&
  Object.keys(node.patternProperties ?? {}).length === 0;

const createGuard = (typeExpr: string, keys: string[] | undefined): string => {
  if (!keys) return createIs(typeExpr);
  return `((input: unknown): input is ${typeExpr} => typia.createIs<${typeExpr}>()(input) && input !== null && typeof input === "object" && Object.keys(input).every((key) => ${emitKeyAllowed(keys)}))`;
};

const exactObjectKeys = (node: SchemaNode, ctx: EmitCtx): string[] | undefined => {
  if (node.kind === "object" && isExactObject(node)) return Object.keys(node.properties);
  if (node.kind === "intersection" && node.members.every((member) => isClosedObjectLike(member, ctx))) {
    return collectClosedObjectKeys(node, ctx);
  }
  return undefined;
};

const containsRuntimeSemantics = (node: SchemaNode, ctx: EmitCtx, seen = new Set<string>()): boolean => {
  switch (node.kind) {
    case "not":
      return true;
    case "union":
      return Boolean(node.exclusive) || node.members.some((member) => containsRuntimeSemantics(member, ctx, seen));
    case "intersection":
      return node.members.some((member) => containsRuntimeSemantics(member, ctx, seen));
    case "object":
      return (
        Object.keys(node.patternProperties ?? {}).length > 0 ||
        Object.values(node.properties).some((property) => containsRuntimeSemantics(property, ctx, seen)) ||
        (typeof node.additionalProperties === "object" &&
          containsRuntimeSemantics(node.additionalProperties, ctx, seen)) ||
        Object.values(node.patternProperties ?? {}).some((property) => containsRuntimeSemantics(property, ctx, seen))
      );
    case "array":
      return containsRuntimeSemantics(node.items, ctx, seen);
    case "tuple":
      return (
        node.items.some((item) => containsRuntimeSemantics(item, ctx, seen)) ||
        (node.rest ? containsRuntimeSemantics(node.rest, ctx, seen) : false)
      );
    case "record":
      return containsRuntimeSemantics(node.key, ctx, seen) || containsRuntimeSemantics(node.value, ctx, seen);
    case "ref": {
      if (!ctx.schemaNodes || seen.has(node.name)) return false;
      const target = ctx.schemaNodes.get(node.name);
      return target ? containsRuntimeSemantics(target, ctx, new Set(seen).add(node.name)) : false;
    }
    case "custom":
      return node.fallback ? containsRuntimeSemantics(node.fallback, ctx, seen) : false;
    default:
      return false;
  }
};

const guardCall = (node: SchemaNode, value: string, ctx: EmitCtx): string => `(${emitNode(node, ctx)})(${value})`;

const runtimeChecks = (node: SchemaNode, value: string, ctx: EmitCtx): string[] => {
  switch (node.kind) {
    case "not":
      return [`!(${guardCall(node.schema, value, ctx)})`];
    case "union": {
      const checks = node.members.map((member) => guardCall(member, value, ctx)).join(", ");
      return [`[${checks}].filter(Boolean).length ${node.exclusive ? "=== 1" : "> 0"}`];
    }
    case "intersection":
      return node.members.flatMap((member) =>
        containsRuntimeSemantics(member, ctx) ? runtimeChecks(member, value, ctx) : [],
      );
    case "object": {
      const checks: string[] = [];
      for (const [key, property] of Object.entries(node.properties)) {
        if (containsRuntimeSemantics(property, ctx)) {
          const propertyValue = `(input as Record<string, unknown>)[${JSON.stringify(key)}]`;
          checks.push(
            `(!Object.prototype.hasOwnProperty.call(${value}, ${JSON.stringify(key)}) || ${guardCall(property, propertyValue, ctx)})`,
          );
        }
      }
      const patterns = Object.entries(node.patternProperties ?? {});
      const patternChecks = patterns
        .filter(([, property]) => containsRuntimeSemantics(property, ctx) || patterns.length > 0)
        .map(
          ([pattern, property]) =>
            `(!new RegExp(${JSON.stringify(pattern)}).test(key) || ${guardCall(property, "value", ctx)})`,
        );
      const additional =
        node.additionalProperties === false
          ? "false"
          : node.additionalProperties === true
            ? "true"
            : guardCall(node.additionalProperties, "value", ctx);
      if (patterns.length > 0 || node.additionalProperties !== true) {
        const matching = patterns.map(([pattern]) => `new RegExp(${JSON.stringify(pattern)}).test(key)`).join(" || ");
        const allowed = [emitKeyAllowed(Object.keys(node.properties)), ...(matching ? [`(${matching})`] : [])].join(
          " || ",
        );
        checks.push(
          `Object.entries(${value} as Record<string, unknown>).every(([key, value]) => ${allowed} || ${additional})`,
        );
      }
      if (patternChecks.length > 0) {
        checks.push(
          `Object.entries(${value} as Record<string, unknown>).every(([key, value]) => ${patternChecks.join(" && ")})`,
        );
      }
      return checks;
    }
    case "array":
      return [`(${value} as unknown[]).every((item) => ${guardCall(node.items, "item", ctx)})`];
    case "tuple": {
      const checks = node.items.map((item, index) => guardCall(item, `${value}[${index}]`, ctx));
      if (node.rest)
        checks.push(
          `(${value} as unknown[]).slice(${node.items.length}).every((item) => ${guardCall(node.rest, "item", ctx)})`,
        );
      return checks;
    }
    case "record":
      return [
        `Object.values(${value} as Record<string, unknown>).every((item) => ${guardCall(node.value, "item", ctx)})`,
      ];
    default:
      return [];
  }
};

const createRuntimeGuard = (node: SchemaNode, ctx: EmitCtx): string => {
  const typeExpr = typiaTypeExpr(node, ctx);
  if (node.kind === "not") {
    return `((input: unknown): input is ${typeExpr} => ${runtimeChecks(node, "input", ctx)[0]})`;
  }
  const keys = exactObjectKeys(node, ctx);
  const checks = [
    `${createIs(typeExpr)}(input)`,
    ...runtimeChecks(node, "input", ctx),
    ...(keys
      ? [`input !== null && typeof input === "object" && Object.keys(input).every((key) => ${emitKeyAllowed(keys)})`]
      : []),
  ];
  return `((input: unknown): input is ${typeExpr} => ${checks.join(" && ")})`;
};

const semanticHelpers = (name: string, typeExpr: string) => [
  `export const assert${name} = (input: unknown): ${typeExpr} => { if (!is${name}(input)) throw new Error("typia validation failed"); return input as ${typeExpr}; };`,
  `export const validate${name} = (input: unknown): typia.IValidation<${typeExpr}> => is${name}(input) ? { success: true, data: input as ${typeExpr} } : { success: false, data: input, errors: [] };`,
];

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
    case "custom":
      if (node.runtime) return node.runtime;
      // typia can generate a guard directly from the declared type.
      return `typia.createIs<${node.type ?? "unknown"}>()`;
    default:
      return toTs(node, ctx);
  }
};

const emitNode = (node: SchemaNode, ctx: EmitCtx): string => {
  if (containsRuntimeSemantics(node, ctx)) return createRuntimeGuard(node, ctx);
  const keys = exactObjectKeys(node, ctx);
  if (keys) return createGuard(typiaTypeExpr(node, ctx), keys);
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
      const semantic = containsRuntimeSemantics(node, ctx);
      const is = semantic ? emitNode(node, ctx) : undefined;
      return [
        `export type ${name} = ${typeReference};`,
        `export const is${name} = ${is ?? createGuard(typeReference, exactObjectKeys(node, ctx))};`,
        ...(semantic
          ? semanticHelpers(name, typeReference)
          : [
              `export const assert${name} = typia.createAssert<${typeReference}>();`,
              `export const validate${name} = typia.createValidate<${typeReference}>();`,
            ]),
      ].join("\n");
    }
    // Recursive record/object as interface — same TS2456 fix as none-runtime.
    const typeDecl =
      ctx.recursiveNames.has(name) && canEmitAsInterface(node)
        ? emitNamedInterface(name, node, irOpts)
        : `export type ${name} = ${typiaTypeExpr(node, ctx)};`;
    const semantic = containsRuntimeSemantics(node, ctx);
    return [
      typeDecl,
      `export const is${name} = ${semantic ? emitNode(node, ctx) : createGuard(name, exactObjectKeys(node, ctx))};`,
      ...(semantic
        ? semanticHelpers(name, name)
        : [
            `export const assert${name} = typia.createAssert<${name}>();`,
            `export const validate${name} = typia.createValidate<${name}>();`,
          ]),
    ].join("\n");
  },
};
