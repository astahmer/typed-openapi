import { describe, expect, test } from "vitest";
import { Effect } from "effect";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile } from "../src/generator.ts";

describe("response media type mapping", () => {
  test("maps text and octet-stream response schemas instead of dropping them", () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "response media types", version: "1" },
      paths: {
        "/text": {
          get: {
            operationId: "getText",
            responses: {
              "200": {
                description: "text",
                content: { "text/plain": { schema: { type: "string" } } },
              },
            },
          },
        },
        "/file": {
          get: {
            operationId: "getFile",
            responses: {
              "200": {
                description: "file",
                content: {
                  "application/octet-stream": { schema: { type: "string", format: "binary" } },
                },
              },
            },
          },
        },
      },
    } satisfies OpenAPIObject;

    const ctx = mapOpenApiEndpoints(doc);
    expect(ctx.endpointList[0]?.responses?.["200"]).toMatchObject({ kind: "string" });
    expect(ctx.endpointList[1]?.responses?.["200"]).toMatchObject({ kind: "binary" });

    const generated = generateFile({ ...ctx, runtime: "none", includeClient: false });
    expect(generated).toMatch(/responses:\s*\{\s*200:\s*string/);
    expect(generated).toMatch(/responses:\s*\{\s*200:\s*Blob/);
  });

  test("effect client parses octet-stream responses as Blob", async () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "binary response", version: "1" },
      paths: {
        "/file": {
          get: {
            operationId: "getFile",
            responses: {
              "200": {
                description: "file",
                content: {
                  "application/octet-stream": { schema: { type: "string", format: "binary" } },
                },
              },
            },
          },
        },
      },
    } satisfies OpenAPIObject;
    const source = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "none", client: "effect" });
    const directory = join(__dirname, "tmp/binary-response");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "client.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      createEffectApiClient: (fetcher: unknown, baseUrl: string) => { get: (path: string) => Effect.Effect<unknown> };
    };
    const api = module.createEffectApiClient(
      {
        fetch: async () =>
          new Response(new Uint8Array([1, 2, 3]), {
            status: 200,
            headers: { "content-type": "application/octet-stream" },
          }),
      },
      "http://example.com",
    );

    const result = await Effect.runPromise(api.get("/file"));
    expect(result).toBeInstanceOf(Blob);
    expect([...new Uint8Array(await (result as Blob).arrayBuffer())]).toEqual([1, 2, 3]);
  });

  test("matches media types case-insensitively for request bodies and SSE", () => {
    const doc = {
      openapi: "3.1.0",
      info: { title: "case-insensitive media types", version: "1" },
      paths: {
        "/upload": {
          post: {
            operationId: "upload",
            requestBody: {
              required: true,
              content: { "APPLICATION/JSON": { schema: { type: "object", properties: { ok: { type: "boolean" } } } } },
            },
            responses: { "204": { description: "ok" } },
          },
        },
        "/events": {
          get: {
            operationId: "events",
            responses: {
              "200": { description: "events", content: { "TEXT/EVENT-STREAM": { schema: { type: "string" } } } },
            },
          },
        },
      },
    } satisfies OpenAPIObject;

    const { endpointList } = mapOpenApiEndpoints(doc);
    expect(endpointList[0]?.requestFormat).toBe("json");
    expect(endpointList[0]?.parameters?.body).toMatchObject({ kind: "object" });
    expect(endpointList[1]?.responseFormat).toBe("sse");
    expect(endpointList[1]?.responses?.["200"]).toMatchObject({ kind: "stream" });
  });
});
