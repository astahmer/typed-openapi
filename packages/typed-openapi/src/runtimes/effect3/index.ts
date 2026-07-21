import type { SchemaNode } from "../../schema-ir/types.ts";
import {
  applyArrayConstraints,
  applyNumberConstraints,
  applyObjectConstraints,
  applyStringConstraints,
  emitBinaryBlobCheck,
  emitStreamCheck,
  findMappedUnionMember,
  internEffectDefault,
  isNullOr,
  jsLiteral,
  literalValue,
  objectKey,
  objectProps,
  quote,
} from "../shared.ts";
import type { EmitCtx, RuntimeAdapter } from "../types.ts";

/** Legacy `@effect/schema` adapter — mirrors effect4 coverage with package-specific APIs. */
const S = "S";

const pipeFilters = (base: string, filters: string[]): string => {
  if (!filters.length) return base;
  return `${base}.pipe(${filters.join(", ")})`;
};

const emitString = (node: Extract<SchemaNode, { kind: "string" }>, ctx: EmitCtx): string => {
  const c = applyStringConstraints(node.constraints, ctx.validation);
  const filters: string[] = [];
  let base = `${S}.String`;
  if (c.format === "uuid") base = `${S}.UUID`;
  else if (c.format === "email") {
    filters.push(`${S}.pattern(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)`);
  }
  // no Schema.URL in @effect/schema — keep String for uri/url
  if (c.minLength !== undefined) filters.push(`${S}.minLength(${c.minLength})`);
  if (c.maxLength !== undefined) filters.push(`${S}.maxLength(${c.maxLength})`);
  if (c.pattern !== undefined) filters.push(`${S}.pattern(new RegExp(${quote(c.pattern)}))`);
  let expr = pipeFilters(base, filters);
  if (ctx.transformDates && (node.constraints.format === "date-time" || node.constraints.format === "date")) {
    expr = `${S}.transform(${expr}, ${S}.DateFromSelf, { decode: (s) => new Date(s), encode: (d) => d.toISOString() })`;
  }
  return expr;
};

const emitNumber = (node: Extract<SchemaNode, { kind: "number" }>, ctx: EmitCtx): string => {
  if (ctx.transformBigInt && node.constraints.format === "int64") {
    return `${S}.transform(${S}.Union(${S}.BigIntFromSelf, ${S}.Number, ${S}.String), ${S}.BigIntFromSelf, { decode: (x) => BigInt(x as string | number | bigint), encode: (a) => a })`;
  }
  const c = applyNumberConstraints(node.constraints, ctx.validation);
  const filters: string[] = [];
  if (node.integer && ctx.coercePrimitives) filters.push(`${S}.int()`);
  if (c.minimum !== undefined) filters.push(`${S}.greaterThanOrEqualTo(${c.minimum})`);
  if (c.maximum !== undefined) filters.push(`${S}.lessThanOrEqualTo(${c.maximum})`);
  if (c.exclusiveMinimum !== undefined) filters.push(`${S}.greaterThan(${c.exclusiveMinimum})`);
  if (c.exclusiveMaximum !== undefined) filters.push(`${S}.lessThan(${c.exclusiveMaximum})`);
  if (c.multipleOf !== undefined) filters.push(`${S}.multipleOf(${c.multipleOf})`);
  const base = ctx.coercePrimitives ? `${S}.NumberFromString` : node.integer ? `${S}.Int` : `${S}.Number`;
  return pipeFilters(base, filters);
};

const emitRecord = (key: string, value: string) => `${S}.Record({ key: ${key}, value: ${value} })`;

const emitBoolean = (ctx: EmitCtx): string => {
  if (!ctx.coercePrimitives) return `${S}.Boolean`;
  // @effect/schema has no BooleanFromString
  return `${S}.transform(${S}.Union(${S}.Boolean, ${S}.String, ${S}.Number), ${S}.Boolean, { decode: (x) => x === true || x === "true" || x === 1 || x === "1", encode: (a) => a })`;
};

