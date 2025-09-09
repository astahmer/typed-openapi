import { t } from "@traversable/schema";
import "@traversable/schema-to-string/install";
import { defaultIndex } from "@traversable/schema/schema";
import type { SchemasObject } from "openapi3-ts/oas31";
import { describe, expect, test } from "vitest";
import { openApiSchemaToTs } from "../src/openapi-schema-to-ts.ts";
import { createRefResolver } from "../src/ref-resolver.ts";
import { OpenapiSchemaConvertContext, type LibSchemaObject } from "../src/types.ts";
// import { toTypeString } from "@traversable/schema-to-string";
import { fn, parseKey, typeName, URI } from "@traversable/registry";
import { defaults, type Options } from "@traversable/schema/recursive";

const makeCtx = (schemas: SchemasObject): OpenapiSchemaConvertContext => ({
  refs: createRefResolver({ components: { schemas } } as any),
});

const getSchemaBox = (schema: LibSchemaObject) => {
  const ctx = makeCtx({ _Test: schema });
  const traversable = openApiSchemaToTs({ schema, ctx });
  return printTraversable(traversable);
};

/** @internal */
const OPT = "<<>>" as const;

/** @internal */
const trim = (s?: string) => (s == null ? String(s) : s.startsWith(OPT) ? s.substring(OPT.length) : s);

const printTraversable = (traversable: t.F<any>) => {
  function toType(schema: t.Schema, options?: Options, ix?: t.Functor.Index): string;
  function toType(schema: t.Schema, options: Options = defaults, ix = defaultIndex) {
    const {
      initialOffset: OFF = defaults.initialOffset,
      format: FORMAT = defaults.format,
      maxWidth: MAX_WIDTH = defaults.maxWidth,
    } = options;
    const out = t.foldWithIndex<string | { $ref: string }>((x, ix) => {
      const { depth } = ix;
      const OFFSET = OFF + depth * 2;
      const JOIN = ",\n" + "  ".repeat(depth + 1);
      switch (true) {
        /* v8 ignore next 1 */
        default:
          return fn.exhaustive(x);
        case x.tag === URI.integer:
          return "number";
        case t.isLeaf(x):
          return typeName(x);
        case x.tag === URI.eq && typeof x.def === "object": {
          return x.def["$ref"].split("/").pop();
        }
        case x.tag === URI.eq:
          return JSON.stringify(x.def);
        case x.tag === URI.array:
          return `(${trim(x.def)})[]`;
        case x.tag === URI.record:
          return `Record<string, ${trim(x.def)}>`;
        case x.tag === URI.optional:
          return `${OPT}(${trim(x.def)} | undefined)`;
        case x.tag === URI.union:
          return `(${x.def.map(trim).join(" | ")})`;
        case x.tag === URI.intersect:
          return `(${x.def.map(trim).join(" & ")})`;
        case x.tag === URI.tuple: {
          const BODY = x.def.map((y) => (y?.startsWith(OPT) ? "_?: " : "") + trim(y));
          const SINGLE_LINE = `[${BODY.join(", ")}]`;
          if (!FORMAT) return SINGLE_LINE;
          else {
            const WIDTH = OFFSET + SINGLE_LINE.length;
            const IS_MULTI_LINE = WIDTH > MAX_WIDTH || SINGLE_LINE.includes("\n");
            return !IS_MULTI_LINE
              ? SINGLE_LINE
              : "[" + "\n" + "  ".repeat(depth + 1) + BODY.join(JOIN) + "\n" + "  ".repeat(depth + 0) + "]";
          }
        }
        case x.tag === URI.object: {
          const BODY = Object.entries(x.def).map(
            ([k, v]) => parseKey(k) + (v?.startsWith(OPT) ? "?" : "") + `: ${trim(v)}`,
          );
          if (BODY.length === 0) return `{}`;
          else {
            const SINGLE_LINE = `{ ${BODY.join(", ")} }`;
            if (!FORMAT) return SINGLE_LINE;
            else {
              const WIDTH = OFFSET + SINGLE_LINE.length;
              const IS_MULTI_LINE = WIDTH > MAX_WIDTH || SINGLE_LINE.includes("\n");
              return !IS_MULTI_LINE
                ? SINGLE_LINE
                : "{" + "\n" + "  ".repeat(depth + 1) + BODY.join(JOIN) + "\n" + "  ".repeat(depth + 0) + "}";
            }
          }
        }
      }
    })(schema, ix);

    return out.startsWith(OPT) ? out.slice(OPT.length) : out;
  }

  // const typestring = toTypeString.toType(traversable);
  // const typestring = recurse.toType(traversable);
  const typestring = toType(traversable);
  // const typestring = fold<any>((term) => term.toType())(traversable);
  // const typestring = fold<any>((term) => recurse(term))(traversable);
  // console.log({ typestring, toString: traversable.toString(), toType: traversable.toType() });
  // const typestring = traversable.toType();
  return typestring;
  // return traversable.toString();
};

