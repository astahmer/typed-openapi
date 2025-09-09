import * as Zod from "zod";
import * as TypeBox from "@sinclair/typebox";
import { parseKey } from "@traversable/registry";
import { t } from "@traversable/schema";
import { JsonSchema, canonicalizeRefName } from "@traversable/json-schema";

// Imported for the `toJsonSchema` method
import "@traversable/schema-to-json-schema/install";
// Imported for the `toType`
import "@traversable/schema-to-string/install";

const isLiteral = (x: unknown) => x == null || typeof x === "boolean" || typeof x === "number" || typeof x === "string";
export const toZod = JsonSchema.fold<Zod.ZodType>((x) => {
  switch (true) {
    default:
      return x satisfies never;
    case JsonSchema.isRef(x):
      return canonicalizeRefName(x.$ref) as never;
    case JsonSchema.isNever(x):
      return Zod.never();
    case JsonSchema.isNull(x):
      return Zod.null();
    case JsonSchema.isBoolean(x):
      return Zod.boolean();
    case JsonSchema.isInteger(x):
      return Zod.int();
    case JsonSchema.isNumber(x):
      return Zod.number();
    case JsonSchema.isString(x):
      return Zod.string();
    case JsonSchema.isEnum(x):
      return Zod.enum(x.enum.reduce((acc, cur) => ({ ...acc, [String(cur)]: cur }), {}));
    case JsonSchema.isConst(x): {
      if (!isLiteral(x.const)) throw Error("Illegal state");
      return Zod.literal(x.const);
    }
    case JsonSchema.isArray(x):
      return Zod.array(x.items);
    case JsonSchema.isRecord(x): {
      if (x.additionalProperties !== undefined) return Zod.record(Zod.string(), x.additionalProperties);
      else if (x.patternProperties !== undefined)
        return Zod.record(
          Zod.union(Object.keys(x.patternProperties).map((pattern) => Zod.literal(pattern))),
          Zod.union(Object.values(x.patternProperties)),
        );
      else throw Error("Illegal state");
    }
    case JsonSchema.isUnion(x):
      return Zod.union(x.anyOf);
    case JsonSchema.isIntersection(x):
      return Zod.union(x.allOf);
    case JsonSchema.isTuple(x):
      return Zod.tuple(x.prefixItems as []);
    case JsonSchema.isObject(x):
      return Zod.object(
        Object.fromEntries(
          Object.entries(x.properties).map(([k, v]) => [k, !x.required.includes(k) ? Zod.optional(v) : v]),
        ),
      );
    case JsonSchema.isUnknown(x):
      return Zod.unknown();
  }
});

export const toTypeScript = JsonSchema.fold<string>((x) => {
  switch (true) {
    default:
      return x satisfies never;
    case JsonSchema.isRef(x):
      return canonicalizeRefName(x.$ref);
    case JsonSchema.isNever(x):
      return "never";
    case JsonSchema.isNull(x):
      return "null";
    case JsonSchema.isBoolean(x):
      return "boolean";
    case JsonSchema.isInteger(x):
      return "number";
    case JsonSchema.isNumber(x):
      return "number";
    case JsonSchema.isString(x):
      return "string";
    case JsonSchema.isEnum(x):
      return `(${x.enum.join(" | ")})`;
    case JsonSchema.isConst(x):
      return JSON.stringify(x.const);
    case JsonSchema.isArray(x):
      return `Array<${x.items}>`;
    case JsonSchema.isUnion(x):
      return x.anyOf.length === 0 ? "never" : `(${x.anyOf.join(" | ")})`;
    case JsonSchema.isIntersection(x):
      return x.allOf.length === 0 ? "unknown" : `(${x.allOf.join(" & ")})`;
    case JsonSchema.isTuple(x):
      return `[${x.prefixItems.join(", ")}]`;
    case JsonSchema.isRecord(x): {
      if (x.additionalProperties !== undefined) return `Record<string, ${x.additionalProperties}>`;
      else if (x.patternProperties !== undefined)
        return (
          "Record<" +
          Object.keys(x.patternProperties)
            .map((p) => JSON.stringify(p))
            .join(" | ") +
          ", " +
          Object.values(x.patternProperties).join(" | ") +
          ">"
        );
      else throw Error("Illegal state");
    }
    case JsonSchema.isObject(x): {
      return `{ ${Object.entries(x.properties)
        .map(([k, v]) => `${parseKey(k)}${x.required.includes(k) ? "" : "?"}: ${v}`)
        .join(", ")} }`;
    }
    case JsonSchema.isUnknown(x):
      return "unknown";
  }
});

