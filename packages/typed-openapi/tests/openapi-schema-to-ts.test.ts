
import type { SchemasObject } from "openapi3-ts/oas31";
import { describe, expect, test } from "vitest";

import { openApiSchemaToTs } from "../src/openapi-schema-to-ts.ts";
import { createRefResolver } from "../src/ref-resolver.ts";
import { OpenapiSchemaConvertContext, type LibSchemaObject } from "../src/types.ts";
import { tsFactory } from "../src/ts-factory.ts";

const factory = tsFactory;
const makeCtx = (schemas: SchemasObject): OpenapiSchemaConvertContext => ({
  factory,
  refs: createRefResolver({ components: { schemas } } as any, factory),
});

const getSchemaBox = (schema: LibSchemaObject) => openApiSchemaToTs({ schema, ctx: makeCtx({ _Test: schema }) });

test("getSchemaBox", () => {
  expect(getSchemaBox({ type: "null" })).toMatchInlineSnapshot(`
    {
      "type": "literal",
      "value": "null",
    }
  `);
  expect(getSchemaBox({ type: "boolean" })).toMatchInlineSnapshot(`
    {
      "type": "keyword",
      "value": "boolean",
    }
  `);
  expect(getSchemaBox({ type: "boolean", nullable: true })).toMatchInlineSnapshot(`
    {
      "type": "union",
      "value": "(boolean | null)",
    }
  `);
  expect(getSchemaBox({ type: "string" })).toMatchInlineSnapshot(`
    {
      "type": "keyword",
      "value": "string",
    }
  `);
  expect(getSchemaBox({ type: "number" })).toMatchInlineSnapshot(`
    {
      "type": "keyword",
      "value": "number",
    }
  `);
  expect(getSchemaBox({ type: "integer" })).toMatchInlineSnapshot(`
    {
      "type": "keyword",
      "value": "number",
    }
  `);
  expect(getSchemaBox({})).toMatchInlineSnapshot(`
    {
      "type": "keyword",
      "value": "unknown",
    }
  `);
  expect(getSchemaBox({ type: "string", nullable: true })).toMatchInlineSnapshot(`
    {
      "type": "union",
      "value": "(string | null)",
    }
  `);

  expect(getSchemaBox({ type: "array", items: { type: "string" } })).toMatchInlineSnapshot(`
    {
      "type": "array",
      "value": "Array<string>",
    }
  `);

  expect(getSchemaBox({ type: "array", items: { type: "string", nullable: true } })).toMatchInlineSnapshot(`
    {
      "type": "array",
      "value": "Array<(string | null)>",
    }
  `);
  expect(getSchemaBox({ type: "object" })).toMatchInlineSnapshot(
    `
    {
      "type": "literal",
      "value": "Record<string, unknown>",
    }
  `,
  );
  expect(getSchemaBox({ type: "object", properties: { str: { type: "string" } } })).toMatchInlineSnapshot(`
      {
        "type": "ref",
        "value": "Partial<{ str: string }>",
      }
    `);
  expect(getSchemaBox({
    type: "object", properties: {
      str: { type: "string" }, nb: { type: "number" }, nullable: {
        type: "string",
        nullable: true
      }
    }
  }))
    .toMatchInlineSnapshot(`
      {
        "type": "ref",
        "value": "Partial<{ str: string, nb: number, nullable: (string | null) }>",
      }
    `);

  // AllPropertiesRequired
  expect(
    getSchemaBox({
      type: "object",
      properties: { str: { type: "string" }, nb: { type: "number" } },
      required: ["str", "nb"],
    }),
  ).toMatchInlineSnapshot(`
    {
      "type": "object",
      "value": "{ str: string, nb: number }",
    }
  `);

  // SomeOptionalProps
  expect(
    getSchemaBox({
      type: "object",
      properties: { str: { type: "string" }, nb: { type: "number" } },
      required: ["str"],
    }),
  ).toMatchInlineSnapshot(`
    {
      "type": "object",
      "value": "{ str: string, nb?: number | undefined }",
    }
  `);

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
  ).toMatchInlineSnapshot(`
    {
      "type": "ref",
      "value": "Partial<{ str: string, nb: number, nested: Partial<{ nested_prop: boolean }> }>",
    }
  `);

  // ObjectWithAdditionalPropsNb
  expect(
    getSchemaBox({ type: "object", properties: { str: { type: "string" } }, additionalProperties: { type: "number" } }),
  ).toMatchInlineSnapshot(`
    {
      "type": "ref",
      "value": "Partial<({ str: string } & { string: number })>",
    }
  `);

  // ObjectWithNestedRecordBoolean
  expect(
    getSchemaBox({
      type: "object",
      properties: { str: { type: "string" } },
      additionalProperties: { type: "object", properties: { prop: { type: "boolean" } } },
    }),
  ).toMatchInlineSnapshot(`
    {
      "type": "ref",
      "value": "Partial<({ str: string } & { string: Partial<{ prop: boolean }> })>",
    }
  `);

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
  ).toMatchInlineSnapshot(`
    {
      "type": "array",
      "value": "Array<Partial<{ str: string, nullable: (string | null) }>>",
    }
  `);

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
  ).toMatchInlineSnapshot(`
    {
      "type": "array",
      "value": "Array<Array<string>>",
    }
  `);

  // ObjectWithEnum
  expect(
    getSchemaBox({
      type: "object",
      properties: {
        enumprop: { type: "string", enum: ["aaa", "bbb", "ccc"] },
      },
    }),
  ).toMatchInlineSnapshot(`
    {
      "type": "ref",
      "value": "Partial<{ enumprop: ("aaa" | "bbb" | "ccc") }>",
    }
  `);

  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(
    `
    {
      "type": "union",
      "value": "("aaa" | "bbb" | "ccc")",
    }
  `,
  );

  // StringENum
  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(`
    {
      "type": "union",
      "value": "("aaa" | "bbb" | "ccc")",
    }
  `);

  // ObjectWithUnion
  expect(
    getSchemaBox({
      type: "object",
      properties: {
        union: { oneOf: [{ type: "string" }, { type: "number" }] },
      },
    }),
  ).toMatchInlineSnapshot(`
    {
      "type": "ref",
      "value": "Partial<{ union: (string | number) }>",
    }
  `);
  expect(getSchemaBox({ oneOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `
    {
      "type": "union",
      "value": "(string | number)",
    }
  `,
  );

  // StringOrNumber
  expect(getSchemaBox({ oneOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(`
    {
      "type": "union",
      "value": "(string | number)",
    }
  `);

  expect(getSchemaBox({ allOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `
    {
      "type": "intersection",
      "value": "(string & number)",
    }
  `,
  );

  // StringAndNumber
  expect(getSchemaBox({ allOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(`
    {
      "type": "intersection",
      "value": "(string & number)",
    }
  `);

  expect(getSchemaBox({ anyOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `
    {
      "type": "union",
      "value": "(string | number)",
    }
  `,
  );

  // StringAndNumberMaybeMultiple
  expect(getSchemaBox({ anyOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(`
    {
      "type": "union",
      "value": "(string | number)",
    }
  `);

  // ObjectWithArrayUnion
  expect(
    getSchemaBox({
      type: "object",
      properties: {
        unionOrArrayOfUnion: { anyOf: [{ type: "string" }, { type: "number" }] },
      },
    }),
  ).toMatchInlineSnapshot(`
    {
      "type": "ref",
      "value": "Partial<{ unionOrArrayOfUnion: (string | number) }>",
    }
  `);

  // ObjectWithIntersection
  expect(
    getSchemaBox({
      type: "object",
      properties: {
        intersection: { allOf: [{ type: "string" }, { type: "number" }] },
      },
    }),
  ).toMatchInlineSnapshot(`
    {
      "type": "ref",
      "value": "Partial<{ intersection: (string & number) }>",
    }
  `);

  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(
    `
    {
      "type": "union",
      "value": "("aaa" | "bbb" | "ccc")",
    }
  `,
  );
  expect(getSchemaBox({ type: "number", enum: [1, 2, 3] })).toMatchInlineSnapshot(`
    {
      "type": "union",
      "value": "(1 | 2 | 3)",
    }
  `);

  expect(getSchemaBox({ type: "number", enum: [1] })).toMatchInlineSnapshot(`
    {
      "type": "literal",
      "value": "1",
    }
  `);

  expect(getSchemaBox({ enum: ["red", "amber", "green", null, 42, true] })).toMatchInlineSnapshot(
    `
    {
      "type": "union",
      "value": "("red" | "amber" | "green" | null | 42 | true)",
    }
  `,
  );


  expect(getSchemaBox({
    "type": "object",
    "properties": {
      "members": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "firstName": {
              "type": "string",
              "nullable": true
            },
            "lastName": {
              "type": "string",
              "nullable": true
            },
            "email": {
              "type": "string"
            },
            "profilePictureURL": {
              "type": "string",
              "nullable": true
            }
          },
          "required": [
            "id",
            "email"
          ]
        }
      }
    },
    "required": [
      "members"
    ]
  })).toMatchInlineSnapshot(`
    {
      "type": "object",
      "value": "{ members: Array<{ id: string, firstName?: (string | null) | undefined, lastName?: (string | null) | undefined, email: string, profilePictureURL?: (string | null) | undefined }> }",
    }
  `);
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
    expect(openApiSchemaToTs({ schema: schemas["Root"]!, ctx })).toMatchInlineSnapshot(
      `
      {
        "type": "ref",
        "value": "Partial<{ str: string, nb: number, nested: Nested }>",
      }
    `,
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

    expect(result).toMatchInlineSnapshot(`
      {
        "type": "ref",
        "value": "Partial<{ recursive: User, basic: number }>",
      }
    `);
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

    expect(result).toMatchInlineSnapshot(
      `
      {
        "type": "ref",
        "value": "Partial<{ name: (string | null) }>",
      }
    `,
    );
  });
});
