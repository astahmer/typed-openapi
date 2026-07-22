import { describe, expect, test } from "vitest";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile } from "../src/generator.ts";

const fixturePath = `${__dirname}/samples/filter-fixture.openapi.yaml`;
const tmp = join(__dirname, "../tmp/validate-side");

describe("validateSide + onValidate", () => {
  test("generated client includes validate helpers and defaults", async () => {
    const doc = (await SwaggerParser.parse(fixturePath)) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(doc);
    const src = generateFile({
      ...ctx,
      runtime: "zod",
      client: "promise",
      validateSide: "input",
      endpointPatterns: ["/pets/{id}"],
    });
    expect(src).toContain('validate: ValidateSide = "input"');
    expect(src).toContain("runValidate");
    expect(src).toContain("onValidate");
  });

  test("onValidate is invoked for output when validateSide is both", async () => {
    const doc = (await SwaggerParser.parse(fixturePath)) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(doc);
    const src = generateFile({
      ...ctx,
      runtime: "zod",
      client: "promise",
      validateSide: "both",
      endpointPatterns: ["/pets"],
      includeClient: true,
    });

    mkdirSync(tmp, { recursive: true });
    const file = join(tmp, "client.ts");
    writeFileSync(file, src);

    const mod = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)) as {
      createApiClient: (
        f: any,
        base?: string,
        opts?: { onValidate?: (c: any) => unknown },
      ) => { get: (path: string, params?: any) => Promise<unknown> };
    };

    const calls: string[] = [];
    const api = mod.createApiClient(
      {
        fetch: async () =>
          new Response(JSON.stringify([{ name: "x" }]), {
            status: 200,
            headers: { "content-type": "application/json" },
          }),
      },
      "http://example.com",
      {
        onValidate: (c) => {
          calls.push(c.side);
          return c.value;
        },
      },
    );

    await api.get("/pets");
    expect(calls).toContain("output");
  });
});
