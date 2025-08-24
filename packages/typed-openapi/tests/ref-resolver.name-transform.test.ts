import { createRefResolver } from "../src/ref-resolver.ts";
import { describe, it, expect } from "vitest";
import { tsFactory } from "../src/ts-factory.ts";

const openApiDoc = {
  openapi: "3.0.0",
  info: { title: "Test", version: "1.0.0" },
  components: {
    schemas: {
      "import": { type: "string" },
      "set": { type: "object", properties: { id: { type: "string" } } },
      "Record": { type: "number" },
      "normal": { type: "boolean" },
    },
  },
} as any;

describe("createRefResolver with NameTransformOptions", () => {
  it("applies transformSchemaName and avoids reserved words", () => {
    const resolver = createRefResolver(openApiDoc, tsFactory, {
      transformSchemaName: (name) => `X_${name}_X`,
    });
    const infos = Array.from(resolver.infos.values()).map(i => i.normalized);
    expect(infos).toMatchInlineSnapshot(`
      [
        "X_import_X",
        "X_set_X",
        "X_Record_X",
        "X_normal_X",
      ]
    `);
  });

  it("applies no transform and still avoids reserved words and invalid chars", () => {
    const resolver = createRefResolver(openApiDoc, tsFactory);
    const infos = Array.from(resolver.infos.values()).map(i => i.normalized);
    expect(infos).toMatchInlineSnapshot(`
      [
        "Schema_import",
        "Schema_set",
        "Schema_Record",
        "normal",
      ]
    `);
  });
});
