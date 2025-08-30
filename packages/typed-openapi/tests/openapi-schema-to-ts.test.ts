import type { SchemasObject } from "openapi3-ts/oas31";
import { describe, expect, test } from "vitest";

import { openApiSchemaToTs } from "../src/openapi-schema-to-ts.ts";
import { createRefResolver } from "../src/ref-resolver.ts";
import { OpenapiSchemaConvertContext, type LibSchemaObject } from "../src/types.ts";
import { fold } from "@traversable/schema/schema";
import { fn, parseKey } from "@traversable/registry";
import type { Json } from "@traversable/schema/recursive";
import { t } from "@traversable/schema";
import { toTypeString } from "@traversable/schema-to-string";

const makeCtx = (schemas: SchemasObject): OpenapiSchemaConvertContext => ({
  refs: createRefResolver({ components: { schemas } } as any),
});

/** @internal */
const Object_entries = globalThis.Object.entries;
/** @internal */
const JSON_stringify = globalThis.JSON.stringify;
/** @internal */
const Object_values = globalThis.Object.values;

const isScalar = (x: unknown) => x == null || typeof x === "boolean" || typeof x === "number" || typeof x === "string";

const isArray: <T>(x: unknown) => x is readonly T[] = globalThis.Array.isArray;

const isObject = <T>(x: unknown): x is { [x: string]: T } => !!x && typeof x === "object" && !isArray(x);

// const getSchemaBox = (schema: LibSchemaObject) => {
//   const traversable = openApiSchemaToTs({ schema, ctx: makeCtx({ _Test: schema }) });
//   const typestring = fold<string>((xParam) => {
//     switch (true) {
//       default: {
//         console.log(123, xParam);
//         return fn.exhaustive(xParam);
//       }
//       case typeof xParam === "string":
//         return JSON_stringify(xParam, null, 1);
//       case isScalar(xParam):
//         return globalThis.String(xParam);
//       case isArray(xParam):
//         return xParam.length === 0 ? "[]" : "[" + xParam.join(", ") + "]";
//       case isObject(xParam): {
//         const xs = Object_entries(xParam);
//         return xs.length === 0 ? "{}" : "{ " + xs.map(([k, v]) => `${parseKey(k)}: ${v}`).join(", ") + " }";
//       }
//     }
//   })(traversable);
//   console.log(traversable, typestring, traversable.toString());

//   return traversable.toString();
// };

const getSchemaBox = (schema: LibSchemaObject) => {
  const traversable = openApiSchemaToTs({ schema, ctx: makeCtx({ _Test: schema }) });
  const typestring = toTypeString.toType(traversable);
  return typestring;
  // console.log(traversable, typestring, traversable.toString());

  // return traversable.toString();
};

