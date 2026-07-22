import { describe, expect, test } from "vitest";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile } from "../src/generator.ts";
import { applySpecFilters } from "../src/filter-spec.ts";

const fixturePath = `${__dirname}/samples/filter-fixture.openapi.yaml`;

describe("spec filters + treeShakeSchemas", () => {
  test("endpointPatterns keep /pets paths and tree-shake drops unused schemas", async () => {
    const doc = (await SwaggerParser.parse(fixturePath)) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(doc);

    const filtered = applySpecFilters(ctx.endpointList, ctx.refs, {
      endpointPatterns: ["/pets"],
    });
    expect(filtered.treeShakeSchemas).toBe(true);
    expect(filtered.endpointList.every((e) => e.path.includes("/pets"))).toBe(true);
    expect(filtered.endpointList.some((e) => e.path.includes("/orders"))).toBe(false);
    expect([...filtered.keptSchemaNames!].sort()).toEqual(["Pet", "Tag"]);

    const withShake = generateFile({
      ...ctx,
      endpointPatterns: ["/pets"],
      schemasOnly: true,
      includeClient: false,
    });
    expect(withShake).toContain("export type Pet");
    expect(withShake).toContain("export type Tag");
    expect(withShake).not.toContain("export type Order");
    expect(withShake).not.toContain("export type User");

    const noShake = generateFile({
      ...ctx,
      endpointPatterns: ["/pets"],
      treeShakeSchemas: false,
      schemasOnly: true,
      includeClient: false,
    });
    expect(noShake).toContain("export type Order");
    expect(noShake).toContain("export type User");
  });

  test("schemaPatterns keep extra schemas while tree-shaking", async () => {
    const doc = (await SwaggerParser.parse(fixturePath)) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(doc);
    const src = generateFile({
      ...ctx,
      endpointPatterns: ["/pets"],
      schemaPatterns: ["^Order$"],
      schemasOnly: true,
      includeClient: false,
    });
    expect(src).toContain("export type Order");
    expect(src).toContain("export type Pet");
    expect(src).not.toContain("export type User");
  });

  test("filterEndpoints callback", async () => {
    const doc = (await SwaggerParser.parse(fixturePath)) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(doc);
    const src = generateFile({
      ...ctx,
      filterEndpoints: ({ method, path }) => method === "get" && path === "/pets/{id}",
      schemasOnly: false,
      includeClient: false,
    });
    expect(src).toContain("/pets/{id}");
    expect(src).not.toContain("/orders");
    expect(src).not.toContain("export type User");
  });

  test("invalid endpointPatterns regex throws a clear config error", async () => {
    const doc = (await SwaggerParser.parse(fixturePath)) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(doc);
    expect(() =>
      applySpecFilters(ctx.endpointList, ctx.refs, {
        endpointPatterns: ["[unterminated"],
      }),
    ).toThrow(/Invalid endpointPatterns\[0\] regex/);
  });

  test("tree-shake keeps schemas only referenced via OAS not", async () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "not-deps", version: "1.0.0" },
      paths: {
        "/item": {
          get: {
            operationId: "getItem",
            responses: {
              "200": {
                description: "ok",
                content: {
                  "application/json": {
                    schema: { $ref: "#/components/schemas/Item" },
                  },
                },
              },
            },
          },
        },
      },
      components: {
        schemas: {
          Forbidden: { type: "string", enum: ["nope"] },
          Item: {
            type: "object",
            properties: {
              name: { type: "string" },
            },
            not: { $ref: "#/components/schemas/Forbidden" },
          },
          Unused: { type: "string" },
        },
      },
    } as OpenAPIObject;

    const ctx = mapOpenApiEndpoints(doc);
    const filtered = applySpecFilters(ctx.endpointList, ctx.refs, {
      endpointPatterns: ["/item"],
    });
    expect([...filtered.keptSchemaNames!].sort()).toEqual(["Forbidden", "Item"]);

    const src = generateFile({
      ...ctx,
      endpointPatterns: ["/item"],
      schemasOnly: true,
      includeClient: false,
    });
    expect(src).toContain("export type Item");
    expect(src).toContain("export type Forbidden");
    expect(src).not.toContain("export type Unused");
  });
});
