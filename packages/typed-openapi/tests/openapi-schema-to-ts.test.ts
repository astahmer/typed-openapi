import prettier from "@prettier/sync";
import "@traversable/schema-to-string/install";
import type { SchemasObject } from "openapi3-ts/oas31";
import { describe, expect, test } from "vitest";
import { type LibSchemaObject } from "../src/types.ts";
import { SchemaTransform } from "./schema.transform.exports.ts";

const format = (src: string) => prettier.format(src, { parser: "typescript", semi: false, printWidth: 45 });

const getSchemaBox = (schema: LibSchemaObject) => {
  const traversable = SchemaTransform.toTraversable(schema);
  return format(`type Output = ${traversable.result.toType()}`);
};

const getNamedSchema = (schema: LibSchemaObject, name: string) => {
  const traversable = SchemaTransform.toTraversable(schema);
  console.log(traversable);
  return format(`type ${name} = ${traversable.refs[name]?.toType()}`);
};

test("null", () => {
  expect(getSchemaBox({ type: "null" })).toMatchInlineSnapshot(`
    "type Output = null
    "
  `);
});
test("boolean", () => {
  expect(getSchemaBox({ type: "boolean" })).toMatchInlineSnapshot(`
    "type Output = boolean
    "
  `);
});
test("boolean nullable", () => {
  expect(getSchemaBox({ type: "boolean", nullable: true })).toMatchInlineSnapshot(`
    "type Output = boolean | null
    "
  `);
});
test("string", () => {
  expect(getSchemaBox({ type: "string" })).toMatchInlineSnapshot(`
    "type Output = string
    "
  `);
});
test("number", () => {
  expect(getSchemaBox({ type: "number" })).toMatchInlineSnapshot(`
    "type Output = number
    "
  `);
});
test("integer", () => {
  expect(getSchemaBox({ type: "integer" })).toMatchInlineSnapshot(`
    "type Output = number
    "
  `);
});
test("empty schema object", () => {
  expect(getSchemaBox({})).toMatchInlineSnapshot(`
    "type Output = unknown
    "
  `);
});
test("string nullable", () => {
  expect(getSchemaBox({ type: "string", nullable: true })).toMatchInlineSnapshot(`
    "type Output = string | null
    "
  `);
});
test("array", () => {
  expect(getSchemaBox({ type: "array", items: { type: "string" } })).toMatchInlineSnapshot(`
    "type Output = string[]
    "
  `);
});
test("array nullable", () => {
  expect(getSchemaBox({ type: "array", items: { type: "string", nullable: true } })).toMatchInlineSnapshot(
    `
    "type Output = (string | null)[]
    "
  `,
  );
});
test("empty object", () => {
  // expected Record<string, unknown>
  expect.fail(getSchemaBox({ type: "object" })).toMatchInlineSnapshot(`
    "type Output = {}
    "
  `);
});
test("object with properties", () => {
  expect(getSchemaBox({ type: "object", properties: { str: { type: "string" } } })).toMatchInlineSnapshot(
    `
    "type Output = { str: string }
    "
  `,
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
  ).toMatchInlineSnapshot(`
    "type Output = {
      str: string
      nb: number
      nullable: string | null
    }
    "
  `);
});
test("object with all properties required", () => {
  // AllPropertiesRequired
  expect(
    getSchemaBox({
      type: "object",
      properties: { str: { type: "string" }, nb: { type: "number" } },
      required: ["str", "nb"],
    }),
  ).toMatchInlineSnapshot(`
    "type Output = { str: string; nb: number }
    "
  `);
});
test("object with some optional properties", () => {
  // SomeOptionalProps
  expect(
    getSchemaBox({
      type: "object",
      properties: { str: { type: "string" }, nb: { type: "number" } },
      required: ["str"],
    }),
  ).toMatchInlineSnapshot(`
    "type Output = {
      str: string
      nb?: number | undefined
    }
    "
  `);
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
  ).toMatchInlineSnapshot(`
    "type Output = {
      str: string
      nb: number
      nested: { nested_prop: boolean }
    }
    "
  `);
});
test("object with additional properties", () => {
  // ObjectWithAdditionalPropsNb
  // expected { str: string } & Record<string, unknown>
  expect.fail(
    getSchemaBox({ type: "object", properties: { str: { type: "string" } }, additionalProperties: { type: "number" } }),
  ).toMatchInlineSnapshot(`
    "type Output = Record<string, number>
    "
  `);
});
test("object with nested record boolean", () => {
  // ObjectWithNestedRecordBoolean
  // expected { str: string } & Record<string, unknown>
  expect(
    getSchemaBox({
      type: "object",
      properties: { str: { type: "string" } },
      additionalProperties: { type: "object", properties: { prop: { type: "boolean" } } },
    }),
  ).toMatchInlineSnapshot(`
    "type Output = Record<
      string,
      { prop: boolean }
    >
    "
  `);
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
  ).toMatchInlineSnapshot(`
    "type Output = {
      str: string
      nullable: string | null
    }[]
    "
  `);
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
  ).toMatchInlineSnapshot(`
    "type Output = string[][]
    "
  `);
});
test("object with enum", () => {
  // ObjectWithEnum
  // expected "aaa" | "bbb" | "ccc"
  expect.fail(
    getSchemaBox({
      type: "object",
      properties: {
        enumprop: { type: "string", enum: ["aaa", "bbb", "ccc"] },
      },
    }),
  ).toMatchInlineSnapshot(`
    "type Output = { enumprop: string }
    "
  `);
});
// expected "aaa" | "bbb" | "ccc"
test("string enum", () => {
  expect.fail(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(`
    "type Output = string
    "
  `);
});
// expected "aaa" | "bbb" | "ccc"
test("string enum", () => {
  // StringENum
  expect.fail(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(`
    "type Output = string
    "
  `);
});
test("object with union", () => {
  // { union: string | number }
  // ObjectWithUnion
  expect.fail(
    getSchemaBox({
      type: "object",
      properties: {
        union: { oneOf: [{ type: "string" }, { type: "number" }] },
      },
    }),
  ).toMatchInlineSnapshot(`
    "type Output = { union: unknown | unknown }
    "
  `);
});
test("union", () => {
  // string | number
  expect.fail(getSchemaBox({ oneOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `
    "type Output = unknown | unknown
    "
  `,
  );
});
test("string or number", () => {
  // string | number
  // StringOrNumber
  expect.fail(getSchemaBox({ oneOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `
    "type Output = unknown | unknown
    "
  `,
  );
});
test("string and number", () => {
  expect(getSchemaBox({ allOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `
    "type Output = string & number
    "
  `,
  );
});
test("string and number allOf", () => {
  // StringAndNumber
  expect(getSchemaBox({ allOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `
    "type Output = string & number
    "
  `,
  );
});
test("string and number anyOf", () => {
  expect(getSchemaBox({ anyOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `
    "type Output = string | number
    "
  `,
  );
});
test("string and number maybe multiple", () => {
  // StringAndNumberMaybeMultiple
  expect(getSchemaBox({ anyOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `
    "type Output = string | number
    "
  `,
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
  ).toMatchInlineSnapshot(`
    "type Output = {
      unionOrArrayOfUnion: string | number
    }
    "
  `);
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
  ).toMatchInlineSnapshot(`
    "type Output = {
      intersection: string & number
    }
    "
  `);
});
test("string enum", () => {
  // "aaa" | "bbb" | "ccc"
  expect.fail(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(`
    "type Output = string
    "
  `);
});
test("number enum", () => {
  // number
  expect.fail(getSchemaBox({ type: "number", enum: [1, 2, 3] })).toMatchInlineSnapshot(`
    "type Output = number
    "
  `);
});
test("number enum - single", () => {
  // 1
  expect.fail(getSchemaBox({ type: "number", enum: [1] })).toMatchInlineSnapshot(`
    "type Output = number
    "
  `);
});
test("enum", () => {
  expect(getSchemaBox({ enum: ["red", "amber", "green", null, 42, true] })).toMatchInlineSnapshot(
    `
    "type Output =
      | 42
      | "red"
      | "amber"
      | "green"
      | null
      | true
    "
  `,
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
    `
    "type Output = {
      members: {
        id: string
        firstName?: (string | null) | undefined
        lastName?: (string | null) | undefined
        email: string
        profilePictureURL?:
          | (string | null)
          | undefined
      }[]
    }
    "
  `,
  );
});

describe("getSchemaBox with context", () => {
  test("with ref", () => {
    const schemas = {
      type: "object",
      properties: {
        str: { type: "string" },
        nb: { type: "number" },
        nested: { $ref: "#/components/schemas/Nested" },
      },
      components: {
        schemas: {
          Nested: {
            type: "object",
            properties: {
              nested_prop: { type: "boolean" },
            },
          },
        },
      },
    } as const;

    expect(getSchemaBox(schemas)).toMatchInlineSnapshot(`
      "type Output = {
        str: string
        nb: number
        nested: Nested
      }
      "
    `);
  });

  test.only("with ref and allOf", () => {
    const schemas = {
      allOf: [{ $ref: "#/components/schemas/Base" }],
      type: "object",
      properties: {
        str: { type: "string" },
        nb: { type: "number" },
      },
      required: ["str"],
      components: {
        schemas: {
          Base: {
            type: "object",
            properties: {
              baseProp: { type: "string" },
            },
          },
        },
      },
    } as const;

    // Base & { baseProp: string }
    // https://json-schema.org/blog/posts/modelling-inheritance
    // https://typespec.io/playground/?e=%40typespec%2Fopenapi3&v=file-output&c=aW1wb3J0ICJAdHlwZXNwZWMvaHR0cCI7Cgp1c2luZyBIdHRwOwoKbW9kZWwgU3RvcmUgewogIG5hbWU6IHN0cmluZzsKICBhZGRyZXNzOiBBxgk7Cn3INccSIGV4dGVuZHPLRXN0cmVldMxHY2l0ecoQfQoKQHJvdXRlKCIvc8Q2cyIpCmludGVyZmFjZcZJc8VKbGlzdChAcXVlcnkgZmlsdGVyyEYpOsYoW13EYHJlYWQoQHBhdGggaWTHGsgiOwp9&options=%7B%7D&vs=%7B%7D
    expect.fail(getSchemaBox(schemas)).toMatchInlineSnapshot(`
      "type Output = Base
      "
    `);
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

    expect.fail(getNamedSchema(schemas, "Root2")).toMatchInlineSnapshot(`
      "type Root2 = undefined
      "
    `);
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

    expect.fail(getNamedSchema(schemas, "Root3")).toMatchInlineSnapshot(`
      "type Root3 = undefined
      "
    `);
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

    expect.fail(getNamedSchema(schemas, "Root4")).toMatchInlineSnapshot(`
      "type Root4 = undefined
      "
    `);
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

    expect.fail(getNamedSchema(schemas, "Root")).toMatchInlineSnapshot(`
      "type Root = undefined
      "
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

    expect.fail(getNamedSchema(schemas, "Root")).toMatchInlineSnapshot(`
      "type Root = undefined
      "
    `);
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

    expect.fail(getNamedSchema(schemas, "Member")).toMatchInlineSnapshot(`
      "type Member = undefined
      "
    `);
  });
});