test("null", () => {
  expect(getSchemaBox({ type: "null" })).toMatchInlineSnapshot(`"null"`);
});
test("boolean", () => {
  expect(getSchemaBox({ type: "boolean" })).toMatchInlineSnapshot(`"boolean"`);
});
test("boolean nullable", () => {
  expect(getSchemaBox({ type: "boolean", nullable: true })).toMatchInlineSnapshot(`"(boolean | null)"`);
});
test("string", () => {
  expect(getSchemaBox({ type: "string" })).toMatchInlineSnapshot(`"string"`);
});
test("number", () => {
  expect(getSchemaBox({ type: "number" })).toMatchInlineSnapshot(`"number"`);
});
test("integer", () => {
  expect(getSchemaBox({ type: "integer" })).toMatchInlineSnapshot(`"number"`);
});
test("empty schema object", () => {
  expect(getSchemaBox({})).toMatchInlineSnapshot(`"unknown"`);
});
test("string nullable", () => {
  expect(getSchemaBox({ type: "string", nullable: true })).toMatchInlineSnapshot(`"(string | null)"`);
});
test("array", () => {
  expect(getSchemaBox({ type: "array", items: { type: "string" } })).toMatchInlineSnapshot(`"(string)[]"`);
});
test("array nullable", () => {
  expect(getSchemaBox({ type: "array", items: { type: "string", nullable: true } })).toMatchInlineSnapshot(
    `"((string | null))[]"`,
  );
});
test("empty object", () => {
  expect(getSchemaBox({ type: "object" })).toMatchInlineSnapshot(`"Record<string, unknown>"`);
});
test("object with properties", () => {
  expect(getSchemaBox({ type: "object", properties: { str: { type: "string" } } })).toMatchInlineSnapshot(
    `"{ str: string }"`,
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
  ).toMatchInlineSnapshot(`"{ str: string, nb: number, nullable: (string | null) }"`);
});
test("object with all properties required", () => {
  // AllPropertiesRequired
  expect(
    getSchemaBox({
      type: "object",
      properties: { str: { type: "string" }, nb: { type: "number" } },
      required: ["str", "nb"],
    }),
  ).toMatchInlineSnapshot(`"{ str: string, nb: number }"`);
});
test("object with some optional properties", () => {
  // SomeOptionalProps
  expect(
    getSchemaBox({
      type: "object",
      properties: { str: { type: "string" }, nb: { type: "number" } },
      required: ["str"],
    }),
  ).toMatchInlineSnapshot(`"{ str: string, nb?: (number | undefined) }"`);
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
  ).toMatchInlineSnapshot(`"{ str: string, nb: number, nested: { nested_prop: boolean } }"`);
});
test("object with additional properties", () => {
  // ObjectWithAdditionalPropsNb
  expect(
    getSchemaBox({ type: "object", properties: { str: { type: "string" } }, additionalProperties: { type: "number" } }),
  ).toMatchInlineSnapshot(`"({ str: string } & Record<string, number>)"`);
});
test("object with nested record boolean", () => {
  // ObjectWithNestedRecordBoolean
  expect(
    getSchemaBox({
      type: "object",
      properties: { str: { type: "string" } },
      additionalProperties: { type: "object", properties: { prop: { type: "boolean" } } },
    }),
  ).toMatchInlineSnapshot(`"({ str: string } & Record<string, { prop: boolean }>)"`);
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
  ).toMatchInlineSnapshot(`"({ str: string, nullable: (string | null) })[]"`);
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
  ).toMatchInlineSnapshot(`"((string)[])[]"`);
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
  ).toMatchInlineSnapshot(`"{ enumprop: ("aaa" | "bbb" | "ccc") }"`);
});
test("string enum", () => {
  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(
    `"("aaa" | "bbb" | "ccc")"`,
  );
});
test("string enum", () => {
  // StringENum
  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(
    `"("aaa" | "bbb" | "ccc")"`,
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
  ).toMatchInlineSnapshot(`"{ union: (string | number) }"`);
});
test("union", () => {
  expect(getSchemaBox({ oneOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `"(string | number)"`,
  );
});
test("string or number", () => {
  // StringOrNumber
  expect(getSchemaBox({ oneOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `"(string | number)"`,
  );
});
test("string and number", () => {
  expect(getSchemaBox({ allOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `"(string & number)"`,
  );
});
test("string and number allOf", () => {
  // StringAndNumber
  expect(getSchemaBox({ allOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `"(string & number)"`,
  );
});
test("string and number anyOf", () => {
  expect(getSchemaBox({ anyOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `"(string | number)"`,
  );
});
test("string and number maybe multiple", () => {
  // StringAndNumberMaybeMultiple
  expect(getSchemaBox({ anyOf: [{ type: "string" }, { type: "number" }] })).toMatchInlineSnapshot(
    `"(string | number)"`,
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
  ).toMatchInlineSnapshot(`"{ unionOrArrayOfUnion: (string | number) }"`);
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
  ).toMatchInlineSnapshot(`"{ intersection: (string & number) }"`);
});
test("string enum", () => {
  expect(getSchemaBox({ type: "string", enum: ["aaa", "bbb", "ccc"] })).toMatchInlineSnapshot(
    `"("aaa" | "bbb" | "ccc")"`,
  );
});
test("number enum", () => {
  expect(getSchemaBox({ type: "number", enum: [1, 2, 3] })).toMatchInlineSnapshot(`"(1 | 2 | 3)"`);
});
test("number enum - single", () => {
  expect(getSchemaBox({ type: "number", enum: [1] })).toMatchInlineSnapshot(`"1"`);
});
test("enum", () => {
  expect(getSchemaBox({ enum: ["red", "amber", "green", null, 42, true] })).toMatchInlineSnapshot(
    `"("red" | "amber" | "green" | null | 42 | true)"`,
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
    `"{ members: ({ id: string, firstName?: ((string | null) | undefined), lastName?: ((string | null) | undefined), email: string, profilePictureURL?: ((string | null) | undefined) })[] }"`,
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
    expect(printTraversable(openApiSchemaToTs({ schema: schemas["Root"]!, ctx }))).toMatchInlineSnapshot(
      `"{ str: string, nb: number, nested: Nested }"`,
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
    expect(printTraversable(openApiSchemaToTs({ schema: schemas["Extends"]!, ctx }))).toMatchInlineSnapshot(
      `"(Base & { str: string, nb?: (number | undefined) })"`,
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
    expect(printTraversable(openApiSchemaToTs({ schema: schemas["Root2"]!, ctx }))).toMatchInlineSnapshot(
      `"{ str: string, nb: number, nested: Nested2 }"`,
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

    expect(printTraversable(openApiSchemaToTs({ schema: schemas["Root3"]!, ctx }))).toMatchInlineSnapshot(
      `"{ str: string, nb: number, nested: Nested3, arrayOfNested: (Nested3)[] }"`,
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

    expect(printTraversable(result)).toMatchInlineSnapshot(
      `"{ str: string, nb: number, self: Root4, nested: Nested4, arrayOfSelf: (Root4)[] }"`,
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

    expect(printTraversable(result)).toMatchInlineSnapshot(`"{ recursive: User, basic: number }"`);
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

    expect(printTraversable(result)).toMatchInlineSnapshot(
      `"{ user: (User | Member), users: ((User | Member))[], basic: number }"`,
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

    expect(printTraversable(result)).toMatchInlineSnapshot(`"{ name: (string | null) }"`);
  });
});
