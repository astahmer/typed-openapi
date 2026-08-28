import { describe, expect, test } from "vitest";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { Type as TypeBox } from "@sinclair/typebox";
import { Value as TypeBoxValue } from "@sinclair/typebox/value";
import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";
import { typeboxAdapter } from "../src/runtimes/typebox/index.ts";
import { typiaAdapter } from "../src/runtimes/typia/index.ts";

const minimalDoc = (paths: OpenAPIObject["paths"], schemas?: Record<string, unknown>): OpenAPIObject =>
  ({
    openapi: "3.0.3",
    info: { title: "t", version: "1" },
    paths,
    ...(schemas ? { components: { schemas } } : {}),
  }) as OpenAPIObject;

describe("typebox and typia runtimes", () => {
  test("typebox emits Static-backed object schemas", () => {
    const doc = minimalDoc(
      {
        "/pets/{id}": {
          get: {
            operationId: "getPet",
            parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
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
          properties: {
            name: { type: "string" },
            age: { type: "integer", minimum: 0 },
          },
        },
      },
    );

    const file = generateFile({
      ...mapOpenApiEndpoints(doc),
      runtime: "typebox",
      includeClient: false,
      schemaNaming: "always-name",
    });
    expect(file).toContain('import { Type, type Static } from "@sinclair/typebox";');
    expect(file).toContain("export type Pet = Static<typeof Pet>;");
    expect(file).toContain("export const Pet = Type.Object(");
    expect(file).toContain("Type.Integer({ minimum: 0 })");
  });

  test("typia emits createIs guards and exported types", () => {
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

    const file = generateFile({
      ...mapOpenApiEndpoints(doc),
      runtime: "typia",
      includeClient: false,
      schemaNaming: "always-name",
    });
    expect(file).toContain("import typia");
    expect(file).toContain("export type Pet = { name: string };");
    expect(file).toContain("export const isPet = typia.createIs<Pet>();");
    expect(file).toContain("export const assertPet = typia.createAssert<Pet>();");
    expect(file).toContain("export const validatePet = typia.createValidate<Pet>();");
    expect(file).toContain("responses: { 200: isPet }");
  });

  test("typia preserves oneOf exclusivity in the emitted guard", () => {
    const node = openApiToIr(
      { oneOf: [{ type: "string" }, { type: "string", minLength: 2 }] },
      { getRefName: (ref) => ref },
    );
    const source = typiaAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));

    expect(source).toContain("filter(Boolean).length === 1");
  });

  test("binary schemas map to Blob in both runtimes", () => {
    const doc = minimalDoc({
      "/upload": {
        post: {
          operationId: "uploadBlob",
          requestBody: {
            required: true,
            content: { "application/octet-stream": { schema: { type: "string", format: "binary" } } },
          },
          responses: {
            "200": {
              description: "ok",
              content: { "application/octet-stream": { schema: { type: "string", format: "binary" } } },
            },
          },
        },
      },
    });

    const ctx = mapOpenApiEndpoints(doc);
    const typeboxFile = generateFile({ ...ctx, runtime: "typebox", includeClient: false });
    const typiaFile = generateFile({ ...ctx, runtime: "typia", includeClient: false });

    expect(typeboxFile).toContain('Type.Unsafe<Blob>({ type: "string", format: "binary" })');
    expect(typiaFile).toContain("typia.createIs<Blob>()");
  });

  test("typebox client helpers expose InferSchemaInput", () => {
    const doc = minimalDoc({
      "/pets": {
        get: {
          operationId: "listPets",
          parameters: [
            {
              name: "status",
              in: "query",
              required: false,
              schema: { type: "string", enum: ["available", "pending"] },
            },
          ],
          responses: { "200": { description: "ok" } },
        },
      },
    });

    const file = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "typebox", includeClient: true });
    expect(file).toContain("type InferSchemaInput<T> = OptionalUndefinedKeys<InferSchemaValueRaw<T>>;");
    expect(file).toContain("Type.Optional(Type.Partial(Type.Object({ status: Type.Union(");
  });

  test("typebox enforces not schemas at runtime", () => {
    const node = openApiToIr({ not: { type: "string" } }, { getRefName: (ref) => ref });
    const source = typeboxAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    const schema = new Function("Type", `return ${source}`)(TypeBox);

    expect(source).toContain("Type.Not(Type.String())");
    expect(TypeBoxValue.Check(schema, 42)).toBe(true);
    expect(TypeBoxValue.Check(schema, "not-allowed")).toBe(false);
  });
});
