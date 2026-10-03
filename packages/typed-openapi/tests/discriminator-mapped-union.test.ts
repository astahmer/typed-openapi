import { mkdirSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { describe, expect, test } from "vitest";
import { z } from "zod";
import { z as z3 } from "zod/v3";
import { generateFile, generateRuntimeTypeDeclarations } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";
import { zodAdapter } from "../src/runtimes/zod/index.ts";
import { zod3Adapter } from "../src/runtimes/zod3/index.ts";

// Reduced from Cloudflare's workers_export_config mapping to a nested oneOf.
const spec: OpenAPIObject = {
  openapi: "3.1.0",
  info: { title: "Mapped union", version: "1" },
  paths: {
    "/exports": {
      get: {
        responses: {
          "200": {
            description: "Export config",
            content: { "application/json": { schema: { $ref: "#/components/schemas/ExportConfig" } } },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Created: {
        type: "object",
        required: ["type", "storage"],
        properties: { type: { const: "durable-object" }, storage: { type: "string" } },
        additionalProperties: true,
      },
      Deleted: {
        type: "object",
        required: ["type", "deleted"],
        properties: { type: { const: "durable-object" }, deleted: { const: true } },
        additionalProperties: true,
      },
      Variants: { oneOf: [{ $ref: "#/components/schemas/Created" }, { $ref: "#/components/schemas/Deleted" }] },
      Worker: {
        type: "object",
        required: ["type"],
        properties: { type: { const: "worker" } },
        additionalProperties: false,
      },
      ExportConfig: {
        oneOf: [{ $ref: "#/components/schemas/Variants" }, { $ref: "#/components/schemas/Worker" }],
        discriminator: {
          propertyName: "type",
          mapping: { "durable-object": "#/components/schemas/Variants", worker: "#/components/schemas/Worker" },
        },
      },
      InvalidName: {
        type: "object",
        required: ["code"],
        properties: { code: { type: "integer", enum: [10016] } },
      },
      OtherError: {
        type: "object",
        required: ["code"],
        properties: { code: { type: "integer", enum: [10017] } },
      },
      ErrorResponse: {
        oneOf: [{ $ref: "#/components/schemas/InvalidName" }, { $ref: "#/components/schemas/OtherError" }],
        discriminator: {
          propertyName: "code",
          mapping: { "10016": "#/components/schemas/InvalidName", "10017": "#/components/schemas/OtherError" },
        },
      },
      FirstCodes: {
        type: "object",
        required: ["code"],
        properties: { code: { type: "integer", enum: [1, 2] } },
      },
      OtherCodes: {
        type: "object",
        required: ["code"],
        properties: { code: { type: "integer", enum: [3, 4] } },
      },
      CodeGroups: {
        oneOf: [{ $ref: "#/components/schemas/FirstCodes" }, { $ref: "#/components/schemas/OtherCodes" }],
        discriminator: {
          propertyName: "code",
          mapping: {
            "1": "#/components/schemas/FirstCodes",
            "2": "#/components/schemas/FirstCodes",
            "3": "#/components/schemas/OtherCodes",
            "4": "#/components/schemas/OtherCodes",
          },
        },
      },
      NullableExport: {
        oneOf: [{ $ref: "#/components/schemas/Variants" }, { $ref: "#/components/schemas/Worker" }, { type: "null" }],
        discriminator: {
          propertyName: "type",
          mapping: { "durable-object": "#/components/schemas/Variants", worker: "#/components/schemas/Worker" },
        },
      },
      Timed: {
        type: "object",
        required: ["kind", "created"],
        properties: { kind: { const: "timed" }, created: { type: "string", format: "date-time" } },
      },
      Untimed: {
        type: "object",
        required: ["kind"],
        properties: { kind: { const: "untimed" } },
      },
      Event: {
        oneOf: [{ $ref: "#/components/schemas/Timed" }, { $ref: "#/components/schemas/Untimed" }],
        discriminator: {
          propertyName: "kind",
          mapping: { timed: "#/components/schemas/Timed", untimed: "#/components/schemas/Untimed" },
        },
      },
    },
  },
};

const runtimeSchema = z.union([z.instanceof(z.ZodType), z.instanceof(z3.ZodType)]);

describe("discriminator mappings to non-object schemas", () => {
  test.each([
    ["zod", zodAdapter, z],
    ["zod3", zod3Adapter, z3],
  ] as const)("%s retains nested oneOf validation", (_runtime, adapter, runtime) => {
    const irCtx = { getRefName: (ref: string) => ref.split("/").pop() ?? ref };
    const nodes = new Map(
      Object.entries(spec.components?.schemas ?? {}).map(([name, schema]) => [name, openApiToIr(schema, irCtx)]),
    );
    const node = nodes.get("ExportConfig");
    if (!node) throw new Error("Missing ExportConfig fixture");
    const ctx = createEmitCtx(resolveValidationPolicy("strict"), new Set(), { schemaNodes: nodes });
    const declarations = [...nodes]
      .filter(([name]) => name !== "ExportConfig")
      .map(([name, schema]) => `const ${name} = ${adapter.emitNode(schema, ctx)};`);
    const source = `${declarations.join("; ")}; return ${adapter.emitNode(node, ctx)};`;
    const schema = runtimeSchema.parse(new Function("z", source)(runtime));

    expect(schema.safeParse({ type: "durable-object", storage: "sqlite" }).success).toBe(true);
    expect(schema.safeParse({ type: "durable-object", deleted: true }).success).toBe(true);
    expect(schema.safeParse({ type: "worker" }).success).toBe(true);
    expect(schema.safeParse({ type: "durable-object", storage: "sqlite", deleted: true }).success).toBe(false);
    expect(schema.safeParse({ type: "durable-object", storage: 1 }).success).toBe(false);
    expect(schema.safeParse({ type: "unknown" }).success).toBe(false);
    expect(schema.safeParse({ storage: "sqlite" }).success).toBe(false);
    expect(schema.safeParse({ type: "worker", extra: true }).success).toBe(false);
  });

  test.each([
    ["zod", false],
    ["zod", true],
    ["zod3", false],
    ["zod3", true],
  ] as const)("%s generated client validates and typechecks (sidecar: %s)", async (runtime, sidecar) => {
    const directory = join(__dirname, "../tmp/discriminator-mapped-union", `${runtime}-${sidecar}`);
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "client.ts");
    const options = {
      ...mapOpenApiEndpoints(spec),
      runtime,
      validation: "strict" as const,
      validateSide: "output" as const,
      transformDates: true,
      ...(sidecar ? { runtimeTypeDeclarations: "./client.types.js" } : {}),
    };
    const source = generateFile(options);
    if (sidecar) writeFileSync(join(directory, "client.types.d.ts"), generateRuntimeTypeDeclarations(options));
    writeFileSync(file, runtime === "zod3" ? source.replace('from "zod"', 'from "zod/v3"') : source);
    writeFileSync(
      join(directory, "usage.ts"),
      `
import type { ExportConfig, ErrorResponse } from "./client";
const config: ExportConfig = { type: "durable-object", storage: "sqlite" };
const error: ErrorResponse = { code: 10016 };
// @ts-expect-error The schema requires numeric error codes.
const invalidError: ErrorResponse = { code: "10016" };
// @ts-expect-error The schema requires a discriminator.
const missingType: ExportConfig = { storage: "sqlite" };
`,
    );
    const tsc = createRequire(import.meta.url).resolve("typescript/bin/tsc");
    const result = spawnSync(
      process.execPath,
      [
        tsc,
        "--ignoreConfig",
        "--noEmit",
        "--strict",
        "--skipLibCheck",
        "--target",
        "ES2022",
        "--module",
        "ESNext",
        "--moduleResolution",
        "bundler",
        join(directory, "usage.ts"),
      ],
      { encoding: "utf8" },
    );
    expect(result.status, `${result.stdout}${result.stderr}`).toBe(0);
    const module = await import(pathToFileURL(file).href);
    const client = module.createApiClient(
      {
        fetch: async () => Response.json({ type: "durable-object", storage: "sqlite" }),
      },
      "https://example.test",
    );
    await expect(client.get("/exports")).resolves.toEqual({ type: "durable-object", storage: "sqlite" });
    const invalidClient = module.createApiClient(
      {
        fetch: async () => Response.json({ type: "durable-object", storage: 1 }),
      },
      "https://example.test",
    );
    await expect(invalidClient.get("/exports")).rejects.toThrow();
    const errors = runtimeSchema.parse(module.ErrorResponse);
    expect(errors.safeParse({ code: 10016 }).success).toBe(true);
    expect(errors.safeParse({ code: 10017 }).success).toBe(true);
    expect(errors.safeParse({ code: "10016" }).success).toBe(false);
    expect(errors.safeParse({ code: 999 }).success).toBe(false);
    expect(errors.safeParse({}).success).toBe(false);
    const groups = runtimeSchema.parse(module.CodeGroups);
    for (const code of [1, 2, 3, 4]) expect(groups.safeParse({ code }).success).toBe(true);
    for (const code of [0, 5, "1", true]) expect(groups.safeParse({ code }).success).toBe(false);
    const nullable = runtimeSchema.parse(module.NullableExport);
    expect(nullable.safeParse(null).success).toBe(true);
    expect(nullable.safeParse({ type: "worker" }).success).toBe(true);
    expect(nullable.safeParse({ type: "unknown" }).success).toBe(false);
    const event = runtimeSchema.parse(module.Event);
    expect(event.parse({ kind: "timed", created: "2026-10-03T00:00:00Z" })).toEqual({
      kind: "timed",
      created: new Date("2026-10-03T00:00:00Z"),
    });
    expect(event.safeParse({ kind: "timed", created: "invalid" }).success).toBe(false);
    expect(source).toContain('z.discriminatedUnion("kind", [Timed, Untimed])');
  });
});
