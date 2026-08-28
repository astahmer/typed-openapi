import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { describe, expect, test } from "vitest";
import { Schema } from "effect";
import * as LegacySchema from "@effect/schema/Schema";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../../src/map-openapi-endpoints.ts";
import { generateFile } from "../../src/generator.ts";
import { prettify } from "../../src/format.ts";

// https://github.com/astahmer/typed-openapi/issues/137 — effect-runtime codegen regressions:
//   Bug 1: `allOf: [$ref]` + sibling inline `enum` emitted `.mapFields(Struct.assign(...))`
//          on a `Schema.Literals` (which has no `.fields` / `.mapFields`).
//   Bug 2: interned default schemas were hoisted above component schemas, so referencing a
//          component in a default threw a temporal-dead-zone `ReferenceError` at module load.
//   Bugs 3–4: scalar and enum constraints in referenced `allOf` members were silently dropped.
//   Bug 5: object `allOf` members resolved through `StructWithRest` were treated as plain Structs.

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

const bug3Spec: OpenAPIObject = {
  openapi: "3.0.3",
  info: { title: "Bug 3 — narrowed allOf enum", version: "1.0.0" },
  paths: {},
  components: {
    schemas: {
      DayOfWeek: { type: "string", enum: ["Monday", "Tuesday"] },
      NarrowSchedule: {
        type: "object",
        properties: {
          day: {
            enum: ["Monday"],
            allOf: [{ $ref: "#/components/schemas/DayOfWeek" }],
          },
        },
      },
    },
  },
};

const bug4Spec: OpenAPIObject = {
  openapi: "3.0.3",
  info: { title: "Bug 4 — scalar allOf refs", version: "1.0.0" },
  paths: {},
  components: {
    schemas: {
      AnyString: { type: "string" },
      LongString: { type: "string", minLength: 2 },
      Combined: {
        allOf: [{ $ref: "#/components/schemas/AnyString" }, { $ref: "#/components/schemas/LongString" }],
      },
    },
  },
};

const bug5Spec: OpenAPIObject = {
  openapi: "3.0.3",
  info: { title: "Bug 5 — StructWithRest allOf", version: "1.0.0" },
  paths: {},
  components: {
    schemas: {
      OpenPayload: {
        type: "object",
        properties: { id: { type: "string" } },
        required: ["id"],
        additionalProperties: { type: "string" },
      },
      ExtendedPayload: {
        allOf: [
          { $ref: "#/components/schemas/OpenPayload" },
          { type: "object", properties: { extra: { type: "string" } }, required: ["extra"] },
        ],
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
    expect(output).toContain("DayOfWeek.check");

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

  test("Bug 2: effect3 also defers defaulted $refs past component declarations", async () => {
    const src = generateFile({ ...mapOpenApiEndpoints(bug2Spec), runtime: "effect3", schemasOnly: true });
    const output = await prettify(src);

    expect(output).toContain("S.suspend(() => S.Array(PathMapping))");

    const mod = await loadGenerated("bug2-effect3", src);
    const config = mod.Config as LegacySchema.Schema<unknown>;
    expect(LegacySchema.decodeUnknownSync(config)({})).toEqual({ path_mappings: [] });
  });

  test("Bug 3: narrowed enum in allOf remains enforced", async () => {
    const src = generateFile({ ...mapOpenApiEndpoints(bug3Spec), runtime: "effect", schemasOnly: true });
    const mod = await loadGenerated("bug3", src);
    const schedule = mod.NarrowSchedule as Schema.Schema<unknown>;

    expect(Schema.is(schedule)({ day: "Monday" })).toBe(true);
    expect(Schema.is(schedule)({ day: "Tuesday" })).toBe(false);
  });

  test("Bug 4: scalar component refs in allOf compose without mapFields", async () => {
    const src = generateFile({ ...mapOpenApiEndpoints(bug4Spec), runtime: "effect", schemasOnly: true });
    const mod = await loadGenerated("bug4", src);
    const combined = mod.Combined as Schema.Schema<unknown>;

    expect(Schema.is(combined)("ok")).toBe(true);
    expect(Schema.is(combined)("x")).toBe(false);
  });

  test("Bug 5: StructWithRest refs in allOf do not use Struct fields", async () => {
    const src = generateFile({ ...mapOpenApiEndpoints(bug5Spec), runtime: "effect", schemasOnly: true });
    const output = await prettify(src);
    expect(output).not.toContain("OpenPayload).fields");

    const mod = await loadGenerated("bug5", src);
    const extended = mod.ExtendedPayload as Schema.Schema<unknown>;
    expect(Schema.is(extended)({ id: "id", extra: "extra" })).toBe(true);
    expect(Schema.is(extended)({ id: "id", extra: 1 })).toBe(false);

    const src3 = generateFile({ ...mapOpenApiEndpoints(bug5Spec), runtime: "effect3", schemasOnly: true });
    const mod3 = await loadGenerated("bug5-effect3", src3);
    const extended3 = mod3.ExtendedPayload as LegacySchema.Schema<unknown>;
    expect(LegacySchema.is(extended3)({ id: "id", extra: "extra" })).toBe(true);
    expect(LegacySchema.is(extended3)({ id: "id", extra: 1 })).toBe(false);
  });
});
