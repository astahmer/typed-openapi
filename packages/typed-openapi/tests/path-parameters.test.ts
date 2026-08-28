import { describe, expect, test } from "vitest";
import { Effect } from "effect";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";

describe("generated path parameters", () => {
  test("replaces hyphenated names and encodes path segments", async () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "path params", version: "1" },
      paths: {
        "/files/{file-name}": {
          get: {
            operationId: "getFile",
            parameters: [{ name: "file-name", in: "path", required: true, schema: { type: "string" } }],
            responses: { "200": { description: "ok" } },
          },
        },
      },
    } satisfies OpenAPIObject;
    const source = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "none" });
    const directory = join(__dirname, "tmp/path-parameters");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "client.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      createApiClient: (
        fetcher: unknown,
        baseUrl: string,
      ) => { get: (path: string, params: unknown) => Promise<unknown> };
    };
    let requestedUrl = "";
    const api = module.createApiClient(
      {
        fetch: async (input: { url: URL }) => {
          requestedUrl = input.url.toString();
          return new Response("ok", { status: 200, headers: { "content-type": "text/plain" } });
        },
      },
      "http://example.com",
    );

    await api.get("/files/{file-name}", { path: { "file-name": "a b/c" } });
    expect(requestedUrl).toBe("http://example.com/files/a%20b%2Fc");

    const effectSource = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "none", client: "effect" });
    const effectFile = join(directory, "effect-client.ts");
    writeFileSync(effectFile, effectSource);
    const effectModule = (await import(pathToFileURL(effectFile).href + `?t=${Date.now()}`)) as {
      createEffectApiClient: (
        fetcher: unknown,
        baseUrl: string,
      ) => { get: (path: string, params: unknown) => Effect.Effect<unknown> };
    };
    const effectApi = effectModule.createEffectApiClient(
      {
        fetch: async (input: { url: URL }) => {
          requestedUrl = input.url.toString();
          return new Response("ok", { status: 200, headers: { "content-type": "text/plain" } });
        },
      },
      "http://example.com",
    );
    await Effect.runPromise(effectApi.get("/files/{file-name}", { path: { "file-name": "a b/c" } }));
    expect(requestedUrl).toBe("http://example.com/files/a%20b%2Fc");
  });

  test("serializes object and matrix path parameters according to OpenAPI style", async () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "styled path params", version: "1" },
      paths: {
        "/objects/{filter}": {
          get: {
            operationId: "getObject",
            parameters: [{ name: "filter", in: "path", required: true, schema: { type: "object" } }],
            responses: { "200": { description: "ok" } },
          },
        },
        "/matrix/{id}": {
          get: {
            operationId: "getMatrix",
            parameters: [{ name: "id", in: "path", style: "matrix", required: true, schema: { type: "array", items: { type: "string" } } }],
            responses: { "200": { description: "ok" } },
          },
        },
      },
    } satisfies OpenAPIObject;
    const source = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "none" });
    const directory = join(__dirname, "tmp/path-parameters");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "styled-client.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      createApiClient: (fetcher: unknown, baseUrl: string) => { get: (path: string, params: unknown) => Promise<unknown> };
    };
    const requestedUrls: string[] = [];
    const api = module.createApiClient(
      {
        fetch: async (input: { url: URL }) => {
          requestedUrls.push(input.url.toString());
          return new Response("ok", { status: 200, headers: { "content-type": "text/plain" } });
        },
      },
      "http://example.com",
    );

    await api.get("/objects/{filter}", { path: { filter: { role: "admin", active: "true" } } });
    await api.get("/matrix/{id}", { path: { id: ["a", "b"] } });
    expect(requestedUrls).toEqual(["http://example.com/objects/role,admin,active,true", "http://example.com/matrix/;id=a,b"]);
  });
});
