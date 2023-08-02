import { openApiSchemaToTs } from "../src/openapi-schema-to-ts";

import type { SchemaObject, SchemasObject } from "openapi3-ts/oas31";
import { describe, expect, test } from "vitest";
import { createRefResolver } from "../src/ref-resolver";
import { OpenapiSchemaConvertContext } from "../src/types";
import { tsFactory } from "../src/ts-factory";

const factory = tsFactory;
const makeCtx = (schemas: SchemasObject): OpenapiSchemaConvertContext => ({
  factory,
  refs: createRefResolver({ components: { schemas } } as any, factory),
});

const getSchemaBox = (schema: SchemaObject, meta?: { name: string }) =>
  openApiSchemaToTs({ schema, meta, ctx: makeCtx({ _Test: schema }) });

test("getSchemaBox", () => {
  expect(getSchemaBox({ type: "null" })).toMatchInlineSnapshot(`
    {
      "type": "ref",
      "value": "null",
    }
  `);
  expect(getSchemaBox({ type: "boolean" })).toMatchInlineSnapshot(`
    {
      "type": "keyword",
      "value": "boolean",
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

  expect(getSchemaBox({ type: "null" }, { name: "nullType" })).toMatchInlineSnapshot(`
    {
      "type": "type",
      "value": "type nullType = null",
    }
  `);
  expect(getSchemaBox({ type: "boolean" }, { name: "booleanType" })).toMatchInlineSnapshot(
    `
    {
      "type": "type",
      "value": "type booleanType = boolean",
    }
  `,
  );
  expect(getSchemaBox({ type: "string" }, { name: "stringType" })).toMatchInlineSnapshot(
    `
    {
      "type": "type",
      "value": "type stringType = string",
    }
  `,
  );
  expect(getSchemaBox({ type: "number" }, { name: "numberType" })).toMatchInlineSnapshot(
    `
    {
      "type": "type",
      "value": "type numberType = number",
    }
  `,
  );
  expect(getSchemaBox({ type: "integer" }, { name: "integerType" })).toMatchInlineSnapshot(
    `
    {
      "type": "type",
      "value": "type integerType = number",
    }
  `,
  );
  expect(getSchemaBox({}, { name: "unknownType" })).toMatchInlineSnapshot(`
    {
      "type": "type",
      "value": "type unknownType = unknown",
    }
  `);

  expect(getSchemaBox({ type: "array", items: { type: "string" } })).toMatchInlineSnapshot(`
    {
      "type": "array",
      "value": "Array<string>",
    }
  `);
  expect(getSchemaBox({ type: "object" }, { name: "EmptyObject" })).toMatchInlineSnapshot(
    `
    {
      "type": "type",
      "value": "type EmptyObject = unknown",
    }
  `,
  );
  expect(getSchemaBox({ type: "object", properties: { str: { type: "string" } } }, { name: "BasicObject" }))
    .toMatchInlineSnapshot(`
      {
        "type": "type",
        "value": "type BasicObject = Partial<{ str: string }>",
      }
    `);
  expect(
    getSchemaBox(
      { type: "object", properties: { str: { type: "string" }, nb: { type: "number" } } },
      { name: "BasicObject2" },
    ),
  ).toMatchInlineSnapshot(`
    {
      "type": "type",
      "value": "type BasicObject2 = Partial<{ str: string, nb: number }>",
    }
  `);

  expect(
    getSchemaBox(
      {
        type: "object",
        properties: { str: { type: "string" }, nb: { type: "number" } },
        required: ["str", "nb"],
      },
      { name: "AllPropertiesRequired" },
    ),
  ).toMatchInlineSnapshot(`
    {
      "type": "type",
      "value": "type AllPropertiesRequired = { str: string, nb: number }",
    }
  `);
  expect(
    getSchemaBox(
      { type: "object", properties: { str: { type: "string" }, nb: { type: "number" } }, required: ["str"] },
      { name: "SomeOptionalProps" },
    ),
  ).toMatchInlineSnapshot(`
    {
      "type": "type",
      "value": "type SomeOptionalProps = { str: string, nb?: number | undefined }",
    }
  `);

  expect(
    getSchemaBox(
      {
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
      },
      { name: "ObjectWithNestedProp" },
    ),
  ).toMatchInlineSnapshot(`
    {
      "type": "type",
      "value": "type ObjectWithNestedProp = Partial<{ str: string, nb: number, nested: Partial<{ nested_prop: boolean }> }>",
    }
  `);

  expect(
    getSchemaBox(
      { type: "object", properties: { str: { type: "string" } }, additionalProperties: { type: "number" } },
      { name: "ObjectWithAdditionalPropsNb" },
    ),
  ).toMatchInlineSnapshot(`
    {
      "type": "type",
      "value": "type ObjectWithAdditionalPropsNb = Partial<{ str: string } & { string: number }>",
    }
  `);

  expect(
    getSchemaBox(
      {
        type: "object",
        properties: { str: { type: "string" } },
        additionalProperties: { type: "object", properties: { prop: { type: "boolean" } } },
      },
      { name: "ObjectWithNestedRecordBoolean" },
    ),
  ).toMatchInlineSnapshot(`
    {
      "type": "type",
      "value": "type ObjectWithNestedRecordBoolean = Partial<{ str: string } & { string: Partial<{ prop: boolean }> }>",
    }
  `);

  expect(
    getSchemaBox({
      type: "array",
      items: {
        type: "object",
        properties: {
          str: { type: "string" },
        },
      },
    }),
  ).toMatchInlineSnapshot(`
    {
      "type": "array",
      "value": "Array<Partial<{ str: string }>>",
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

  expect(
    getSchemaBox(
      {
        type: "object",
        properties: {
          enumprop: { type: "string", enum: ["aaa", "bbb", "ccc"] },
        },
      },
      { name: "ObjectWithEnum" },
    ),
  ).toMatchInlineSnapshot(`
    {
      "type": "type",
      "value": "type ObjectWithEnum = Partial<{ enumprop: \\"aaa\\" | \\"bbb\\" | \\"ccc\\" }>",
    }
  `);

  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(
    `
    {
      "type": "union",
      "value": "\\"aaa\\" | \\"bbb\\" | \\"ccc\\"",
    }
  `,
  );
  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] }, { name: "StringENum" })).toMatchInlineSnapshot(`
    {
      "type": "type",
      "value": "type StringENum = \\"aaa\\" | \\"bbb\\" | \\"ccc\\"",
    }
  `);

  expect(
    getSchemaBox(
      {
        type: "object",
        properties: {
          union: { oneOf: [{ type: "string" }, { type: "number" }] },
        },
      },
      { name: "ObjectWithUnion" },
    ),
  ).toMatchInlineSnapshot(`
    {
      "type": "type",
      "value": "type ObjectWithUnion = Partial<{ union: string | number }>",
    }
  `);
  expect(getSchemaBox({ oneOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `
    {
      "type": "union",
      "value": "string | number",
    }
  `,
  );
  expect(getSchemaBox({ oneOf: [{ type: "string" }, { type: "number" }] }, { name: "StringOrNumber" }))
    .toMatchInlineSnapshot(`
      {
        "type": "type",
        "value": "type StringOrNumber = string | number",
      }
    `);

  expect(getSchemaBox({ allOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `
    {
      "type": "intersection",
      "value": "string & number",
    }
  `,
  );
  expect(getSchemaBox({ allOf: [{ type: "string" }, { type: "number" }] }, { name: "StringAndNumber" }))
    .toMatchInlineSnapshot(`
      {
        "type": "type",
        "value": "type StringAndNumber = string & number",
      }
    `);

  expect(getSchemaBox({ anyOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `
    {
      "type": "union",
      "value": "string | number | Array<string | number>",
    }
  `,
  );
  expect(getSchemaBox({ anyOf: [{ type: "string" }, { type: "number" }] }, { name: "StringAndNumberMaybeMultiple" }))
    .toMatchInlineSnapshot(`
      {
        "type": "type",
        "value": "type StringAndNumberMaybeMultiple = string | number | Array<string | number>",
      }
    `);

  expect(
    getSchemaBox(
      {
        type: "object",
        properties: {
          unionOrArrayOfUnion: { anyOf: [{ type: "string" }, { type: "number" }] },
        },
      },
      { name: "ObjectWithArrayUnion" },
    ),
  ).toMatchInlineSnapshot(`
    {
      "type": "type",
      "value": "type ObjectWithArrayUnion = Partial<{ unionOrArrayOfUnion: string | number | Array<string | number> }>",
    }
  `);

  expect(
    getSchemaBox(
      {
        type: "object",
        properties: {
          intersection: { allOf: [{ type: "string" }, { type: "number" }] },
        },
      },
      { name: "ObjectWithIntersection" },
    ),
  ).toMatchInlineSnapshot(`
    {
      "type": "type",
      "value": "type ObjectWithIntersection = Partial<{ intersection: string & number }>",
    }
  `);

  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(
    `
    {
      "type": "union",
      "value": "\\"aaa\\" | \\"bbb\\" | \\"ccc\\"",
    }
  `,
  );
  expect(getSchemaBox({ type: "number", enum: [1, 2, 3] })).toMatchInlineSnapshot(`
    {
      "type": "union",
      "value": "1 | 2 | 3",
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
    expect(openApiSchemaToTs({ schema: schemas["Root"]!, meta: { name: "Root" }, ctx })).toMatchInlineSnapshot(
      `
      {
        "type": "type",
        "value": "type Root = Partial<{ str: string, nb: number, nested: Nested }>",
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
    expect(openApiSchemaToTs({ schema: schemas["Root2"]!, meta: { name: "Root2" }, ctx })).toMatchInlineSnapshot(
      `
      {
        "type": "type",
        "value": "type Root2 = Partial<{ str: string, nb: number, nested: Nested2 }>",
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

    expect(
      openApiSchemaToTs({
        schema: schemas["Root3"]!,
        meta: { name: "Root3", $ref: "#/components/schemas/Root3" },
        ctx,
      }),
    ).toMatchInlineSnapshot(
      `
      {
        "type": "type",
        "value": "type Root3 = Partial<{ str: string, nb: number, nested: Nested3, arrayOfNested: Array<Nested3> }>",
      }
    `,
    );
  });

  test("with direct (self) recursive ref", async () => {
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
    const result = openApiSchemaToTs({
      schema: schemas["Root4"]!,
      meta: { name: "Root4", $ref: "#/components/schemas/Root4" },
      ctx,
    });

    expect(result).toMatchInlineSnapshot(
      `
      {
        "type": "type",
        "value": "type Root4 = Partial<{ str: string, nb: number, self: Root4, nested: Nested4, arrayOfSelf: Array<Root4> }>",
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
    const result = openApiSchemaToTs({
      schema: schemas["Root"]!,
      meta: { name: "Root", $ref: "#/components/schemas/Root" },
      ctx,
    });

    expect(result).toMatchInlineSnapshot(`
      {
        "type": "type",
        "value": "type Root = Partial<{ recursive: User, basic: number }>",
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
    const result = openApiSchemaToTs({
      schema: schemas["Root"]!,
      meta: { name: "Root", $ref: "#/components/schemas/Root" },
      ctx,
    });

    expect(result).toMatchInlineSnapshot(
      `
      {
        "type": "type",
        "value": "type Root = Partial<{ user: User | Member, users: Array<User | Member | Array<User | Member>>, basic: number }>",
      }
    `,
    );
  });
});
