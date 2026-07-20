import { describe, expect, test } from "vitest";
import { encodeRequestBody } from "../src/encode-request-body.ts";
import { generateDefaultFetcher } from "../src/default-fetcher.generator.ts";
import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import type { OpenAPIObject } from "openapi3-ts/oas31";

describe("encodeRequestBody", () => {
  test("json stringifies objects", () => {
    const encoded = encodeRequestBody("json", { a: 1 });
    expect(encoded.body).toBe('{"a":1}');
    expect(encoded.contentType).toBe("application/json");
  });

  test("form-data builds FormData from object fields", () => {
    const blob = new Blob(["hi"], { type: "text/plain" });
    const encoded = encodeRequestBody("form-data", { name: "x", file: blob, empty: null, tags: ["a", "b"] });
    expect(encoded.body).toBeInstanceOf(FormData);
    expect(encoded.contentType).toBeUndefined();
    const fd = encoded.body as FormData;
    expect(fd.get("name")).toBe("x");
    expect(fd.get("file")).toBeInstanceOf(Blob);
    expect(fd.getAll("tags")).toEqual(["a", "b"]);
    expect(fd.has("empty")).toBe(false);
  });

  test("form-data passes through FormData", () => {
    const fd = new FormData();
    fd.append("k", "v");
    expect(encodeRequestBody("form-data", fd).body).toBe(fd);
  });

  test("form-url builds URLSearchParams", () => {
    const encoded = encodeRequestBody("form-url", { q: "hi", n: [1, 2] });
    expect(encoded.body).toBeInstanceOf(URLSearchParams);
    expect(encoded.contentType).toBe("application/x-www-form-urlencoded");
    expect(String(encoded.body)).toBe("q=hi&n=1&n=2");
  });

  test("binary keeps Blob / bytes / string", () => {
    const blob = new Blob(["x"]);
    expect(encodeRequestBody("binary", blob)).toEqual({
      body: blob,
      contentType: "application/octet-stream",
    });
    expect(encodeRequestBody("binary", "raw")).toEqual({
      body: "raw",
      contentType: "application/octet-stream",
    });
    const bytes = new Uint8Array([1, 2]);
    expect(encodeRequestBody("binary", bytes).body).toBe(bytes);
  });

  test("text stringifies", () => {
    expect(encodeRequestBody("text", 42)).toEqual({ body: "42", contentType: "text/plain" });
  });
});

describe("default fetcher + client requestFormat wiring", () => {
  test("generateDefaultFetcher inlines encodeRequestBody and uses requestFormat", () => {
    const src = generateDefaultFetcher({ clientPath: "./client.ts" });
    expect(src).toContain("encodeRequestBody(input.requestFormat");
    expect(src).toContain('case "form-data"');
    expect(src).toContain('case "binary"');
    expect(src).toContain("type RequestFormat");
  });

  test("generated client passes requestFormat from endpointRequestFormats", () => {
    const openApiDoc = {
      openapi: "3.0.3",
      info: { title: "t", version: "1" },
      paths: {
        "/upload": {
          post: {
            operationId: "upload",
            requestBody: {
              content: {
                "multipart/form-data": {
                  schema: {
                    type: "object",
                    properties: { file: { type: "string", format: "binary" } },
                  },
                },
              },
            },
            responses: { "200": { description: "ok" } },
          },
        },
        "/raw": {
          post: {
            operationId: "raw",
            requestBody: {
              content: {
                "application/octet-stream": {
                  schema: { type: "string", format: "binary" },
                },
              },
            },
            responses: { "200": { description: "ok" } },
          },
        },
      },
    } satisfies OpenAPIObject;

    const ctx = mapOpenApiEndpoints(openApiDoc);
    const file = generateFile({ ...ctx, runtime: "none", includeClient: true });
    expect(file).toContain("// <EndpointRequestFormats>");
    expect(file).toContain('"/upload": "form-data"');
    expect(file).toContain('"/raw": "binary"');
    expect(file).toContain("requestFormat: endpointRequestFormats[method][path]");
    expect(file).toContain("export type RequestFormat");
  });
});
