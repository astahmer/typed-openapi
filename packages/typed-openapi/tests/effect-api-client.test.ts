import { describe, expect, test } from "vitest";
import { Effect } from "effect";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile } from "../src/generator.ts";

const fixturePath = `${__dirname}/samples/filter-fixture.openapi.yaml`;
const tmp = join(__dirname, "../tmp/effect-client");

describe("EffectApiClient", () => {
  test("default client is effect when runtime is effect", async () => {
    const doc = (await SwaggerParser.parse(fixturePath)) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(doc);
    const src = generateFile({
      ...ctx,
      runtime: "effect",
      endpointPatterns: ["/pets"],
      schemasOnly: false,
    });
    expect(src).toContain("class EffectApiClient");
    expect(src).toContain("createEffectApiClient");
    expect(src).toContain("SchemaError");
    expect(src).toContain("Schema.decodeUnknownEffect");
    expect(src).not.toContain("class ApiClient {");
    mkdirSync(join(__dirname, "../tmp"), { recursive: true });
    writeFileSync(join(__dirname, "../tmp/generated-effect-client.ts"), src);
  });

  test("runtime none + client effect still emits EffectApiClient", async () => {
    const doc = (await SwaggerParser.parse(fixturePath)) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(doc);
    const src = generateFile({
      ...ctx,
      runtime: "none",
      client: "effect",
      endpointPatterns: ["/pets"],
    });
    expect(src).toContain("class EffectApiClient");
    expect(src).toContain('from "effect"');
  });

  test("Effect request succeeds with mock fetcher", async () => {
    const doc = (await SwaggerParser.parse(fixturePath)) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(doc);
    const src = generateFile({
      ...ctx,
      runtime: "none",
      client: "effect",
      endpointPatterns: ["/pets"],
    });

    mkdirSync(tmp, { recursive: true });
    const file = join(tmp, "client.ts");
    writeFileSync(file, src);
    const mod = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      createEffectApiClient: (
        f: any,
        base?: string,
      ) => { get: (path: string, params?: any) => Effect.Effect<unknown, unknown, never> };
    };

    const api = mod.createEffectApiClient(
      {
        fetch: async () =>
          new Response(JSON.stringify([{ name: "a", tag: { id: "1" } }]), {
            status: 200,
            headers: { "content-type": "application/json" },
          }),
      },
      "http://example.com",
    );

    const result = await Effect.runPromise(api.get("/pets"));
    expect(result).toEqual([{ name: "a", tag: { id: "1" } }]);
  });
});
