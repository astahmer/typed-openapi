/**
 * Regression coverage for GitHub issues listed in plans/FOLLOWUPS.md.
 * Do not comment on GitHub from here — close via PR description (`Closes #N`) when shipping.
 */
import { describe, expect, test } from "vitest";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { z } from "zod";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile } from "../src/generator.ts";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";
import { zodAdapter } from "../src/runtimes/zod/index.ts";
import { objectKey } from "../src/runtimes/shared.ts";

const require = createRequire(import.meta.url);
const tscBin = require.resolve("typescript/bin/tsc");
const irCtx = { getRefName: (r: string) => r.replace(/^.*\//, "") };

const minimalDoc = (paths: OpenAPIObject["paths"], schemas?: Record<string, unknown>): OpenAPIObject =>
  ({
    openapi: "3.0.3",
    info: { title: "t", version: "1" },
    paths,
    ...(schemas ? { components: { schemas } } : {}),
  }) as OpenAPIObject;

describe("GitHub issue regressions", () => {
  test("#93 Support Zod V4 — z.record(key, value)", () => {
    const node = openApiToIr(
      {
        type: "object",
        propertyNames: { type: "string" },
        additionalProperties: { type: "string" },
      },
      irCtx,
    );
    const src = zodAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    expect(src).toMatch(/z\.record\(\s*z\.string\(\)/);
    // Must pass both key + value schema (Zod v4)
    expect(src).not.toBe("z.record(z.string())");
    const schema = new Function("z", `return ${src}`)(z) as z.ZodType;
    expect(schema.parse({ a: "b" })).toEqual({ a: "b" });
  });

  test("#29 runtime client validates/parses responses when validate-side includes output", () => {
    const doc = minimalDoc({
      "/pets": {
        get: {
          operationId: "listPets",
          responses: {
            "200": {
              description: "ok",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    required: ["name"],
                    properties: { name: { type: "string" } },
                  },
                },
              },
            },
          },
        },
      },
    });
    const ctx = mapOpenApiEndpoints(doc);
    const file = generateFile({ ...ctx, runtime: "zod", includeClient: true, validateSide: "both" });
    expect(file).toContain("runValidate");
    expect(file).toContain('side: "output"');
    expect(file).toContain("shouldValidateOutput");
  });

  test("#26 multi-file OpenAPI via SwaggerParser.bundle", async () => {
    const openApiDoc = (await SwaggerParser.bundle("./tests/samples/multi-file/main.yaml")) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(openApiDoc);
    expect(() => generateFile({ ...ctx, runtime: "zod", includeClient: true })).not.toThrow();
    const file = generateFile({ ...ctx, runtime: "zod", includeClient: true });
    expect(file).toMatch(/Pet|listPets|list_pets|get_ListPets/i);
    expect(file).toContain("z.object");
  });

  test("#61 @ in property key is quoted", () => {
    expect(objectKey("@name")).toBe('"@name"');
    const node = openApiToIr(
      {
        type: "object",
        properties: {
          id: { type: "string" },
          "@name": { type: "string" },
        },
      },
      irCtx,
    );
    const src = zodAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    expect(src).toContain('"@name"');
    expect(src).not.toMatch(/[^"]@name:/);
    expect(() => new Function("z", `return ${src}`)(z)).not.toThrow();
  });

  test("#114 Typebox UParams", () => {
    const doc = minimalDoc({
      "/pet/findByStatus": {
        get: {
          operationId: "findByStatus",
          parameters: [
            {
              name: "status",
              in: "query",
              required: false,
              schema: { type: "string", enum: ["available", "pending", "sold"] },
            },
          ],
          responses: { "200": { description: "ok" } },
        },
      },
    });
    const ctx = mapOpenApiEndpoints(doc);
    const file = generateFile({ ...ctx, runtime: "typebox", includeClient: true });
    expect(file).toContain("type InferSchemaInput<T> = InferSchemaValue<T>;");
    expect(file).toContain("parameters: { query: Type.Optional(Type.Partial(Type.Object(");
    expect(file).toContain("InferSchemaInput<UParams>");
  });

  test("#32 partial query params make the whole config optional", () => {
    const doc = minimalDoc({
      "/pet/findByStatus": {
        get: {
          operationId: "findByStatus",
          parameters: [
            {
              name: "status",
              in: "query",
              required: false,
              schema: { type: "string", enum: ["available", "pending", "sold"] },
            },
          ],
          responses: { "200": { description: "ok" } },
        },
      },
    });
    const ctx = mapOpenApiEndpoints(doc);
    const none = generateFile({ ...ctx, runtime: "none", includeClient: true });
    expect(none).toMatch(/query\?:\s*Partial</);

    const zod = generateFile({ ...ctx, runtime: "zod", includeClient: true });
    expect(zod).toContain(".partial().optional()");
  });

  test("#27 nested swagger definitions do not crash", async () => {
    const openApiDoc = (await SwaggerParser.bundle(
      "./tests/samples/github-issues/issue-27-nested-definitions.yaml",
    )) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(openApiDoc);
    expect(() => generateFile({ ...ctx, runtime: "none", includeClient: true })).not.toThrow();
    expect(() => generateFile({ ...ctx, runtime: "zod", includeClient: true })).not.toThrow();
  });

  test("#18 unknown/exotic schema types become unknown (no throw)", () => {
    const node = openApiToIr({ type: "fhirprimitiveextension" } as never, irCtx);
    expect(node.kind).toBe("unknown");
    const src = zodAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    expect(src).toBe("z.unknown()");
  });

  test("#62 Typia export", () => {
    const doc = minimalDoc(
      {
        "/pets": {
          get: {
            operationId: "listPets",
            responses: {
              "200": {
                description: "ok",
                content: { "application/json": { schema: { $ref: "#/components/schemas/Pet" } } },
              },
            },
          },
        },
      },
      {
        Pet: {
          type: "object",
          required: ["name"],
          properties: { name: { type: "string" } },
        },
      },
    );
    const ctx = mapOpenApiEndpoints(doc);
    const file = generateFile({ ...ctx, runtime: "typia", includeClient: false, schemaNaming: "always-name" });
    expect(file).toContain("export type Pet = { name: string };");
    expect(file).toContain("export const isPet = typia.createIs<Pet>();");
    expect(file).toContain("responses: { 200: isPet }");
  });

  test("#121 coerce number/boolean path params for Zod", () => {
    const doc = minimalDoc({
      "/users/{user_id}/is_active/{is_active}/version/{version}": {
        get: {
          operationId: "getUserFlag",
          parameters: [
            { name: "user_id", in: "path", required: true, schema: { type: "integer" } },
            { name: "is_active", in: "path", required: true, schema: { type: "boolean" } },
            { name: "version", in: "path", required: true, schema: { type: "number" } },
          ],
          responses: { "200": { description: "ok" } },
        },
      },
    });
    const ctx = mapOpenApiEndpoints(doc);
    const file = generateFile({ ...ctx, runtime: "zod", includeClient: true, coerce: true });
    expect(file).toContain("z.coerce.number().int()");
    expect(file).toContain("z.coerce.boolean()");
    expect(file).toContain("z.coerce.number()");
  });

  test("#34 OAS default values on zod schemas", () => {
    const doc = minimalDoc({
      "/items": {
        get: {
          operationId: "listItems",
          parameters: [
            { name: "test_no_default", in: "query", schema: { type: "string" } },
            {
              name: "test_with_default",
              in: "query",
              schema: { type: "string", default: "hello world" },
            },
          ],
          responses: { "200": { description: "ok" } },
        },
      },
    });
    const ctx = mapOpenApiEndpoints(doc);
    const file = generateFile({ ...ctx, runtime: "zod", includeClient: true });
    expect(file).toContain('.default("hello world")');
  });

  test("#46 cookie parameters are mapped", () => {
    const doc = minimalDoc({
      "/v1/testUserData/{locale}": {
        get: {
          operationId: "getTestUserData",
          parameters: [
            {
              name: "AUTH_TOKEN",
              in: "cookie",
              content: { "*/*": { schema: { type: "string" } } },
            },
            { name: "locale", in: "path", required: true, schema: { type: "string" } },
          ],
          responses: { "200": { description: "ok" } },
        },
      },
    });
    const ctx = mapOpenApiEndpoints(doc);
    const file = generateFile({ ...ctx, runtime: "zod", includeClient: true });
    expect(file).toContain("cookie:");
    expect(file).toContain("AUTH_TOKEN");
    expect(file).toContain("encodeCookies");
  });

  test("#91 FetcherResponse avoids DOM Response dependency", () => {
    const doc = minimalDoc({
      "/ping": {
        get: {
          operationId: "ping",
          responses: { "200": { description: "ok" } },
        },
      },
    });
    const ctx = mapOpenApiEndpoints(doc);
    const file = generateFile({ ...ctx, runtime: "none", includeClient: true });
    expect(file).toContain("export interface FetcherResponse");
    expect(file).not.toMatch(/:\s*Response\b/);
    expect(file).toContain("FetcherResponse");
  });

  test("#32 + #91 typecheck: optional query call + FetcherResponse under node types", () => {
    const doc = minimalDoc({
      "/pet/findByStatus": {
        get: {
          operationId: "findByStatus",
          parameters: [
            {
              name: "status",
              in: "query",
              required: false,
              schema: { type: "string", enum: ["available", "pending", "sold"] },
            },
          ],
          responses: {
            "200": {
              description: "ok",
              content: { "application/json": { schema: { type: "array", items: { type: "string" } } } },
            },
          },
        },
      },
    });
    const ctx = mapOpenApiEndpoints(doc);
    const file = generateFile({ ...ctx, runtime: "none", includeClient: true });

    const dir = join(__dirname, "../tmp/github-issues-typecheck");
    rmSync(dir, { recursive: true, force: true });
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "client.ts"), file);
    writeFileSync(
      join(dir, "usage.ts"),
      `
import { createApiClient, type Fetcher, type FetcherResponse } from "./client";

const response: FetcherResponse = {
  ok: true,
  status: 200,
  statusText: "OK",
  headers: { get: () => null },
  json: async () => [],
  text: async () => "",
  arrayBuffer: async () => new ArrayBuffer(0),
  clone: () => response,
};

const fetcher: Fetcher = {
  fetch: async () => response,
};

const api = createApiClient(fetcher);
// Must compile with zero args after path (#32)
void api.get("/pet/findByStatus");
`,
    );
    writeFileSync(
      join(dir, "tsconfig.json"),
      JSON.stringify({
        compilerOptions: {
          strict: true,
          noEmit: true,
          skipLibCheck: true,
          module: "ESNext",
          moduleResolution: "bundler",
          target: "ES2022",
          // DOM for URL/Headers/RequestInit used by generated client; #91 is about Response specifically
          lib: ["ES2022", "DOM"],
          types: [],
          ignoreDeprecations: "6.0",
        },
        include: ["*.ts"],
      }),
    );

    try {
      execFileSync(process.execPath, [tscBin, "-p", dir, "--pretty", "false"], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
      });
    } catch (err: any) {
      expect.fail(`tsc failed:\n${err.stdout ?? ""}${err.stderr ?? ""}`);
    }
  });
});