export const toArkType = JsonSchema.fold<string>((x) => {
  switch (true) {
    default:
      return x satisfies never as never;
    case JsonSchema.isRef(x):
      return canonicalizeRefName(x.$ref);
    case JsonSchema.isNever(x):
      return `'never'`;
    case JsonSchema.isNull(x):
      return `'null'`;
    case JsonSchema.isBoolean(x):
      return `'boolean'`;
    case JsonSchema.isInteger(x):
      return `'number.integer'`;
    case JsonSchema.isNumber(x):
      return `'number'`;
    case JsonSchema.isString(x):
      return `'string'`;
    case JsonSchema.isEnum(x):
      return `Type.enumerated(${x.enum.join(", ")})`;
    case JsonSchema.isConst(x):
      return `Type(${JSON.stringify(x.const)})`;
    case JsonSchema.isUnion(x):
      return x.anyOf.reduce((acc, cur) => `${acc}.or(${cur})`, "");
    case JsonSchema.isIntersection(x):
      return x.allOf.reduce((acc, cur) => `${acc}.and(${cur})`, "");
    case JsonSchema.isArray(x):
      return `Type(${x.items}, '[]')`;
    case JsonSchema.isTuple(x):
      return `Type(${x.prefixItems})`;
    case JsonSchema.isRecord(x): {
      if (x.additionalProperties !== undefined) return `Type.Record('string', ${x.additionalProperties})`;
      else if (x.patternProperties !== undefined)
        return (
          "Type.Record(" +
          Object.keys(x.patternProperties).reduce((acc, cur) => `${acc}.or(${cur})`, "") +
          ", " +
          Object.values(x.patternProperties).reduce((acc, cur) => `${acc}.or(${cur})`, "") +
          ")"
        );
      else throw Error("Illegal state");
    }
    case JsonSchema.isObject(x):
      return `Type({${Object.entries(x.properties)
        .map(([k, v]) => `${parseKey(x.required.includes(k) ? k : `${k}?`)}: ${v}`)
        .join(", ")} })`;
    case JsonSchema.isUnknown(x):
      return "unknown";
  }
});

export const toTypeBox = JsonSchema.fold<TypeBox.TSchema>((x) => {
  switch (true) {
    default:
      return x satisfies never;
    case JsonSchema.isRef(x):
      return TypeBox.Ref(canonicalizeRefName(x.$ref));
    case JsonSchema.isNever(x):
      return TypeBox.Never();
    case JsonSchema.isNull(x):
      return TypeBox.Null();
    case JsonSchema.isBoolean(x):
      return TypeBox.Boolean();
    case JsonSchema.isInteger(x):
      return TypeBox.Integer();
    case JsonSchema.isNumber(x):
      return TypeBox.Number();
    case JsonSchema.isString(x):
      return TypeBox.String();
    case JsonSchema.isEnum(x):
      return TypeBox.Enum(x.enum.reduce((acc, cur) => ({ ...acc, [String(cur)]: cur }), {}));
    case JsonSchema.isConst(x):
      return TypeBox.Const(x.const);
    case JsonSchema.isArray(x):
      return TypeBox.Array(x.items);
    case JsonSchema.isRecord(x): {
      if (x.additionalProperties !== undefined) return TypeBox.Record(TypeBox.String(), x.additionalProperties);
      else if (x.patternProperties !== undefined)
        return TypeBox.Record(
          TypeBox.Union(Object.keys(x.patternProperties).map((pattern) => TypeBox.Const(pattern))),
          TypeBox.Union(Object.values(x.patternProperties)),
        );
      else throw Error("Illegal state");
    }
    case JsonSchema.isUnion(x):
      return TypeBox.Union([...x.anyOf]);
    case JsonSchema.isIntersection(x):
      return TypeBox.Intersect([...x.allOf]);
    case JsonSchema.isTuple(x):
      return TypeBox.Tuple([...x.prefixItems]);
    case JsonSchema.isObject(x):
      return TypeBox.Object(
        Object.fromEntries(
          Object.entries(x.properties).map(([k, v]) => [k, !x.required.includes(k) ? TypeBox.Optional(v) : v]),
        ),
      );
    case JsonSchema.isUnknown(x):
      return TypeBox.Unknown();
  }
});

export const toTraversable = JsonSchema.fold<t.Type>((x, ix) => {
  switch (true) {
    default:
      return x satisfies never;
    case JsonSchema.isRef(x):
      return t.ref.def(ix.refs.get(x.$ref)?.(), canonicalizeRefName(x.$ref));
    case JsonSchema.isNever(x):
      return t.never;
    case JsonSchema.isNull(x):
      return t.null;
    case JsonSchema.isBoolean(x):
      return t.boolean;
    case JsonSchema.isInteger(x):
      return t.integer;
    case JsonSchema.isNumber(x):
      return t.number;
    case JsonSchema.isString(x):
      return t.string;
    case JsonSchema.isEnum(x):
      return t.enum(x.enum.reduce((acc, cur) => ({ ...acc, [String(cur)]: cur }), {})) as never; // <-- TODO: fix typing issue (on my end)
    case JsonSchema.isConst(x):
      return t.eq(x.const as {});
    case JsonSchema.isArray(x):
      return t.array(x.items);
    case JsonSchema.isRecord(x): {
      if (x.additionalProperties !== undefined) return t.record(x.additionalProperties);
      else if (x.patternProperties !== undefined) return t.record(t.union(...Object.values(x.patternProperties)));
      else throw Error("Illegal state");
    }
    case JsonSchema.isUnion(x):
      return t.union(...x.anyOf);
    case JsonSchema.isIntersection(x):
      return t.intersect(...x.allOf);
    case JsonSchema.isTuple(x):
      return t.tuple(...x.prefixItems);
    case JsonSchema.isObject(x):
      return t.object(
        Object.fromEntries(
          Object.entries(x.properties).map(([k, v]) => [k, !x.required.includes(k) ? t.optional(v) : v]),
        ),
      );
    case JsonSchema.isUnknown(x):
      return t.unknown;
  }
});
