import type {
  LiteralValue,
  SchemaNode,
  StringConstraints,
  NumberConstraints,
  ArrayConstraints,
} from "../schema-ir/types.ts";
import type { EmitCtx } from "./types.ts";
import type { ValidationPolicy } from "./validation.ts";

export const quote = (value: string) => JSON.stringify(value);

/** Quote object keys that are not valid JS identifiers */
export const objectKey = (key: string): string => {
  if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key)) return key;
  return quote(key);
};

export const literalValue = (value: LiteralValue): string => {
  if (value === null) return "null";
  if (typeof value === "string") return quote(value);
  return String(value);
};

export const isNullOr = (node: SchemaNode): SchemaNode | undefined => {
  if (node.kind !== "union" || node.members.length !== 2) return undefined;
  const nullMember = node.members.find((m) => m.kind === "null");
  const other = node.members.find((m) => m.kind !== "null");
  if (nullMember && other) return other;
  return undefined;
};

export type AppliedStringConstraints = {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  format?: string;
};

export type AppliedNumberConstraints = {
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: number;
  exclusiveMaximum?: number;
  multipleOf?: number;
};

export type AppliedArrayConstraints = {
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
};

export type AppliedObjectConstraints = {
  minProperties?: number;
  maxProperties?: number;
};

export const applyStringConstraints = (
  constraints: StringConstraints,
  policy: ValidationPolicy,
): AppliedStringConstraints => {
  const out: AppliedStringConstraints = {};
  if (policy.formats && constraints.format) out.format = constraints.format;
  // contentEncoding base64 ≈ OpenAPI format: byte
  if (policy.formats && !out.format && constraints.contentEncoding === "base64") {
    out.format = "byte";
  }
  if (policy.stringConstraints) {
    if (constraints.minLength !== undefined) out.minLength = constraints.minLength;
    if (constraints.maxLength !== undefined) out.maxLength = constraints.maxLength;
    if (constraints.pattern !== undefined) out.pattern = constraints.pattern;
  }
  return out;
};

export const applyNumberConstraints = (
  constraints: NumberConstraints,
  policy: ValidationPolicy,
): AppliedNumberConstraints => {
  if (!policy.numberConstraints) return {};
  const out: AppliedNumberConstraints = {};
  if (constraints.minimum !== undefined) out.minimum = constraints.minimum;
  if (constraints.maximum !== undefined) out.maximum = constraints.maximum;
  if (typeof constraints.exclusiveMinimum === "number") out.exclusiveMinimum = constraints.exclusiveMinimum;
  if (typeof constraints.exclusiveMaximum === "number") out.exclusiveMaximum = constraints.exclusiveMaximum;
  // OAS 3.0 boolean exclusiveMinimum: bump minimum
  if (constraints.exclusiveMinimum === true && constraints.minimum !== undefined) {
    out.exclusiveMinimum = constraints.minimum;
    delete out.minimum;
  }
  if (constraints.exclusiveMaximum === true && constraints.maximum !== undefined) {
    out.exclusiveMaximum = constraints.maximum;
    delete out.maximum;
  }
  if (constraints.multipleOf !== undefined) out.multipleOf = constraints.multipleOf;
  return out;
};

export const applyArrayConstraints = (
  constraints: ArrayConstraints,
  policy: ValidationPolicy,
): AppliedArrayConstraints => {
  if (!policy.arrayConstraints) return {};
  const out: AppliedArrayConstraints = {};
  if (constraints.minItems !== undefined) out.minItems = constraints.minItems;
  if (constraints.maxItems !== undefined) out.maxItems = constraints.maxItems;
  if (constraints.uniqueItems) out.uniqueItems = true;
  return out;
};

export const applyObjectConstraints = (
  constraints: { minProperties?: number; maxProperties?: number },
  policy: ValidationPolicy,
): AppliedObjectConstraints => {
  if (!policy.objectConstraints) return {};
  const out: AppliedObjectConstraints = {};
  if (constraints.minProperties !== undefined) out.minProperties = constraints.minProperties;
  if (constraints.maxProperties !== undefined) out.maxProperties = constraints.maxProperties;
  return out;
};

export const objectProps = (
  node: Extract<SchemaNode, { kind: "object" }>,
  emit: (n: SchemaNode, ctx: EmitCtx) => string,
  ctx: EmitCtx,
): { key: string; optional: boolean; expr: string }[] => {
  return Object.entries(node.properties).map(([key, prop]) => ({
    key,
    // When `partial` is true, adapters apply `.partial()` / equivalent on the whole object.
    optional: node.partial ? false : !node.required.includes(key),
    expr: emit(prop, ctx),
  }));
};

/** Detect component names that appear in their own dependency closure */
export const findRecursiveSchemaNames = (schemas: Array<{ name: string; node: SchemaNode }>): Set<string> => {
  const byName = new Map(schemas.map((s) => [s.name, s.node]));
  const recursive = new Set<string>();

  const refsIn = (node: SchemaNode, into: Set<string>) => {
    switch (node.kind) {
      case "ref":
        into.add(node.name);
        node.generics?.forEach((g) => refsIn(g, into));
        break;
      case "array":
        refsIn(node.items, into);
        break;
      case "tuple":
        node.items.forEach((i) => refsIn(i, into));
        if (node.rest) refsIn(node.rest, into);
        break;
      case "object":
        Object.values(node.properties).forEach((p) => refsIn(p, into));
        if (typeof node.additionalProperties === "object") refsIn(node.additionalProperties, into);
        break;
      case "union":
      case "intersection":
        node.members.forEach((m) => refsIn(m, into));
        break;
      case "not":
        refsIn(node.schema, into);
        break;
      case "record":
        refsIn(node.key, into);
        refsIn(node.value, into);
        break;
      default:
        break;
    }
  };

  for (const { name, node } of schemas) {
    const deps = new Set<string>();
    refsIn(node, deps);
    if (deps.has(name)) {
      recursive.add(name);
      continue;
    }
    // indirect: walk closure
    const seen = new Set<string>();
    const stack = [...deps];
    while (stack.length) {
      const dep = stack.pop()!;
      if (dep === name) {
        recursive.add(name);
        break;
      }
      if (seen.has(dep)) continue;
      seen.add(dep);
      const depNode = byName.get(dep);
      if (!depNode) continue;
      const nested = new Set<string>();
      refsIn(depNode, nested);
      nested.forEach((n) => stack.push(n));
    }
  }

  return recursive;
};
