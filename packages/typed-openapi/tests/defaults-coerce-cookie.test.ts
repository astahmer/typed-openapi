import { describe, expect, test } from "vitest";
import { z } from "zod";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import { stripReadWrite } from "../src/schema-ir/read-write.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";
import { zodAdapter } from "../src/runtimes/zod/index.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile } from "../src/generator.ts";

const irCtx = { getRefName: (r: string) => r.replace("#/components/schemas/", "") };

describe("schema defaults", () => {
  test("zod emits .default() from OAS default", () => {
    const node = openApiToIr({ type: "string", default: "hello world" }, irCtx);
    const src = zodAdapter.emitNode(node, createEmitCtx(resolveValidationPolicy("strict")));
    expect(src).toContain('.default("hello world")');
    const schema = new Function("z", `return ${src}`)(z) as z.ZodType;
    expect(schema.parse(undefined)).toBe("hello world");
    expect(schema.parse("x")).toBe("x");
  });
});

describe("coerce primitives", () => {
  test("zod path-style coerce accepts string numbers/bools", () => {
    const node = openApiToIr(
      {
        type: "object",
        required: ["id", "active", "version"],
        properties: {
          id: { type: "integer" },
          active: { type: "boolean" },
          version: { type: "number" },
        },
      },
      irCtx,
    );
    const ctx = createEmitCtx(resolveValidationPolicy("strict"), new Set(), { coercePrimitives: true });
    const src = zodAdapter.emitNode(node, ctx);
    expect(src).toContain("z.coerce.number().int()");
    expect(src).toContain("z.coerce.boolean()");
    expect(src).toContain("z.coerce.number()");
    const schema = new Function("z", `return ${src}`)(z) as z.ZodType;
    expect(schema.parse({ id: "42", active: "true", version: "1.5" })).toEqual({
      id: 42,
      active: true,
      version: 1.5,
    });
  });
});

describe("cookie parameters", () => {
  test("maps cookie params from schema and content", () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "t", version: "1" },
      paths: {
        "/v1/me": {
          get: {
            operationId: "getMe",
            parameters: [
              {
                name: "session",
                in: "cookie",
                required: true,
                schema: { type: "string" },
              },
              {
                name: "AUTH_TOKEN",
                in: "cookie",
                content: { "*/*": { schema: { type: "string" } } },
              },
            ],
            responses: { "200": { description: "ok" } },
          },
        },
      },
    } as OpenAPIObject;

    const { endpointList } = mapOpenApiEndpoints(doc);
    const ep = endpointList[0]!;
    expect(ep.parameters?.cookie).toBeDefined();
    const cookie = ep.parameters!.cookie!;
    expect(cookie.kind).toBe("object");
    if (cookie.kind === "object") {
      expect(Object.keys(cookie.properties)).toEqual(expect.arrayContaining(["session", "AUTH_TOKEN"]));
      expect(cookie.required).toContain("session");
    }

    const file = generateFile({ doc, refs: mapOpenApiEndpoints(doc).refs, endpointList, runtime: "none" });
    expect(file).toContain("cookie:");
  });
});

describe("readOnly / writeOnly", () => {
  test("strips readOnly from request and writeOnly from response", () => {
    const node = openApiToIr(
      {
        type: "object",
        properties: {
          id: { type: "string", readOnly: true },
          password: { type: "string", writeOnly: true },
          name: { type: "string" },
        },
        required: ["name"],
      },
      irCtx,
    );

    const request = stripReadWrite(node, "request");
    const response = stripReadWrite(node, "response");
    expect(request.kind).toBe("object");
    expect(response.kind).toBe("object");
    if (request.kind === "object" && response.kind === "object") {
      expect(Object.keys(request.properties)).toEqual(["password", "name"]);
      expect(Object.keys(response.properties)).toEqual(["id", "name"]);
    }
  });

  test("endpoint body/response apply strip", () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "t", version: "1" },
      paths: {
        "/users": {
          post: {
            operationId: "createUser",
            requestBody: {
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      id: { type: "string", readOnly: true },
                      name: { type: "string" },
                      password: { type: "string", writeOnly: true },
                    },
                  },
                },
              },
            },
            responses: {
              "200": {
                description: "ok",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        id: { type: "string", readOnly: true },
                        name: { type: "string" },
                        password: { type: "string", writeOnly: true },
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

    const { endpointList } = mapOpenApiEndpoints(doc);
    const ep = endpointList[0]!;
    expect(ep.parameters?.body?.kind).toBe("object");
    if (ep.parameters?.body?.kind === "object") {
      expect(Object.keys(ep.parameters.body.properties)).toEqual(["name", "password"]);
    }
    const res = ep.responses?.["200"];
    expect(res?.kind).toBe("object");
    if (res?.kind === "object") {
      expect(Object.keys(res.properties)).toEqual(["id", "name"]);
    }
  });
});

describe("ApiResponse + InferSchemaInput", () => {
  test("generated client exposes ApiResponse and InferSchemaInput", () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "t", version: "1" },
      paths: {
        "/ping": {
          get: {
            operationId: "ping",
            responses: { "200": { description: "ok" } },
          },
        },
      },
    } as OpenAPIObject;
    const mapped = mapOpenApiEndpoints(doc);
    const file = generateFile({ ...mapped, runtime: "zod" });
    expect(file).toContain("export interface ApiResponse");
    expect(file).toContain("type InferSchemaInput<T>");
    expect(file).toContain("InferSchemaInput<UParams>");
    expect(file).not.toMatch(/extends Omit<Response,/);
  });
});