const emitNodeInner = (node: SchemaNode, ctx: EmitCtx): string => {
  const nullInner = isNullOr(node);
  if (nullInner) return `${S}.NullOr(${emitNode(nullInner, ctx)})`;

  switch (node.kind) {
    case "string":
      return emitString(node, ctx);
    case "binary":
      return emitBinaryBlobCheck("effect3");
    case "stream":
      return emitStreamCheck("effect3");
    case "number":
      return emitNumber(node, ctx);
    case "boolean":
      return emitBoolean(ctx);
    case "null":
      return `${S}.Null`;
    case "unknown":
      return `${S}.Unknown`;
    case "any":
      return `${S}.Any`;
    case "never":
      return `${S}.Never`;
    case "literal":
      return `${S}.Literal(${literalValue(node.value)})`;
    case "enum":
      return `${S}.Union(${node.values.map((v) => `${S}.Literal(${literalValue(v)})`).join(", ")})`;
    case "array": {
      const c = applyArrayConstraints(node.constraints, ctx.validation);
      let expr = `${S}.Array(${emitNode(node.items, ctx)})`;
      const filters: string[] = [];
      if (c.minItems !== undefined) filters.push(`${S}.minItems(${c.minItems})`);
      if (c.maxItems !== undefined) filters.push(`${S}.maxItems(${c.maxItems})`);
      if (c.uniqueItems) {
        filters.push(`${S}.filter((arr) => new Set(arr).size === arr.length)`);
      }
      return pipeFilters(expr, filters);
    }
    case "tuple": {
      const items = node.items.map((i) => emitNode(i, ctx)).join(", ");
      return `${S}.Tuple(${items})`;
    }
    case "union": {
      if (node.discriminator?.propertyName) {
        const prop = node.discriminator.propertyName;
        const mapping = node.discriminator.mapping;
        if (mapping && Object.keys(mapping).length > 0) {
          const members = Object.entries(mapping).flatMap(([value, target]) => {
            const member = findMappedUnionMember(node.members, target);
            if (!member) return [];
            const base = emitNode(member, ctx);
            return [`${S}.extend(${base}, ${S}.Struct({ ${objectKey(prop)}: ${S}.Literal(${quote(value)}) }))`];
          });
          if (members.length > 0) {
            return `${S}.Union(${members.join(", ")})`;
          }
        }
      }
      return `${S}.Union(${node.members.map((m) => emitNode(m, ctx)).join(", ")})`;
    }
    case "intersection": {
      const nonNull = node.members.filter((m) => m.kind !== "null").map((m) => isNullOr(m) ?? m);
      if (nonNull.length > 0 && nonNull.every((m) => m.kind === "object")) {
        const objs = nonNull as Extract<SchemaNode, { kind: "object" }>[];
        const properties: Record<string, SchemaNode> = {};
        for (const obj of objs) {
          for (const [key, prop] of Object.entries(obj.properties)) {
            const existing = properties[key];
            if (!existing) {
              properties[key] = prop;
            } else {
              properties[key] = {
                kind: "intersection",
                members: [existing, prop],
                meta: prop.meta,
              };
            }
          }
        }
        return emitNode(
          {
            kind: "object",
            properties,
            required: [...new Set(objs.flatMap((o) => o.required))],
            partial: objs.every((o) => o.partial),
            additionalProperties: objs.some((o) => o.additionalProperties === true)
              ? true
              : (objs.map((o) => o.additionalProperties).find((a) => typeof a === "object") ?? false),
            constraints: {},
            meta: node.meta,
          },
          ctx,
        );
      }
      if (nonNull.length === 0) return `${S}.Null`;
      return nonNull.map((m) => emitNode(m, ctx)).reduce((acc, cur) => `${S}.extend(${acc}, ${cur})`);
    }
    case "not": {
      const inner = emitNode(node.schema, ctx);
      return `${S}.Unknown.pipe(${S}.filter((data) => !${S}.is(${inner})(data)))`;
    }
    case "ref": {
      if (node.name === "Partial" && node.generics?.[0]) {
        // Schema.partial cannot wrap Transformations (e.g. Int.pipe(...)); force optional props instead.
        return emitNode(node.generics[0], { ...ctx, forceOptionalProps: true });
      }
      if (node.name === "Record" && node.generics?.length === 2) {
        return emitRecord(emitNode(node.generics[0]!, ctx), emitNode(node.generics[1]!, ctx));
      }
      return node.name;
    }
    case "record":
      return emitRecord(emitNode(node.key, ctx), emitNode(node.value, ctx));
    case "object": {
      const omitCtx: EmitCtx = { ...ctx, omitDefaults: true };
      const forceOptional = Boolean(node.partial || ctx.forceOptionalProps);
      const props = objectProps(node, emitNode, omitCtx);
      const body = props
        .map(({ key, optional, expr, meta }) => {
          const lit = jsLiteral(meta.default);
          if (lit !== undefined) {
            const named = internEffectDefault(expr, meta, S, ctx, "prop");
            return `${objectKey(key)}: ${named ?? `${S}.optionalWith(${expr}, { default: () => ${lit} })`}`;
          }
          return `${objectKey(key)}: ${optional || forceOptional ? `${S}.optional(${expr})` : expr}`;
        })
        .join(", ");
      let expr = `${S}.Struct({ ${body} })`;
      if (node.additionalProperties === true) {
        expr = `${S}.extend(${expr}, ${emitRecord(`${S}.String`, `${S}.Unknown`)})`;
      } else if (typeof node.additionalProperties === "object") {
        expr = `${S}.extend(${expr}, ${emitRecord(`${S}.String`, emitNode(node.additionalProperties, ctx))})`;
      }
      const oc = applyObjectConstraints(node.constraints, ctx.validation);
      const filters: string[] = [];
      if (oc.minProperties !== undefined) {
        filters.push(`${S}.filter((obj) => Object.keys(obj).length >= ${oc.minProperties})`);
      }
      if (oc.maxProperties !== undefined) {
        filters.push(`${S}.filter((obj) => Object.keys(obj).length <= ${oc.maxProperties})`);
      }
      return pipeFilters(expr, filters);
    }
    default: {
      const _e: never = node;
      return _e;
    }
  }
};

