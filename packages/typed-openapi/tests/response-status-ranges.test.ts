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
  info: { title: "wildcard responses", version: "1" },
  paths: {
    "/resource": {
      get: {
        operationId: "getResource",
        responses: {
          "2XX": {
            description: "success",
            content: {
              "application/json": {
                schema: { type: "object", required: ["message"], properties: { message: { type: "string" } } },
              },
            },
          },
        },
      },
    },
  },
} satisfies OpenAPIObject;

describe("wildcard response status validation", () => {
  test("promise clients use a 2xx response schema for concrete 2xx statuses", async () => {
    const source = generateFile({ ...mapOpenApiEndpoints(doc), runtime: "zod", validateSide: "output" });
    const directory = join(__dirname, "tmp/response-status-ranges");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "zod-client.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      createApiClient: (fetcher: unknown, baseUrl?: string) => { get: (path: string) => Promise<unknown> };
    };
    const api = module.createApiClient(
      {
        fetch: async () =>
          new Response(JSON.stringify({ message: 123 }), {
            status: 201,
            headers: { "content-type": "application/json" },
          }),
      },
      "http://example.com",
    );

    await expect(api.get("/resource", { throwOnStatusError: false })).rejects.toBeTruthy();
  });

  test("effect clients use a 2xx response schema for concrete 2xx statuses", async () => {
    const source = generateFile({
      ...mapOpenApiEndpoints(doc),
      runtime: "effect",
      client: "effect",
      validateSide: "output",
    });
    const directory = join(__dirname, "tmp/response-status-ranges");
    mkdirSync(directory, { recursive: true });
    const file = join(directory, "effect-client.ts");
    writeFileSync(file, source);
    const module = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      createEffectApiClient: (fetcher: unknown, baseUrl?: string) => { get: (path: string) => Effect.Effect<unknown> };
    };
    const api = module.createEffectApiClient(
      {
        fetch: async () =>
          new Response(JSON.stringify({ message: 123 }), {
            status: 201,
            headers: { "content-type": "application/json" },
          }),
      },
      "http://example.com",
    );

    await expect(Effect.runPromise(api.get("/resource", { throwOnStatusError: false }))).rejects.toBeTruthy();
  });
});
