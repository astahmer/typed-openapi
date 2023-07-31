import { openApiSchemaToTs } from "../src/openapi-schema-to-ts";

import type { SchemaObject, SchemasObject } from "openapi3-ts/oas31";
import { describe, expect, test } from "vitest";
import { asComponentSchema } from "../src/utils";
import { makeSchemaResolver } from "../src/schema-resolver";
import { OpenapiSchemaConvertContext } from "../src/types";
import { tsFactory } from "../src/ts-factory";

const makeCtx = (schemas: SchemasObject): OpenapiSchemaConvertContext => ({
  factory: tsFactory,
  resultByRef: {},
  visiteds: new Set(),
  resolver: makeSchemaResolver({ components: { schemas } } as any),
});

const getSchemaBox = (schema: SchemaObject, meta?: { name: string }) =>
  openApiSchemaToTs({ schema, meta, ctx: makeCtx({ _Test: schema }) });

test("getSchemaBox", () => {
  expect(getSchemaBox({ type: "null" })).toMatchInlineSnapshot(`
    {
      "params": {
        "name": "null",
      },
      "schema": {
        "type": "null",
      },
      "type": "ref",
      "value": "null",
    }
  `);
  expect(getSchemaBox({ type: "boolean" })).toMatchInlineSnapshot(`
    {
      "params": {
        "name": "boolean",
      },
      "schema": {
        "type": "boolean",
      },
      "type": "keyword",
      "value": "boolean",
    }
  `);
  expect(getSchemaBox({ type: "string" })).toMatchInlineSnapshot(`
    {
      "params": {
        "name": "string",
      },
      "schema": {
        "type": "string",
      },
      "type": "keyword",
      "value": "string",
    }
  `);
  expect(getSchemaBox({ type: "number" })).toMatchInlineSnapshot(`
    {
      "params": {
        "name": "number",
      },
      "schema": {
        "type": "number",
      },
      "type": "keyword",
      "value": "number",
    }
  `);
  expect(getSchemaBox({ type: "integer" })).toMatchInlineSnapshot(`
    {
      "params": {
        "name": "number",
      },
      "schema": {
        "type": "integer",
      },
      "type": "keyword",
      "value": "number",
    }
  `);
  expect(getSchemaBox({})).toMatchInlineSnapshot(`
    {
      "params": {
        "name": "unknown",
      },
      "schema": {},
      "type": "keyword",
      "value": "unknown",
    }
  `);

  expect(getSchemaBox({ type: "null" }, { name: "nullType" })).toMatchInlineSnapshot(`
    {
      "params": {
        "def": {
          "type": "ref",
          "value": "null",
        },
        "name": "nullType",
      },
      "schema": {
        "type": "null",
      },
      "type": "type",
      "value": "type nullType = null",
    }
  `);
  expect(getSchemaBox({ type: "boolean" }, { name: "booleanType" })).toMatchInlineSnapshot(
    `
    {
      "params": {
        "def": {
          "type": "keyword",
          "value": "boolean",
        },
        "name": "booleanType",
      },
      "schema": {
        "type": "boolean",
      },
      "type": "type",
      "value": "type booleanType = boolean",
    }
  `,
  );
  expect(getSchemaBox({ type: "string" }, { name: "stringType" })).toMatchInlineSnapshot(
    `
    {
      "params": {
        "def": {
          "type": "keyword",
          "value": "string",
        },
        "name": "stringType",
      },
      "schema": {
        "type": "string",
      },
      "type": "type",
      "value": "type stringType = string",
    }
  `,
  );
  expect(getSchemaBox({ type: "number" }, { name: "numberType" })).toMatchInlineSnapshot(
    `
    {
      "params": {
        "def": {
          "type": "keyword",
          "value": "number",
        },
        "name": "numberType",
      },
      "schema": {
        "type": "number",
      },
      "type": "type",
      "value": "type numberType = number",
    }
  `,
  );
  expect(getSchemaBox({ type: "integer" }, { name: "integerType" })).toMatchInlineSnapshot(
    `
    {
      "params": {
        "def": {
          "type": "keyword",
          "value": "number",
        },
        "name": "integerType",
      },
      "schema": {
        "type": "integer",
      },
      "type": "type",
      "value": "type integerType = number",
    }
  `,
  );
  expect(getSchemaBox({}, { name: "unknownType" })).toMatchInlineSnapshot(`
    {
      "params": {
        "def": {
          "type": "keyword",
          "value": "unknown",
        },
        "name": "unknownType",
      },
      "schema": {},
      "type": "type",
      "value": "type unknownType = unknown",
    }
  `);

  expect(getSchemaBox({ type: "array", items: { type: "string" } })).toMatchInlineSnapshot(`
    {
      "params": {
        "type": {
          "type": "keyword",
          "value": "string",
        },
      },
      "schema": {
        "items": {
          "type": "string",
        },
        "type": "array",
      },
      "type": "array",
      "value": "Array<string>",
    }
  `);
  expect(getSchemaBox({ type: "object" }, { name: "EmptyObject" })).toMatchInlineSnapshot(
    `
    {
      "params": {
        "def": {
          "type": "keyword",
          "value": "unknown",
        },
        "name": "EmptyObject",
      },
      "schema": {
        "type": "object",
      },
      "type": "type",
      "value": "type EmptyObject = unknown",
    }
  `,
  );
  expect(getSchemaBox({ type: "object", properties: { str: { type: "string" } } }, { name: "BasicObject" }))
    .toMatchInlineSnapshot(`
      {
        "params": {
          "def": {
            "type": "ref",
            "value": "Partial<{ str: string }>",
          },
          "name": "BasicObject",
        },
        "schema": {
          "properties": {
            "str": {
              "type": "string",
            },
          },
          "type": "object",
        },
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
      "params": {
        "def": {
          "type": "ref",
          "value": "Partial<{ str: string, nb: number }>",
        },
        "name": "BasicObject2",
      },
      "schema": {
        "properties": {
          "nb": {
            "type": "number",
          },
          "str": {
            "type": "string",
          },
        },
        "type": "object",
      },
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
      "params": {
        "def": {
          "type": "object",
          "value": "{ str: string, nb: number }",
        },
        "name": "AllPropertiesRequired",
      },
      "schema": {
        "properties": {
          "nb": {
            "type": "number",
          },
          "str": {
            "type": "string",
          },
        },
        "required": [
          "str",
          "nb",
        ],
        "type": "object",
      },
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
      "params": {
        "def": {
          "type": "object",
          "value": "{ str: string, nb: number | undefined }",
        },
        "name": "SomeOptionalProps",
      },
      "schema": {
        "properties": {
          "nb": {
            "type": "number",
          },
          "str": {
            "type": "string",
          },
        },
        "required": [
          "str",
        ],
        "type": "object",
      },
      "type": "type",
      "value": "type SomeOptionalProps = { str: string, nb: number | undefined }",
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
      "params": {
        "def": {
          "type": "ref",
          "value": "Partial<{ str: string, nb: number, nested: Partial<{ nested_prop: boolean }> }>",
        },
        "name": "ObjectWithNestedProp",
      },
      "schema": {
        "properties": {
          "nb": {
            "type": "number",
          },
          "nested": {
            "properties": {
              "nested_prop": {
                "type": "boolean",
              },
            },
            "type": "object",
          },
          "str": {
            "type": "string",
          },
        },
        "type": "object",
      },
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
      "params": {
        "def": {
          "type": "ref",
          "value": "Partial<{ str: string } & { string: number }>",
        },
        "name": "ObjectWithAdditionalPropsNb",
      },
      "schema": {
        "additionalProperties": {
          "type": "number",
        },
        "properties": {
          "str": {
            "type": "string",
          },
        },
        "type": "object",
      },
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
      "params": {
        "def": {
          "type": "ref",
          "value": "Partial<{ str: string } & { string: Partial<{ prop: boolean }> }>",
        },
        "name": "ObjectWithNestedRecordBoolean",
      },
      "schema": {
        "additionalProperties": {
          "properties": {
            "prop": {
              "type": "boolean",
            },
          },
          "type": "object",
        },
        "properties": {
          "str": {
            "type": "string",
          },
        },
        "type": "object",
      },
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
      "params": {
        "type": {
          "type": "ref",
          "value": "Partial<{ str: string }>",
        },
      },
      "schema": {
        "items": {
          "properties": {
            "str": {
              "type": "string",
            },
          },
          "type": "object",
        },
        "type": "array",
      },
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
      "params": {
        "type": {
          "type": "array",
          "value": "Array<string>",
        },
      },
      "schema": {
        "items": {
          "items": {
            "type": "string",
          },
          "type": "array",
        },
        "type": "array",
      },
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
      "params": {
        "def": {
          "type": "ref",
          "value": "Partial<{ enumprop: aaa | bbb | ccc }>",
        },
        "name": "ObjectWithEnum",
      },
      "schema": {
        "properties": {
          "enumprop": {
            "enum": [
              "aaa",
              "bbb",
              "ccc",
            ],
            "type": "string",
          },
        },
        "type": "object",
      },
      "type": "type",
      "value": "type ObjectWithEnum = Partial<{ enumprop: aaa | bbb | ccc }>",
    }
  `);

  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(
    `
    {
      "params": {
        "types": [
          "aaa",
          "bbb",
          "ccc",
        ],
      },
      "schema": {
        "enum": [
          "aaa",
          "bbb",
          "ccc",
        ],
        "type": "string",
      },
      "type": "union",
      "value": "aaa | bbb | ccc",
    }
  `,
  );
  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] }, { name: "StringENum" })).toMatchInlineSnapshot(`
    {
      "params": {
        "def": {
          "type": "union",
          "value": "aaa | bbb | ccc",
        },
        "name": "StringENum",
      },
      "schema": {
        "enum": [
          "aaa",
          "bbb",
          "ccc",
        ],
        "type": "string",
      },
      "type": "type",
      "value": "type StringENum = aaa | bbb | ccc",
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
      "params": {
        "def": {
          "type": "ref",
          "value": "Partial<{ union: string | number }>",
        },
        "name": "ObjectWithUnion",
      },
      "schema": {
        "properties": {
          "union": {
            "oneOf": [
              {
                "type": "string",
              },
              {
                "type": "number",
              },
            ],
          },
        },
        "type": "object",
      },
      "type": "type",
      "value": "type ObjectWithUnion = Partial<{ union: string | number }>",
    }
  `);
  expect(getSchemaBox({ oneOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `
    {
      "params": {
        "types": [
          {
            "params": {
              "name": "string",
            },
            "schema": {
              "type": "string",
            },
            "type": "keyword",
            "value": "string",
          },
          {
            "params": {
              "name": "number",
            },
            "schema": {
              "type": "number",
            },
            "type": "keyword",
            "value": "number",
          },
        ],
      },
      "schema": {
        "oneOf": [
          {
            "type": "string",
          },
          {
            "type": "number",
          },
        ],
      },
      "type": "union",
      "value": "string | number",
    }
  `,
  );
  expect(getSchemaBox({ oneOf: [{ type: "string" }, { type: "number" }] }, { name: "StringOrNumber" }))
    .toMatchInlineSnapshot(`
      {
        "params": {
          "def": {
            "type": "union",
            "value": "string | number",
          },
          "name": "StringOrNumber",
        },
        "schema": {
          "oneOf": [
            {
              "type": "string",
            },
            {
              "type": "number",
            },
          ],
        },
        "type": "type",
        "value": "type StringOrNumber = string | number",
      }
    `);

  expect(getSchemaBox({ allOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `
    {
      "params": {
        "types": [
          {
            "params": {
              "name": "string",
            },
            "schema": {
              "type": "string",
            },
            "type": "keyword",
            "value": "string",
          },
          {
            "params": {
              "name": "number",
            },
            "schema": {
              "type": "number",
            },
            "type": "keyword",
            "value": "number",
          },
        ],
      },
      "schema": {
        "allOf": [
          {
            "type": "string",
          },
          {
            "type": "number",
          },
        ],
      },
      "type": "intersection",
      "value": "string & number",
    }
  `,
  );
  expect(getSchemaBox({ allOf: [{ type: "string" }, { type: "number" }] }, { name: "StringAndNumber" }))
    .toMatchInlineSnapshot(`
      {
        "params": {
          "def": {
            "type": "intersection",
            "value": "string & number",
          },
          "name": "StringAndNumber",
        },
        "schema": {
          "allOf": [
            {
              "type": "string",
            },
            {
              "type": "number",
            },
          ],
        },
        "type": "type",
        "value": "type StringAndNumber = string & number",
      }
    `);

  expect(getSchemaBox({ anyOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `
    {
      "params": {
        "types": [
          {
            "params": {
              "types": [
                {
                  "params": {
                    "name": "string",
                  },
                  "schema": {
                    "type": "string",
                  },
                  "type": "keyword",
                  "value": "string",
                },
                {
                  "params": {
                    "name": "number",
                  },
                  "schema": {
                    "type": "number",
                  },
                  "type": "keyword",
                  "value": "number",
                },
              ],
            },
            "schema": {
              "anyOf": [
                {
                  "type": "string",
                },
                {
                  "type": "number",
                },
              ],
            },
            "type": "union",
            "value": "string | number",
          },
          {
            "params": {
              "type": {
                "type": "union",
                "value": "string | number",
              },
            },
            "schema": {
              "anyOf": [
                {
                  "type": "string",
                },
                {
                  "type": "number",
                },
              ],
            },
            "type": "array",
            "value": "Array<string | number>",
          },
        ],
      },
      "schema": {
        "anyOf": [
          {
            "type": "string",
          },
          {
            "type": "number",
          },
        ],
      },
      "type": "union",
      "value": "string | number | Array<string | number>",
    }
  `,
  );
  expect(getSchemaBox({ anyOf: [{ type: "string" }, { type: "number" }] }, { name: "StringAndNumberMaybeMultiple" }))
    .toMatchInlineSnapshot(`
      {
        "params": {
          "def": {
            "type": "union",
            "value": "string | number | Array<string | number>",
          },
          "name": "StringAndNumberMaybeMultiple",
        },
        "schema": {
          "anyOf": [
            {
              "type": "string",
            },
            {
              "type": "number",
            },
          ],
        },
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
      "params": {
        "def": {
          "type": "ref",
          "value": "Partial<{ unionOrArrayOfUnion: string | number | Array<string | number> }>",
        },
        "name": "ObjectWithArrayUnion",
      },
      "schema": {
        "properties": {
          "unionOrArrayOfUnion": {
            "anyOf": [
              {
                "type": "string",
              },
              {
                "type": "number",
              },
            ],
          },
        },
        "type": "object",
      },
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
      "params": {
        "def": {
          "type": "ref",
          "value": "Partial<{ intersection: string & number }>",
        },
        "name": "ObjectWithIntersection",
      },
      "schema": {
        "properties": {
          "intersection": {
            "allOf": [
              {
                "type": "string",
              },
              {
                "type": "number",
              },
            ],
          },
        },
        "type": "object",
      },
      "type": "type",
      "value": "type ObjectWithIntersection = Partial<{ intersection: string & number }>",
    }
  `);

  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(
    `
    {
      "params": {
        "types": [
          "aaa",
          "bbb",
          "ccc",
        ],
      },
      "schema": {
        "enum": [
          "aaa",
          "bbb",
          "ccc",
        ],
        "type": "string",
      },
      "type": "union",
      "value": "aaa | bbb | ccc",
    }
  `,
  );
  expect(getSchemaBox({ type: "number", enum: [1, 2, 3] })).toMatchInlineSnapshot(`
    {
      "params": {
        "types": [
          1,
          2,
          3,
        ],
      },
      "schema": {
        "enum": [
          1,
          2,
          3,
        ],
        "type": "number",
      },
      "type": "union",
      "value": " |  | ",
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
    Object.keys(schemas).forEach((key) => ctx.resolver.getSchemaByRef(asComponentSchema(key)));
    expect(openApiSchemaToTs({ schema: schemas["Root"]!, meta: { name: "Root" }, ctx })).toMatchInlineSnapshot(
      `
      {
        "params": {
          "def": {
            "type": "ref",
            "value": "Partial<{ str: string, nb: number, nested: Nested }>",
          },
          "name": "Root",
        },
        "schema": {
          "properties": {
            "nb": {
              "type": "number",
            },
            "nested": {
              "$ref": "#/components/schemas/Nested",
            },
            "str": {
              "type": "string",
            },
          },
          "type": "object",
        },
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
    Object.keys(schemas).forEach((key) => ctx.resolver.getSchemaByRef(asComponentSchema(key)));
    expect(openApiSchemaToTs({ schema: schemas["Root2"]!, meta: { name: "Root2" }, ctx })).toMatchInlineSnapshot(
      `
      {
        "params": {
          "def": {
            "type": "ref",
            "value": "Partial<{ str: string, nb: number, nested: Nested2 }>",
          },
          "name": "Root2",
        },
        "schema": {
          "properties": {
            "nb": {
              "type": "number",
            },
            "nested": {
              "$ref": "#/components/schemas/Nested2",
            },
            "str": {
              "type": "string",
            },
          },
          "type": "object",
        },
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
    Object.keys(schemas).forEach((key) => ctx.resolver.getSchemaByRef(asComponentSchema(key)));

    expect(
      openApiSchemaToTs({
        schema: schemas["Root3"]!,
        meta: { name: "Root3", $ref: "#/components/schemas/Root3" },
        ctx,
      }),
    ).toMatchInlineSnapshot(
      `
      {
        "params": {
          "def": {
            "type": "ref",
            "value": "Partial<{ str: string, nb: number, nested: Nested3, arrayOfNested: Array<Nested3> }>",
          },
          "name": "Root3",
        },
        "schema": {
          "properties": {
            "arrayOfNested": {
              "items": {
                "$ref": "#/components/schemas/Nested3",
              },
              "type": "array",
            },
            "nb": {
              "type": "number",
            },
            "nested": {
              "$ref": "#/components/schemas/Nested3",
            },
            "str": {
              "type": "string",
            },
          },
          "type": "object",
        },
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
    Object.keys(schemas).forEach((key) => ctx.resolver.getSchemaByRef(asComponentSchema(key)));
    const result = openApiSchemaToTs({
      schema: schemas["Root4"]!,
      meta: { name: "Root4", $ref: "#/components/schemas/Root4" },
      ctx,
    });

    expect(result).toMatchInlineSnapshot(
      `
      {
        "params": {
          "def": {
            "type": "ref",
            "value": "Partial<{ str: string, nb: number, self: Root4, nested: Nested4, arrayOfSelf: Array<Root4> }>",
          },
          "name": "Root4",
        },
        "schema": {
          "properties": {
            "arrayOfSelf": {
              "items": {
                "$ref": "#/components/schemas/Root4",
              },
              "type": "array",
            },
            "nb": {
              "type": "number",
            },
            "nested": {
              "$ref": "#/components/schemas/Nested4",
            },
            "self": {
              "$ref": "#/components/schemas/Root4",
            },
            "str": {
              "type": "string",
            },
          },
          "type": "object",
        },
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
    Object.keys(schemas).forEach((key) => ctx.resolver.getSchemaByRef(asComponentSchema(key)));
    const result = openApiSchemaToTs({
      schema: schemas["Root"]!,
      meta: { name: "Root", $ref: "#/components/schemas/Root" },
      ctx,
    });

    expect(result).toMatchInlineSnapshot(`
      {
        "params": {
          "def": {
            "type": "ref",
            "value": "Partial<{ recursive: User, basic: number }>",
          },
          "name": "Root",
        },
        "schema": {
          "properties": {
            "basic": {
              "type": "number",
            },
            "recursive": {
              "$ref": "#/components/schemas/User",
            },
          },
          "type": "object",
        },
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
    Object.keys(schemas).forEach((key) => ctx.resolver.getSchemaByRef(asComponentSchema(key)));
    const result = openApiSchemaToTs({
      schema: schemas["Root"]!,
      meta: { name: "Root", $ref: "#/components/schemas/Root" },
      ctx,
    });

    expect(result).toMatchInlineSnapshot(
      `
      {
        "params": {
          "def": {
            "type": "ref",
            "value": "Partial<{ user: User | Member, users: Array<User | Member | Array<User | Member>>, basic: number }>",
          },
          "name": "Root",
        },
        "schema": {
          "properties": {
            "basic": {
              "type": "number",
            },
            "user": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/User",
                },
                {
                  "$ref": "#/components/schemas/Member",
                },
              ],
            },
            "users": {
              "items": {
                "anyOf": [
                  {
                    "$ref": "#/components/schemas/User",
                  },
                  {
                    "$ref": "#/components/schemas/Member",
                  },
                ],
              },
              "type": "array",
            },
          },
          "type": "object",
        },
        "type": "type",
        "value": "type Root = Partial<{ user: User | Member, users: Array<User | Member | Array<User | Member>>, basic: number }>",
      }
    `,
    );
  });
});
