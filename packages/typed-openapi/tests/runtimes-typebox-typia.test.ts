import { describe, expect, test } from "vitest";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";

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
    expect(file).toContain('import typia from "typia";');
    expect(file).toContain("export type Pet = { name: string };");
    expect(file).toContain("export const isPet = typia.createIs<Pet>();");
    expect(file).toContain("export const assertPet = typia.createAssert<Pet>();");
    expect(file).toContain("export const validatePet = typia.createValidate<Pet>();");
    expect(file).toContain("responses: { 200: isPet }");
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
    expect(file).toContain("type InferSchemaInput<T> = InferSchemaValue<T>;");
    expect(file).toContain("Type.Optional(Type.Partial(Type.Object({ status: Type.Union(");
  });
});