test.only("null", () => {
  expect(getSchemaBox({ type: "null" })).toMatchInlineSnapshot(`"t.null"`);
});
test("boolean", () => {
  expect(getSchemaBox({ type: "boolean" })).toMatchInlineSnapshot(`"t.boolean"`);
});
test("boolean nullable", () => {
  expect(getSchemaBox({ type: "boolean", nullable: true })).toMatchInlineSnapshot(`"t.union(t.boolean, t.null)"`);
});
test("string", () => {
  expect(getSchemaBox({ type: "string" })).toMatchInlineSnapshot(`"t.string"`);
});
test("number", () => {
  expect(getSchemaBox({ type: "number" })).toMatchInlineSnapshot(`"t.number"`);
});
test("integer", () => {
  expect(getSchemaBox({ type: "integer" })).toMatchInlineSnapshot(`"t.integer"`);
});
test("empty schema object", () => {
  expect(getSchemaBox({})).toMatchInlineSnapshot(`"t.unknown"`);
});
test("string nullable", () => {
  expect(getSchemaBox({ type: "string", nullable: true })).toMatchInlineSnapshot(`"t.union(t.string, t.null)"`);
});
test("array", () => {
  expect(getSchemaBox({ type: "array", items: { type: "string" } })).toMatchInlineSnapshot(`"t.array(t.string)"`);
});
test("array nullable", () => {
  expect(getSchemaBox({ type: "array", items: { type: "string", nullable: true } })).toMatchInlineSnapshot(
    `"t.array(t.union(t.string, t.null))"`,
  );
});
test("empty object", () => {
  expect(getSchemaBox({ type: "object" })).toMatchInlineSnapshot(`"t.record(t.unknown)"`);
});
test("object with properties", () => {
  expect(getSchemaBox({ type: "object", properties: { str: { type: "string" } } })).toMatchInlineSnapshot(
    `"t.object({ str: t.string })"`,
  );
});
test("object with properties nullable", () => {
  expect(
    getSchemaBox({
      type: "object",
      properties: {
        str: { type: "string" },
        nb: { type: "number" },
        nullable: {
          type: "string",
          nullable: true,
        },
      },
    }),
  ).toMatchInlineSnapshot(`"t.object({ str: t.string, nb: t.number, nullable: t.union(t.string, t.null) })"`);
});
test("object with all properties required", () => {
  // AllPropertiesRequired
  expect(
    getSchemaBox({
      type: "object",
      properties: { str: { type: "string" }, nb: { type: "number" } },
      required: ["str", "nb"],
    }),
  ).toMatchInlineSnapshot(`"t.object({ str: t.string, nb: t.number })"`);
});
test("object with some optional properties", () => {
  // SomeOptionalProps
  expect(
    getSchemaBox({
      type: "object",
      properties: { str: { type: "string" }, nb: { type: "number" } },
      required: ["str"],
    }),
  ).toMatchInlineSnapshot(`"t.object({ str: t.string, nb: t.optional(t.number) })"`);
});
test("object with nested property", () => {
  // ObjectWithNestedProp
  expect(
    getSchemaBox({
      type: "object",
      properties: {
        str: { type: "string" },
        nb: { type: "number" },
        nested: {
          type: "object",
          properties: {
            nested_prop: { type: "boolean" },
          },
        },
      },
    }),
  ).toMatchInlineSnapshot(`"t.object({ str: t.string, nb: t.number, nested: t.object({ nested_prop: t.boolean }) })"`);
});
test("object with additional properties", () => {
  // ObjectWithAdditionalPropsNb
  expect(
    getSchemaBox({ type: "object", properties: { str: { type: "string" } }, additionalProperties: { type: "number" } }),
  ).toMatchInlineSnapshot(`"t.intersect(t.object({ str: t.string }), t.record(t.number))"`);
});
test("object with nested record boolean", () => {
  // ObjectWithNestedRecordBoolean
  expect(
    getSchemaBox({
      type: "object",
      properties: { str: { type: "string" } },
      additionalProperties: { type: "object", properties: { prop: { type: "boolean" } } },
    }),
  ).toMatchInlineSnapshot(`"t.intersect(t.object({ str: t.string }), t.record(t.object({ prop: t.boolean })))"`);
});
test("array with object with nested property", () => {
  expect(
    getSchemaBox({
      type: "array",
      items: {
        type: "object",
        properties: {
          str: { type: "string" },
          nullable: { type: "string", nullable: true },
        },
      },
    }),
  ).toMatchInlineSnapshot(`"t.array(t.object({ str: t.string, nullable: t.union(t.string, t.null) }))"`);
});
test("array with array", () => {
  expect(
    getSchemaBox({
      type: "array",
      items: {
        type: "array",
        items: {
          type: "string",
        },
      },
    }),
  ).toMatchInlineSnapshot(`"t.array(t.array(t.string))"`);
});
test("object with enum", () => {
  // ObjectWithEnum
  expect(
    getSchemaBox({
      type: "object",
      properties: {
        enumprop: { type: "string", enum: ["aaa", "bbb", "ccc"] },
      },
    }),
  ).toMatchInlineSnapshot(`"t.object({ enumprop: t.union(t.eq("aaa"), t.eq("bbb"), t.eq("ccc")) })"`);
});
test("string enum", () => {
  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(
    `"t.union(t.eq("aaa"), t.eq("bbb"), t.eq("ccc"))"`,
  );
});
test("string enum", () => {
  // StringENum
  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(
    `"t.union(t.eq("aaa"), t.eq("bbb"), t.eq("ccc"))"`,
  );
});
test("object with union", () => {
  // ObjectWithUnion
  expect(
    getSchemaBox({
      type: "object",
      properties: {
        union: { oneOf: [{ type: "string" }, { type: "number" }] },
      },
    }),
  ).toMatchInlineSnapshot(`"t.object({ union: t.union(t.string, t.number) })"`);
});
test("union", () => {
  expect(getSchemaBox({ oneOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `"t.union(t.string, t.number)"`,
  );
});
test("string or number", () => {
  // StringOrNumber
  expect(getSchemaBox({ oneOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `"t.union(t.string, t.number)"`,
  );
});
test("string and number", () => {
  expect(getSchemaBox({ allOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `"t.intersect(t.string, t.number)"`,
  );
});
test("string and number allOf", () => {
  // StringAndNumber
  expect(getSchemaBox({ allOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `"t.intersect(t.string, t.number)"`,
  );
});
test("string and number anyOf", () => {
  expect(getSchemaBox({ anyOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `"t.union(t.string, t.number)"`,
  );
});
test("string and number maybe multiple", () => {
  // StringAndNumberMaybeMultiple
  expect(getSchemaBox({ anyOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `"t.union(t.string, t.number)"`,
  );
});
test("object with array union", () => {
  // ObjectWithArrayUnion
  expect(
    getSchemaBox({
      type: "object",
      properties: {
        unionOrArrayOfUnion: { anyOf: [{ type: "string" }, { type: "number" }] },
      },
    }),
  ).toMatchInlineSnapshot(`"t.object({ unionOrArrayOfUnion: t.union(t.string, t.number) })"`);
});
test("object with intersection", () => {
  // ObjectWithIntersection
  expect(
    getSchemaBox({
      type: "object",
      properties: {
        intersection: { allOf: [{ type: "string" }, { type: "number" }] },
      },
    }),
  ).toMatchInlineSnapshot(`"t.object({ intersection: t.intersect(t.string, t.number) })"`);
});
test("string enum", () => {
  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(
    `"t.union(t.eq("aaa"), t.eq("bbb"), t.eq("ccc"))"`,
  );
});
test("number enum", () => {
  expect(getSchemaBox({ type: "number", enum: [1, 2, 3] })).toMatchInlineSnapshot(
    `"t.union(t.eq(1), t.eq(2), t.eq(3))"`,
  );
});
test("number enum - single", () => {
  expect(getSchemaBox({ type: "number", enum: [1] })).toMatchInlineSnapshot(`"t.eq(1)"`);
});
test("enum", () => {
  expect(getSchemaBox({ enum: ["red", "amber", "green", null, 42, true] })).toMatchInlineSnapshot(
    `"t.union(t.eq("red"), t.eq("amber"), t.eq("green"), t.null, t.eq(42), t.eq(true))"`,
  );
});
test("object with array of object with properties", () => {
  expect(
    getSchemaBox({
      type: "object",
      properties: {
        members: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: {
                type: "string",
              },
              firstName: {
                type: "string",
                nullable: true,
              },
              lastName: {
                type: "string",
                nullable: true,
              },
              email: {
                type: "string",
              },
              profilePictureURL: {
                type: "string",
                nullable: true,
              },
            },
            required: ["id", "email"],
          },
        },
      },
      required: ["members"],
    }),
  ).toMatchInlineSnapshot(
    `"t.object({ members: t.array(t.object({ id: t.string, firstName: t.optional(t.union(t.string, t.null)), lastName: t.optional(t.union(t.string, t.null)), email: t.string, profilePictureURL: t.optional(t.union(t.string, t.null)) })) })"`,
  );
});

describe("getSchemaBox with context", () => {
  test("with ref", () => {
    const schemas = {
      Root: {
        type: "object",
        properties: {
          str: { type: "string" },
          nb: { type: "number" },
          nested: { $ref: "#/components/schemas/Nested" },
        },
      },
      Nested: {
        type: "object",
        properties: {
          nested_prop: { type: "boolean" },
        },
      },
    } satisfies SchemasObject;

    const ctx = makeCtx(schemas);
    expect(openApiSchemaToTs({ schema: schemas["Root"]!, ctx }).toString()).toMatchInlineSnapshot(
      `"t.object({ str: t.string, nb: t.number, nested: t.eq({ $ref: "#/components/schemas/Nested" }) })"`,
    );
  });

  test("with ref and allOf", () => {
    const schemas = {
      Extends: {
        allOf: [{ $ref: "#/components/schemas/Base" }],
        type: "object",
        properties: {
          str: { type: "string" },
          nb: { type: "number" },
        },
        required: ["str"],
      },
      Base: {
        type: "object",
        properties: {
          baseProp: { type: "string" },
        },
      },
    } satisfies SchemasObject;

    const ctx = makeCtx(schemas);
    expect(openApiSchemaToTs({ schema: schemas["Extends"]!, ctx }).toString()).toMatchInlineSnapshot(
      `"t.intersect(t.eq({ $ref: "#/components/schemas/Base" }), t.object({ str: t.string, nb: t.optional(t.number) }))"`,
    );
  });

  test("with multiple nested refs", () => {
    const schemas = {
      Root2: {
        type: "object",
        properties: {
          str: { type: "string" },
          nb: { type: "number" },
          nested: { $ref: "#/components/schemas/Nested2" },
        },
      },
      Nested2: {
        type: "object",
        properties: {
          nested_prop: { type: "boolean" },
          deeplyNested: { $ref: "#/components/schemas/DeeplyNested" },
        },
      },
      DeeplyNested: {
        type: "array",
        items: { $ref: "#/components/schemas/VeryDeeplyNested" },
      },
      VeryDeeplyNested: {
        type: "string",
        enum: ["aaa", "bbb", "ccc"],
      },
    } satisfies SchemasObject;

    const ctx = makeCtx(schemas);
    expect(openApiSchemaToTs({ schema: schemas["Root2"]!, ctx }).toString()).toMatchInlineSnapshot(
      `"t.object({ str: t.string, nb: t.number, nested: t.eq({ $ref: "#/components/schemas/Nested2" }) })"`,
    );
  });

  test("with indirect recursive ref", async () => {
    const schemas = {
      Root3: {
        type: "object",
        properties: {
          str: { type: "string" },
          nb: { type: "number" },
          nested: { $ref: "#/components/schemas/Nested3" },
          arrayOfNested: { type: "array", items: { $ref: "#/components/schemas/Nested3" } },
        },
      },
      Nested3: {
        type: "object",
        properties: {
          nested_prop: { type: "boolean" },
          backToRoot: { $ref: "#/components/schemas/Root3" },
        },
      },
    } satisfies SchemasObject;

    const ctx = makeCtx(schemas);

    expect(openApiSchemaToTs({ schema: schemas["Root3"]!, ctx }).toString()).toMatchInlineSnapshot(
      `"t.object({ str: t.string, nb: t.number, nested: t.eq({ $ref: "#/components/schemas/Nested3" }), arrayOfNested: t.array(t.eq({ $ref: "#/components/schemas/Nested3" })) })"`,
    );
  });

  test("with direct (self) circular/recursive ref", async () => {
    const schemas = {
      Root4: {
        type: "object",
        properties: {
          str: { type: "string" },
          nb: { type: "number" },
          self: { $ref: "#/components/schemas/Root4" },
          nested: { $ref: "#/components/schemas/Nested4" },
          arrayOfSelf: { type: "array", items: { $ref: "#/components/schemas/Root4" } },
        },
      },
      Nested4: {
        type: "object",
        properties: {
          nested_prop: { type: "boolean" },
          backToRoot: { $ref: "#/components/schemas/Root4" },
        },
      },
    } satisfies SchemasObject;

    const ctx = makeCtx(schemas);
    const result = openApiSchemaToTs({ schema: schemas["Root4"]!, ctx }).toString();

    expect(result).toMatchInlineSnapshot(
      `"t.object({ str: t.string, nb: t.number, self: t.eq({ $ref: "#/components/schemas/Root4" }), nested: t.eq({ $ref: "#/components/schemas/Nested4" }), arrayOfSelf: t.array(t.eq({ $ref: "#/components/schemas/Root4" })) })"`,
    );
  });

  test("same schemas as openApiToZod", () => {
    const schemas = {
      User: {
        type: "object",
        properties: {
          name: { type: "string" },
          middle: { $ref: "#/components/schemas/Middle" },
        },
      },
      Middle: {
        type: "object",
        properties: {
          user: { $ref: "#/components/schemas/User" },
        },
      },
      Root: {
        type: "object",
        properties: {
          recursive: {
            $ref: "#/components/schemas/User",
          },
          basic: { type: "number" },
        },
      },
    } satisfies SchemasObject;

    const ctx = makeCtx(schemas);
    const result = openApiSchemaToTs({ schema: schemas["Root"]!, ctx }).toString();

    expect(result).toMatchInlineSnapshot(
      `"t.object({ recursive: t.eq({ $ref: "#/components/schemas/User" }), basic: t.number })"`,
    );
  });

  test("anyOf with refs", () => {
    const schemas = {
      User: {
        type: "object",
        properties: {
          name: { type: "string" },
        },
      },
      Member: {
        type: "object",
        properties: {
          name: { type: "string" },
        },
      },
      Root: {
        type: "object",
        properties: {
          user: { oneOf: [{ $ref: "#/components/schemas/User" }, { $ref: "#/components/schemas/Member" }] },
          users: {
            type: "array",
            items: {
              anyOf: [{ $ref: "#/components/schemas/User" }, { $ref: "#/components/schemas/Member" }],
            },
          },
          basic: { type: "number" },
        },
      },
    } satisfies SchemasObject;

    const ctx = makeCtx(schemas);
    const result = openApiSchemaToTs({ schema: schemas["Root"]!, ctx }).toString();

    expect(result).toMatchInlineSnapshot(
      `"t.object({ user: t.union(t.eq({ $ref: "#/components/schemas/User" }), t.eq({ $ref: "#/components/schemas/Member" })), users: t.array(t.union(t.eq({ $ref: "#/components/schemas/User" }), t.eq({ $ref: "#/components/schemas/Member" }))), basic: t.number })"`,
    );
  });

  test("nullable string", () => {
    const schemas = {
      Member: {
        type: "object",
        properties: {
          // @ts-expect-error
          name: { type: "string", nullable: true },
        },
      },
    } satisfies SchemasObject;

    const ctx = makeCtx(schemas);
    const result = openApiSchemaToTs({ schema: schemas.Member, ctx }).toString();

    expect(result).toMatchInlineSnapshot(`"t.object({ name: t.union(t.string, t.null) })"`);
  });
});
