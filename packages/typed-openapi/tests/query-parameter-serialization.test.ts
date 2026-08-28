import { describe, expect, test } from "vitest";
import { Effect } from "effect";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";

const doc = {
  openapi: "3.0.3",
  info: { title: "query serialization", version: "1" },
  paths: {
    "/search": {
      get: {
        operationId: "search",
        parameters: [
          {
            name: "filter",
            in: "query",
            schema: {
              type: "object",
              properties: { role: { type: "string" }, active: { type: "boolean" } },
            },
          },
        ],
        responses: { "200": { description: "ok" } },
      },
    },
  },
} satisfies OpenAPIObject;

const styledDoc = {
  openapi: "3.0.3",
  info: { title: "styled query serialization", version: "1" },
  paths: {
    "/search": {
      get: {
        operationId: "styledSearch",
        parameters: [
          { name: "tags", in: "query", style: "pipeDelimited", explode: false, schema: { type: "array", items: { type: "string" } } },
          {
            name: "filter",
            in: "query",
            style: "deepObject",
            explode: true,
            schema: { type: "object", properties: { role: { type: "string" } } },
          },
        ],
        responses: { "200": { description: "ok" } },
      },
    },
  },
} satisfies OpenAPIObject;

const reservedDoc = {
  openapi: "3.0.3",
  info: { title: "reserved query serialization", version: "1" },
  paths: {
    "/search": {
      get: {
        operationId: "reservedSearch",
        parameters: [{ name: "q", in: "query", allowReserved: true, schema: { type: "string" } }],
        responses: { "200": { description: "ok" } },
      },
    },
  },
} satisfies OpenAPIObject;

describe("default query parameter serialization", () => {
  test("serializes default form/explode object parameters as separate fields", async () => {
    const source = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "none" });
    const directory = join(__dirname, "tmp/query-parameter-serialization");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "client.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      createApiClient: (fetcher: unknown, baseUrl?: string) => {
        get: (path: string, params: unknown) => Promise<unknown>;
      };
    };
    let requestedUrl = "";
    const api = module.createApiClient(
      {
        fetch: async (input: { url: URL; urlSearchParams?: URLSearchParams }) => {
          if (input.urlSearchParams) input.url.search = input.urlSearchParams.toString();
          requestedUrl = input.url.toString();
          return new Response("ok", { status: 200, headers: { "content-type": "text/plain" } });
        },
      },
      "http://example.com",
    );

    await api.get("/search", { query: { filter: { role: "admin", active: true } } });
    expect(requestedUrl).toBe("http://example.com/search?role=admin&active=true");
  });

  test("uses the same object serialization in the generated Effect client", async () => {
    const source = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "none", client: "effect" });
    const directory = join(__dirname, "tmp/query-parameter-serialization");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "effect-client.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      createEffectApiClient: (fetcher: unknown, baseUrl?: string) => {
        get: (path: string, params: unknown) => Effect.Effect<unknown>;
      };
    };
    let requestedUrl = "";
    const api = module.createEffectApiClient(
      {
        fetch: async (input: { url: URL; urlSearchParams?: URLSearchParams }) => {
          if (input.urlSearchParams) input.url.search = input.urlSearchParams.toString();
          requestedUrl = input.url.toString();
          return new Response("ok", { status: 200, headers: { "content-type": "text/plain" } });
        },
      },
      "http://example.com",
    );

    await Effect.runPromise(api.get("/search", { query: { filter: { role: "admin", active: true } } }));
    expect(requestedUrl).toBe("http://example.com/search?role=admin&active=true");
  });

  test("honors non-default array and object query styles", async () => {
    const source = generateFile({ ...mapOpenApiEndpoints(styledDoc), runtime: "none" });
    const directory = join(__dirname, "tmp/query-parameter-serialization");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "styled-client.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      createApiClient: (fetcher: unknown, baseUrl?: string) => {
        get: (path: string, params: unknown) => Promise<unknown>;
      };
    };
    let requestedUrl = "";
    const api = module.createApiClient(
      {
        fetch: async (input: { url: URL; urlSearchParams?: URLSearchParams }) => {
          if (input.urlSearchParams) input.url.search = input.urlSearchParams.toString();
          requestedUrl = input.url.toString();
          return new Response("ok", { status: 200, headers: { "content-type": "text/plain" } });
        },
      },
      "http://example.com",
    );

    await api.get("/search", { query: { tags: ["a", "b"], filter: { role: "admin" } } });
    expect(requestedUrl).toBe("http://example.com/search?tags=a%7Cb&filter%5Brole%5D=admin");
  });

  test("preserves reserved characters when allowReserved is true", async () => {
    const source = generateFile({ ...mapOpenApiEndpoints(reservedDoc), runtime: "none" });
    const directory = join(__dirname, "tmp/query-parameter-serialization");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "reserved-client.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      createApiClient: (fetcher: unknown, baseUrl?: string) => {
        get: (path: string, params: unknown) => Promise<unknown>;
      };
    };
    let requestedUrl = "";
    const api = module.createApiClient(
      {
        fetch: async (input: { url: URL; urlSearchParams?: URLSearchParams }) => {
          if (input.urlSearchParams) input.url.search = input.urlSearchParams.toString();
          requestedUrl = input.url.toString();
          return new Response("ok", { status: 200, headers: { "content-type": "text/plain" } });
        },
      },
      "http://example.com",
    );

    await api.get("/search", { query: { q: "a/b?c=d" } });
    expect(requestedUrl).toBe("http://example.com/search?q=a/b?c=d");

    const effectSource = generateFile({ ...mapOpenApiEndpoints(reservedDoc), runtime: "none", client: "effect" });
    const effectFile = join(directory, "reserved-effect-client.ts");
    writeFileSync(effectFile, effectSource);
    const effectModule = (await import(pathToFileURL(effectFile).href + `?t=${Date.now()}`)) as {
      createEffectApiClient: (fetcher: unknown, baseUrl?: string) => {
        get: (path: string, params: unknown) => Effect.Effect<unknown>;
      };
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
    await Effect.runPromise(effectApi.get("/search", { query: { q: "a/b?c=d" } }));
    expect(requestedUrl).toBe("http://example.com/search?q=a/b?c=d");
  });
});