const emitNode = (node: SchemaNode, ctx: EmitCtx): string => {
  const inner = emitNodeInner(node, ctx);
  if (ctx.omitDefaults || node.meta.default === undefined) return inner;
  if (node.kind === "object") return inner;
  return internEffectDefault(inner, node.meta, S, ctx, "value") ?? inner;
};

export const effect3Adapter: RuntimeAdapter = {
  name: "effect3",
  imports: () => `import { Schema as S } from "@effect/schema";`,
  inferType: (expr) => `S.Schema.Type<typeof ${expr}>`,
  emitNode,
  wrapLazy: (_name, body) => `${S}.suspend(() => ${body})`,
  literalString: (value) => `${S}.Literal(${quote(value)})`,
  unknown: () => `${S}.Unknown`,
  never: () => `${S}.Never`,
  emitNamedSchema: (name, node, ctx) => {
    const childCtx = { ...ctx, currentSchemaName: name };
    const nullInner = isNullOr(node);
    let body = emitNode(nullInner ?? node, childCtx);
    if (ctx.recursiveNames.has(name)) body = `${S}.suspend(() => ${body})`;
    const typeExpr = nullInner ? `S.Schema.Type<typeof ${name}> | null` : `S.Schema.Type<typeof ${name}>`;
    return `export const ${name} = ${body};\nexport type ${name} = ${typeExpr};`;
  },
};
