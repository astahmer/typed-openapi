import { describe, expect, test } from "vitest";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import { buildIrToTsOptions, irToTs } from "../src/schema-ir/ir-to-ts.ts";
import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { getRuntimeAdapter } from "../src/runtimes/registry.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";

const irCtx = { getRefName: (ref: string) => ref.replace("#/components/schemas/", "") };
const require = createRequire(import.meta.url);
const tscBin = require.resolve("typescript/bin/tsc");
const tmp = join(__dirname, "../tmp/const-circular-tests");

describe("JSON Schema const → literal", () => {
  test("buildIrToTsOptions omits undefined transform flags", () => {
    expect(buildIrToTsOptions({ prefixRefsWithSchemas: false })).toEqual({
      prefixRefsWithSchemas: false,
    });
    expect(
      buildIrToTsOptions({
        prefixRefsWithSchemas: false,
        transformDates: undefined,
        transformBigInt: true,
      }),
    ).toEqual({ prefixRefsWithSchemas: false, transformBigInt: true });
  });

  test("openApiToIr maps const to literal kind", () => {
    const node = openApiToIr({ type: "string", const: "success" }, irCtx);
    expect(node).toEqual({ kind: "literal", value: "success", meta: {} });
    expect(irToTs(node)).toBe('"success"');
  });

  test("const works for number and boolean", () => {
    expect(openApiToIr({ type: "integer", const: 42 }, irCtx)).toMatchObject({
      kind: "literal",
      value: 42,
    });
    expect(openApiToIr({ type: "boolean", const: true }, irCtx)).toMatchObject({
      kind: "literal",
      value: true,
    });
    expect(openApiToIr({ const: null }, irCtx)).toMatchObject({ kind: "null" });
  });

  test("const object/array become tuple/object literals", () => {
    const obj = openApiToIr({ const: { a: 1, b: "x" } }, irCtx);
    expect(obj.kind).toBe("object");
    if (obj.kind === "object") {
      expect(irToTs(obj)).toContain("a: 1");
      expect(irToTs(obj)).toContain('b: "x"');
    }
    const arr = openApiToIr({ const: ["a", 2] }, irCtx);
    expect(arr.kind).toBe("tuple");
    expect(irToTs(arr)).toBe('["a", 2]');
  });

  test("mixed enum preserves literal types (no String coerce / never)", () => {
    const mixed = openApiToIr({ type: "string", enum: ["a", 1] }, irCtx);
    expect(mixed.kind).toBe("enum");
    if (mixed.kind === "enum") {
      expect(mixed.values).toEqual(["a", 1]);
    }
    expect(irToTs(mixed)).toBe('("a" | 1)');

    const numMixed = openApiToIr({ type: "number", enum: [1, "x"] }, irCtx);
    expect(numMixed.kind).toBe("enum");
    if (numMixed.kind === "enum") {
      expect(numMixed.values).toEqual([1, "x"]);
    }
    expect(irToTs(numMixed)).toBe('(1 | "x")');
  });

  test("const wins over plain type:string in generated client types", () => {
    const doc = {
      openapi: "3.1.0",
      info: { title: "t", version: "1" },
      paths: {
        "/ping": {
          get: {
            operationId: "ping",
            responses: {
              "200": {
                description: "ok",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      required: ["status"],
                      properties: {
                        status: { type: "string", const: "success" },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    } as OpenAPIObject;

    const file = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "none" });
    expect(file).toContain('status: "success"');
    expect(file).not.toMatch(/status:\s*string/);
  });

  test.each(["zod", "zod3", "valibot", "arktype", "typebox", "typia"] as const)(
    "%s runtime emits literal for const",
    (runtime) => {
      const adapter = getRuntimeAdapter(runtime);
      const ctx = createEmitCtx(resolveValidationPolicy("formats"), new Set());
      const node = openApiToIr({ type: "string", const: "success" }, irCtx);
      const expr = adapter.emitNode(node, ctx);
      expect(expr).toMatch(/success/);
      expect(expr.toLowerCase()).not.toMatch(/^z\.string\(\)$/);
    },
  );
});

describe("recursive JSON Schema types", () => {
  test("none-runtime: circular record/union emit interface and typecheck", { timeout: 60_000 }, () => {
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const doc = {
      openapi: "3.0.3",
      info: { title: "circular", version: "1" },
      components: {
        schemas: {
          Json: {
            oneOf: [
              { type: "string" },
              { type: "number" },
              { type: "boolean" },
              { $ref: "#/components/schemas/JsonObject" },
              { $ref: "#/components/schemas/JsonArray" },
            ],
          },
          JsonObject: {
            type: "object",
            additionalProperties: { $ref: "#/components/schemas/Json" },
          },
          JsonArray: {
            type: "array",
            items: { $ref: "#/components/schemas/Json" },
          },
        },
      },
      paths: {
        "/v": {
          get: {
            operationId: "getJson",
            responses: {
              "200": {
                description: "ok",
                content: {
                  "application/json": { schema: { $ref: "#/components/schemas/Json" } },
                },
              },
            },
          },
        },
      },
    } as OpenAPIObject;

    const file = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "none", schemasOnly: true });
    expect(file).toMatch(/export interface JsonObject \{ \[key: string\]: Json \}/);
    expect(file).toContain("export type Json =");
    expect(file).toContain("export type JsonArray = Array<Json>");

    writeFileSync(join(tmp, "client.ts"), file);
    writeFileSync(
      join(tmp, "tsconfig.json"),
      JSON.stringify({
        compilerOptions: {
          strict: true,
          noEmit: true,
          skipLibCheck: true,
          module: "ESNext",
          moduleResolution: "bundler",
          target: "ES2022",
          lib: ["ES2022", "DOM"],
          types: [],
        },
        include: ["client.ts"],
      }),
    );

    let out = "";
    try {
      execFileSync(process.execPath, [tscBin, "-p", tmp, "--pretty", "false"], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
      });
    } catch (err: any) {
      out = `${err.stdout ?? ""}${err.stderr ?? ""}`;
    }
    expect(out).not.toContain("error TS2456");
    expect(out).not.toMatch(/\berror TS\d+:/);
  });

  test("typia: recursive record emits interface (no TS2456)", () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "circular", version: "1" },
      components: {
        schemas: {
          Json: {
            oneOf: [
              { type: "string" },
              { type: "number" },
              { type: "boolean" },
              { $ref: "#/components/schemas/JsonObject" },
              { $ref: "#/components/schemas/JsonArray" },
            ],
          },
          JsonObject: {
            type: "object",
            additionalProperties: { $ref: "#/components/schemas/Json" },
          },
          JsonArray: {
            type: "array",
            items: { $ref: "#/components/schemas/Json" },
          },
        },
      },
      paths: {},
    } as OpenAPIObject;

    const file = generateFile({
      ...mapOpenApiEndpoints(doc),
      runtime: "typia",
      schemasOnly: true,
    });
    expect(file).toMatch(/export interface JsonObject \{ \[key: string\]: Json \}/);
    expect(file).toContain("export type Json =");
    expect(file).toContain("export const isJsonObject");
  });

  test.each(["zod", "zod3", "valibot", "effect", "effect3"] as const)(
    "%s: recursive schemas use explicit types (no z.infer circular any)",
    (runtime) => {
      const doc = {
        openapi: "3.0.3",
        info: { title: "circular", version: "1" },
        components: {
          schemas: {
            Json: {
              oneOf: [
                { type: "string" },
                { type: "number" },
                { type: "boolean" },
                { $ref: "#/components/schemas/JsonObject" },
                { $ref: "#/components/schemas/JsonArray" },
              ],
            },
            JsonObject: {
              type: "object",
              additionalProperties: { $ref: "#/components/schemas/Json" },
            },
            JsonArray: {
              type: "array",
              items: { $ref: "#/components/schemas/Json" },
            },
          },
        },
        paths: {},
      } as OpenAPIObject;

      const file = generateFile({
        ...mapOpenApiEndpoints(doc),
        runtime,
        schemasOnly: true,
      });
      expect(file).toMatch(/export interface JsonObject/);
      expect(file).toContain("export type Json =");
      expect(file).not.toMatch(/export type Json = z\.infer/);
      expect(file).not.toMatch(/export type Json = v\.InferOutput/);
      expect(file).not.toMatch(/export type Json = Schema\.Schema\.Type/);
      expect(file).not.toMatch(/export type Json = S\.Schema\.Type/);
      if (runtime === "zod" || runtime === "zod3") {
        expect(file).toContain("z.ZodType<Json>");
      }
      if (runtime === "valibot") {
        expect(file).toContain("v.GenericSchema<Json>");
      }
      if (runtime === "effect") {
        expect(file).toContain("Schema.Schema<Json>");
        expect(file).toContain("ReadonlyArray<Json>");
      }
      if (runtime === "effect3") {
        expect(file).toContain("S.Schema<Json>");
        expect(file).toContain("ReadonlyArray<Json>");
      }
    },
  );
});
