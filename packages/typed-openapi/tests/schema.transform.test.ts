import prettier from "@prettier/sync";
import { canonicalizeRefName } from "@traversable/json-schema";
import * as vi from "vitest";

// Imported for the `toJsonSchema` method
import "@traversable/schema-to-json-schema/install";
// Imported for the `toType`
import "@traversable/schema-to-string/install";
// These packages are only imported for their `.toString` methods:
import { box } from "@traversable/typebox";
import { zx } from "@traversable/zod";
import { SchemaTransform } from "./schema.transform.exports.ts";

/**
 * Motivating issue:
 * https://github.com/traversable/schema/issues/456
 *
 * > [!NOTE]:
 * > Blame the sluggish test times on `@prettier/sync`
 */

const format = (src: string) => prettier.format(src, { parser: "typescript", semi: false, printWidth: 45 });

const schema = {
  $defs: {
    name: { type: "string" },
  },
  type: "object",
  required: ["children"],
  properties: {
    name: { type: "string" },
    children: {
      type: "array",
      items: { $ref: "#/$defs/name" },
    },
  },
} as const;

vi.describe("[JSON Schema -> TypeScript]", () => {
  vi.test("preserves refs", () => {
    const target = SchemaTransform.toTypeScript(schema, { canonicalizeRefName });

    const refs = Object.entries(target.refs).map(([ident, thunk]) => `type ${ident} = ${thunk()}`);

    vi.expect.soft(format([...refs, null, "type MyType = " + target.result].join("\n"))).toMatchInlineSnapshot(`
      "type Name = string

      type MyType = {
        name?: string
        children: Array<Name>
      }
      "
    `);
  });
});

vi.describe("[JSON Schema -> Zod]", () => {
  vi.test("preserves refs", () => {
    const target = SchemaTransform.toZod(schema, { canonicalizeRefName });

    const refs = Object.entries(target.refs).map(([ident, thunk]) => `const ${ident} = ${zx.toString(thunk())}`);

    vi.expect.soft(format([...refs, null, "const MySchema = " + zx.toString(target.result)].join("\n")))
      .toMatchInlineSnapshot(`
      "const Name = z.string()

      const MySchema = z.object({
        name: z.string().optional(),
        children: z.array(Name),
      })
      "
    `);
  });
});

vi.describe("[JSON Schema -> ArkType]", () => {
  vi.test("preserves refs", () => {
    const target = SchemaTransform.toArkType(schema, { canonicalizeRefName });
    const refs = Object.entries(target.refs).map(([ident, thunk]) => `const ${ident} = Type(${thunk()})`);

    vi.expect.soft(format([...refs, null, "const MySchema = " + target.result].join("\n"))).toMatchInlineSnapshot(`
      "const Name = Type("string")

      const MySchema = Type({
        "name?": "string",
        children: Type(Name, "[]"),
      })
      "
    `);
  });
});

vi.describe("[JSON Schema -> TypeBox]", () => {
  vi.test("preserves refs", () => {
    const target = SchemaTransform.toTypeBox(schema, { canonicalizeRefName });

    const refs = Object.entries(target.refs).map(([ident, thunk]) => `const ${ident} = ${box.toString(thunk())}`);

    vi.expect.soft(format([...refs, null, "const MySchema = " + box.toString(target.result)].join("\n")))
      .toMatchInlineSnapshot(`
      "const Name = T.String()

      const MySchema = T.Object({
        name: T.Optional(T.String()),
        children: T.Array(Name),
      })
      "
    `);
  });
});

vi.describe("[JSON Schema -> Traversable]", () => {
  vi.test("preserves refs", () => {
    const target = SchemaTransform.toTraversable(schema, { canonicalizeRefName });
    vi.expect(target.result.toType()).toMatchInlineSnapshot(
      `"{ 'name'?: (string | undefined), 'children': (Name)[] }"`,
    );

    vi.expect(target.result.toJsonSchema()).toMatchInlineSnapshot(
      `
      {
        "properties": {
          "children": {
            "items": {
              "$ref": "Name",
            },
            "type": "array",
          },
          "name": {
            "nullable": true,
            "type": "string",
          },
        },
        "required": [
          "children",
        ],
        "type": "object",
      }
    `,
    );

    const refs = Object.entries(target.refs).map(([ident, thunk]) => `const ${ident} = ${thunk()}`);

    vi.expect.soft(format([...refs, null, "const MySchema = " + target.result.toString()].join("\n")))
      .toMatchInlineSnapshot(`
      "const Name = t.string

      const MySchema = t.object({
        name: t.optional(t.string),
        children: t.array(Name),
      })
      "
    `);
  });
});
