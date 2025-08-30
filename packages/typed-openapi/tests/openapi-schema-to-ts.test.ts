import type { SchemasObject } from "openapi3-ts/oas31";
import { describe, expect, test } from "vitest";

import { openApiSchemaToTs } from "../src/openapi-schema-to-ts.ts";
import { createRefResolver } from "../src/ref-resolver.ts";
import { OpenapiSchemaConvertContext, type LibSchemaObject } from "../src/types.ts";

const makeCtx = (schemas: SchemasObject): OpenapiSchemaConvertContext => ({
  refs: createRefResolver({ components: { schemas } } as any),
});

const getSchemaBox = (schema: LibSchemaObject) =>
  openApiSchemaToTs({ schema, ctx: makeCtx({ _Test: schema }) }).toString();

test("null", () => {
  expect(getSchemaBox({ type: "null" })).toMatchInlineSnapshot(`"t.null"`);
});
test("boolean", () => {
  expect(getSchemaBox({ type: "boolean" })).toMatchInlineSnapshot(`"t.boolean"`);
});
test("boolean nullable", () => {
  expect(getSchemaBox({ type: "boolean", nullable: true })).toMatchInlineSnapshot(`"t.optional(t.boolean)"`);
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
  expect(getSchemaBox({ type: "string", nullable: true })).toMatchInlineSnapshot(`"t.optional(t.string)"`);
});
test("array", () => {
  expect(getSchemaBox({ type: "array", items: { type: "string" } })).toMatchInlineSnapshot(`"t.array(t.string)"`);
});
test("array nullable", () => {
  expect(getSchemaBox({ type: "array", items: { type: "string", nullable: true } })).toMatchInlineSnapshot(
    `"t.array(t.optional(t.string))"`,
  );
});
test("empty object", () => {
  expect(getSchemaBox({ type: "object" })).toMatchInlineSnapshot(`"t.unknown"`);
});
test("object with properties", () => {
  expect(getSchemaBox({ type: "object", properties: { str: { type: "string" } } })).toMatchInlineSnapshot(
    `"t.object({ str: t.optional(t.string) })"`,
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
  ).toMatchInlineSnapshot(
    `"t.object({ str: t.optional(t.string), nb: t.optional(t.number), nullable: t.optional(t.optional(t.string)) })"`,
  );
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
  ).toMatchInlineSnapshot(
    `"t.object({ str: t.optional(t.string), nb: t.optional(t.number), nested: t.optional(t.object({ nested_prop: t.optional(t.boolean) })) })"`,
  );
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
  ).toMatchInlineSnapshot(
    `"t.intersect(t.object({ str: t.string }), t.record(t.object({ prop: t.optional(t.boolean) })))"`,
  );
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
  ).toMatchInlineSnapshot(
    `"t.array(t.object({ str: t.optional(t.string), nullable: t.optional(t.optional(t.string)) }))"`,
  );
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
  ).toMatchInlineSnapshot(`"t.object({ enumprop: t.optional(t.string) })"`);
});
test("string enum", () => {
  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(`"t.string"`);
});
test("string enum", () => {
  // StringENum
  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(`"t.string"`);
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
  ).toMatchInlineSnapshot(`"t.object({ union: t.unknown })"`);
});
test("union", () => {
  expect(getSchemaBox({ oneOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(`"t.unknown"`);
});
test("string or number", () => {
  // StringOrNumber
  expect(getSchemaBox({ oneOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(`"t.unknown"`);
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
  ).toMatchInlineSnapshot(`"t.object({ unionOrArrayOfUnion: t.optional(t.union(t.string, t.number)) })"`);
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
  ).toMatchInlineSnapshot(`"t.object({ intersection: t.optional(t.intersect(t.string, t.number)) })"`);
});
test("string enum", () => {
  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(`"t.string"`);
});
test("number enum", () => {
  expect(getSchemaBox({ type: "number", enum: [1, 2, 3] })).toMatchInlineSnapshot(`"t.number"`);
});
test("number enum", () => {
  expect(getSchemaBox({ type: "number", enum: [1] })).toMatchInlineSnapshot(`"t.number"`);
});
test("enum", () => {
  expect(getSchemaBox({ enum: ["red", "amber", "green", null, 42, true] })).toMatchInlineSnapshot(
    `"t.union(t.eq("red"), t.eq("amber"), t.eq("green"), t.eq(null), t.eq(42), t.eq(true))"`,
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
    `"t.object({ members: t.array(t.object({ id: t.string, firstName: t.optional(t.optional(t.string)), lastName: t.optional(t.optional(t.string)), email: t.string, profilePictureURL: t.optional(t.optional(t.string)) })) })"`,
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
    expect(openApiSchemaToTs({ schema: schemas["Root"]!, ctx })).toMatchInlineSnapshot(`[Function]`);
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
    expect(openApiSchemaToTs({ schema: schemas["Extends"]!, ctx })).toMatchInlineSnapshot(`[Function]`);
  });

  test.only("with multiple nested refs", () => {
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
    expect(openApiSchemaToTs({ schema: schemas["Root2"]!, ctx })).toMatchInlineSnapshot(
      `
      {
        "type": "ref",
        "value": "Partial<{ str: string, nb: number, nested: Nested2 }>",
      }
    `,
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

    expect(openApiSchemaToTs({ schema: schemas["Root3"]!, ctx })).toMatchInlineSnapshot(
      `
      {
        "type": "ref",
        "value": "Partial<{ str: string, nb: number, nested: Nested3, arrayOfNested: Array<Nested3> }>",
      }
    `,
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
    const result = openApiSchemaToTs({ schema: schemas["Root4"]!, ctx });

    expect(result).toMatchInlineSnapshot(
      `
      {
        "type": "ref",
        "value": "Partial<{ str: string, nb: number, self: Root4, nested: Nested4, arrayOfSelf: Array<Root4> }>",
      }
    `,
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
    const result = openApiSchemaToTs({ schema: schemas["Root"]!, ctx });

    expect(result).toMatchInlineSnapshot(`[Function]`);
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
    const result = openApiSchemaToTs({ schema: schemas["Root"]!, ctx });

    expect(result).toMatchInlineSnapshot(
      `
      {
        "type": "ref",
        "value": "Partial<{ user: (User | Member), users: Array<(User | Member)>, basic: number }>",
      }
    `,
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
    const result = openApiSchemaToTs({ schema: schemas.Member, ctx });

    expect(result).toMatchInlineSnapshot(`[Function]`);
  });
});
