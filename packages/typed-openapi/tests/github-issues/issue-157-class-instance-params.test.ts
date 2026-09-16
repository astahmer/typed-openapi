import { Effect } from "effect";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { describe, expect, test } from "vitest";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { generateFile } from "../../src/generator.ts";
import { mapOpenApiEndpoints } from "../../src/map-openapi-endpoints.ts";

const doc = {
  openapi: "3.0.3",
  info: { title: "class instance params", version: "1" },
  paths: {
    "/items/{id}": {
      get: {
        operationId: "getItem",
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "string" } },
          { name: "from", in: "query", schema: { type: "string", format: "date-time" } },
        ],
        responses: { "200": { description: "ok" } },
      },
    },
  },
} satisfies OpenAPIObject;

describe("issue #157 class instance parameter serialization", () => {
  test("serializes Date path and query values in promise and Effect clients", async () => {
    const directory = join(__dirname, "tmp/issue-157-class-instance-params");
    mkdirSync(directory, { recursive: true });
    const date = new Date(0);
    const expectedDate = encodeURIComponent(String(date));
    const expectedUrl = `http://example.com/items/${expectedDate}?from=${expectedDate}`;
    let requestedUrl = "";

    const promiseFile = join(directory, "promise-client.ts");
    writeFileSync(promiseFile, generateFile({ ...mapOpenApiEndpoints(doc), runtime: "none" }));
    const promiseModule = (await import(pathToFileURL(promiseFile).href + `?t=${Date.now()}`)) as {
      createApiClient: (
        fetcher: unknown,
        baseUrl: string,
      ) => { get: (path: string, params: unknown) => Promise<unknown> };
    };
    const promiseApi = promiseModule.createApiClient(
      {
        fetch: async (input: { url: URL; urlSearchParams?: URLSearchParams }) => {
          if (input.urlSearchParams) input.url.search = input.urlSearchParams.toString();
          requestedUrl = input.url.toString();
          return new Response("ok", { status: 200, headers: { "content-type": "text/plain" } });
        },
      },
      "http://example.com",
    );

    await promiseApi.get("/items/{id}", { path: { id: date }, query: { from: date } });
    expect(requestedUrl).toBe(expectedUrl);

    const effectFile = join(directory, "effect-client.ts");
    writeFileSync(effectFile, generateFile({ ...mapOpenApiEndpoints(doc), runtime: "none", client: "effect" }));
    const effectModule = (await import(pathToFileURL(effectFile).href + `?t=${Date.now()}`)) as {
      createEffectApiClient: (
        fetcher: unknown,
        baseUrl: string,
      ) => { get: (path: string, params: unknown) => Effect.Effect<unknown> };
    };
    const effectApi = effectModule.createEffectApiClient(
      {
        fetch: async (input: { url: URL; urlSearchParams?: URLSearchParams }) => {
          if (input.urlSearchParams) input.url.search = input.urlSearchParams.toString();
          requestedUrl = input.url.toString();
          return new Response("ok", { status: 200, headers: { "content-type": "text/plain" } });
        },
      },
      "http://example.com",
    );

    await Effect.runPromise(effectApi.get("/items/{id}", { path: { id: date }, query: { from: date } }));
    expect(requestedUrl).toBe(expectedUrl);
  });
});
