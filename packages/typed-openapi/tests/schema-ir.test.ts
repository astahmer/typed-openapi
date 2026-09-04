import { describe, expect, test } from "vitest";
import { irToTs } from "../src/schema-ir/ir-to-ts.ts";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import type { SchemaNode } from "../src/schema-ir/types.ts";

const stringNode = (meta: SchemaNode["meta"] = {}): SchemaNode => ({
  kind: "string",
  constraints: {},
  meta,
});

const objectNode = (properties: Record<string, SchemaNode>): SchemaNode => ({
  kind: "object",
  properties,
  required: Object.keys(properties),
  additionalProperties: false,
  constraints: {},
  meta: {},
  partial: false,
});

describe("schema IR TypeScript rendering", () => {
  test("renders deprecated properties with descriptions", () => {
    expect(
      irToTs(
        objectNode({
          oldField: stringNode({ description: "Use newField instead.", deprecated: true }),
          newField: stringNode(),
        }),
        { jsdoc: true },
      ),
    ).toBe(`{
  /**
   * Use newField instead.
   * @deprecated
   */
  oldField: string;
  newField: string;
}`);
  });

  test("renders deprecated properties without descriptions", () => {
    expect(irToTs(objectNode({ oldField: stringNode({ deprecated: true }) }), { jsdoc: true })).toBe(`{
  /**
   * @deprecated
   */
  oldField: string;
}`);
  });

  test("does not render deprecation metadata when JSDoc is disabled", () => {
    expect(irToTs(objectNode({ oldField: stringNode({ deprecated: true }) }))).toBe("{ oldField: string }");
  });

  test("renders partial open objects with Record", () => {
    expect(
      irToTs(
        openApiToIr(
          { type: "object", properties: { id: { type: "number" } }, additionalProperties: true },
          { getRefName: (ref) => ref },
        ),
      ),
    ).toBe("(Partial<{ id: number }> & Record<string, unknown>)");
  });

  test("does not add Record on closed partial objects", () => {
    expect(
      irToTs(openApiToIr({ type: "object", properties: { id: { type: "number" } } }, { getRefName: (ref) => ref })),
    ).toBe("Partial<{ id: number }>");
  });
});
