import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { describe, expect, test } from "vitest";
import { Schema } from "effect";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../../src/map-openapi-endpoints.ts";
import { generateFile } from "../../src/generator.ts";
import { prettify } from "../../src/format.ts";

// https://github.com/astahmer/typed-openapi/issues/137 — two effect-runtime codegen bugs:
//   Bug 1: `allOf: [$ref]` + sibling inline `enum` emitted `.mapFields(Struct.assign(...))`
//          on a `Schema.Literals` (which has no `.fields` / `.mapFields`).
//   Bug 2: interned default schemas were hoisted above component schemas, so referencing a
//          component in a default threw a temporal-dead-zone `ReferenceError` at module load.

const bug1Spec: OpenAPIObject = {
  openapi: "3.0.3",
  info: { title: "Bug 1 — enum allOf", version: "1.0.0" },
  paths: {},
  components: {
    schemas: {
      DayOfWeek: { type: "string", enum: ["Monday", "Tuesday", "Wednesday"] },
      Schedule: {
        type: "object",
        properties: {
          day: {
            enum: ["Monday", "Tuesday", "Wednesday"],
            allOf: [{ $ref: "#/components/schemas/DayOfWeek" }],
          },
        },
      },
    },
  },
};

const bug2Spec: OpenAPIObject = {
  openapi: "3.0.3",
  info: { title: "Bug 2 — default forward ref", version: "1.0.0" },
  paths: {},
  components: {
    schemas: {
      PathMapping: {
        type: "object",
        required: ["remote", "local"],
        properties: {
          remote: { type: "string" },
          local: { type: "string" },
        },
      },
      Config: {
        type: "object",
        properties: {
          path_mappings: {
            type: "array",
            items: { $ref: "#/components/schemas/PathMapping" },
            default: [],
          },
        },
      },
    },
  },
};

const outRoot = join(__dirname, "../tmp/issue-137");

/** Write a generated file to tmp and import it, so module-load errors (TDZ) surface. */
const loadGenerated = async (id: string, src: string) => {
  const dir = join(outRoot, id);
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "schemas.ts");
  writeFileSync(file, src);
  return import(pathToFileURL(file).href + `?t=${Date.now()}`);
};

describe("issue #137 — effect runtime codegen bugs", () => {
  test("Bug 1: enum + allOf ref does not emit mapFields on Schema.Literals", async () => {
    const src = generateFile({ ...mapOpenApiEndpoints(bug1Spec), runtime: "effect", schemasOnly: true });
    const output = await prettify(src);

    expect(output).not.toContain("mapFields");
    expect(output).not.toContain("Struct.assign");
    expect(output).not.toContain(".fields");
    expect(output).toContain("day: Schema.optional(DayOfWeek)");

    const mod = await loadGenerated("bug1", src);
    const schedule = mod.Schedule as Schema.Schema<unknown>;
    // The ref schema is used directly, so enum validation is preserved.
    expect(Schema.is(schedule)({ day: "Monday" })).toBe(true);
    expect(Schema.is(schedule)({ day: "Saturday" })).toBe(false);
  });

  test("Bug 2: default array schema defers $ref past component declaration (no TDZ)", async () => {
    const src = generateFile({ ...mapOpenApiEndpoints(bug2Spec), runtime: "effect", schemasOnly: true });
    const output = await prettify(src);

    expect(output).toContain("Schema.suspend(() => Schema.Array(PathMapping))");

    // Must not throw ReferenceError on import, and the default must decode.
    const mod = await loadGenerated("bug2", src);
    const config = mod.Config as Schema.Schema<unknown>;
    expect(Schema.decodeUnknownSync(config)({})).toEqual({ path_mappings: [] });
  });
});
