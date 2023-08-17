import { openApiSchemaToTs } from "../src/openapi-schema-to-ts";

import type { SchemaObject, SchemasObject } from "openapi3-ts/oas31";
import { describe, expect, test } from "vitest";
import { createRefResolver } from "../src/ref-resolver";
import { OpenapiSchemaConvertContext } from "../src/types";
import { tsFactory } from "../src/ts-factory";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints";
import { generateFile } from "../src/generator";

const factory = tsFactory;
const makeCtx = (schemas: SchemasObject): OpenapiSchemaConvertContext => ({
  factory,
  refs: createRefResolver({ components: { schemas } } as any, factory),
});
const makeDoc = (schemas: SchemasObject) => ({ components: { schemas } } as any);

const getSchemaBox = (schema: SchemaObject) => {
  const output = generateFile(mapOpenApiEndpoints(makeDoc({ _Test: schema })));
  const start = output.indexOf("// <Schemas>");
  const end = output.indexOf("// </Schemas>");
  return output.substring(start + "// <Schemas>".length, end).trim();
};

test("getSchemaBox", () => {
  expect(getSchemaBox({ type: "null" })).toMatchInlineSnapshot('"export type _Test = null;"');
  expect(getSchemaBox({ type: "boolean" })).toMatchInlineSnapshot('"export type _Test = boolean;"');
  // @ts-expect-error - nullable is not in the SchemaObject for OpenAPI 3.1, but it is for 3.0
  expect(getSchemaBox({ type: "boolean", nullable: true })).toMatchInlineSnapshot('"export type _Test = boolean | null;"');
  expect(getSchemaBox({ type: "string" })).toMatchInlineSnapshot('"export type _Test = string;"');
  expect(getSchemaBox({ type: "number" })).toMatchInlineSnapshot('"export type _Test = number;"');
  expect(getSchemaBox({ type: "integer" })).toMatchInlineSnapshot('"export type _Test = number;"');
  expect(getSchemaBox({})).toMatchInlineSnapshot('"export type _Test = unknown;"');

  expect(getSchemaBox({ type: "array", items: { type: "string" } })).toMatchInlineSnapshot('"export type _Test = Array<string>;"');
  expect(getSchemaBox({ type: "object" })).toMatchInlineSnapshot(
    '"export type _Test = unknown;"',
  );
  expect(getSchemaBox({ type: "object", properties: { str: { type: "string" } } })).toMatchInlineSnapshot('"export type _Test = Partial<{ str: string }>;"');
  expect(getSchemaBox({ type: "object", properties: { str: { type: "string" }, nb: { type: "number" } } }))
    .toMatchInlineSnapshot('"export type _Test = Partial<{ str: string; nb: number }>;"');

  // AllPropertiesRequired
  expect(
    getSchemaBox({
      type: "object",
      properties: { str: { type: "string" }, nb: { type: "number" } },
      required: ["str", "nb"],
    }),
  ).toMatchInlineSnapshot('"export type _Test = { str: string; nb: number };"');

  // SomeOptionalProps
  expect(
    getSchemaBox({
      type: "object",
      properties: { str: { type: "string" }, nb: { type: "number" } },
      required: ["str"],
    }),
  ).toMatchInlineSnapshot('"export type _Test = { str: string; nb?: number | undefined };"');

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
  ).toMatchInlineSnapshot('"export type _Test = Partial<{ str: string; nb: number; nested: Partial<{ nested_prop: boolean }> }>;"');

  // ObjectWithAdditionalPropsNb
  expect(
    getSchemaBox({ type: "object", properties: { str: { type: "string" } }, additionalProperties: { type: "number" } }),
  ).toMatchInlineSnapshot('"export type _Test = Partial<{ str: string } & { string: number }>;"');

  // ObjectWithNestedRecordBoolean
  expect(
    getSchemaBox({
      type: "object",
      properties: { str: { type: "string" } },
      additionalProperties: { type: "object", properties: { prop: { type: "boolean" } } },
    }),
  ).toMatchInlineSnapshot('"export type _Test = Partial<{ str: string } & { string: Partial<{ prop: boolean }> }>;"');

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
  ).toMatchInlineSnapshot('"export type _Test = Array<Partial<{ str: string }>>;"');

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
  ).toMatchInlineSnapshot('"export type _Test = Array<Array<string>>;"');

  // ObjectWithEnum
  expect(
    getSchemaBox({
      type: "object",
      properties: {
        enumprop: { type: "string", enum: ["aaa", "bbb", "ccc"] },
      },
    }),
  ).toMatchInlineSnapshot('"export type _Test = Partial<{ enumprop: "aaa" | "bbb" | "ccc" }>;"');

  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(
    '"export type _Test = "aaa" | "bbb" | "ccc";"',
  );

  // StringENum
  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot('"export type _Test = "aaa" | "bbb" | "ccc";"');

  // ObjectWithUnion
  expect(
    getSchemaBox({
      type: "object",
      properties: {
        union: { oneOf: [{ type: "string" }, { type: "number" }] },
      },
    }),
  ).toMatchInlineSnapshot('"export type _Test = Partial<{ union: string | number }>;"');
  expect(getSchemaBox({ oneOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    '"export type _Test = string | number;"',
  );

  // StringOrNumber
  expect(getSchemaBox({ oneOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot('"export type _Test = string | number;"');

  expect(getSchemaBox({ allOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    '"export type _Test = string & number;"',
  );

  // StringAndNumber
  expect(getSchemaBox({ allOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot('"export type _Test = string & number;"');

  expect(getSchemaBox({ anyOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    '"export type _Test = string | number | Array<string | number>;"',
  );

  // StringAndNumberMaybeMultiple
  expect(getSchemaBox({ anyOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot('"export type _Test = string | number | Array<string | number>;"');

  // ObjectWithArrayUnion
  expect(
    getSchemaBox({
      type: "object",
      properties: {
        unionOrArrayOfUnion: { anyOf: [{ type: "string" }, { type: "number" }] },
      },
    }),
  ).toMatchInlineSnapshot('"export type _Test = Partial<{ unionOrArrayOfUnion: string | number | Array<string | number> }>;"');

  // ObjectWithIntersection
  expect(
    getSchemaBox({
      type: "object",
      properties: {
        intersection: { allOf: [{ type: "string" }, { type: "number" }] },
      },
    }),
  ).toMatchInlineSnapshot('"export type _Test = Partial<{ intersection: string & number }>;"');

  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(
    '"export type _Test = "aaa" | "bbb" | "ccc";"',
  );
  expect(getSchemaBox({ type: "number", enum: [1, 2, 3] })).toMatchInlineSnapshot('"export type _Test = 1 | 2 | 3;"');
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
        "value": "Partial<{ user: User | Member, users: Array<User | Member | Array<User | Member>>, basic: number }>",
      }
    `,
    );
  });
});
