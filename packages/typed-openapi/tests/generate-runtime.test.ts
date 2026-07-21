import { existsSync } from "node:fs";
import { describe, expect, test } from "vitest";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { allowedRuntimes, generateFile } from "../src/generator.ts";
import { prettify } from "../src/format.ts";

const samples = ["petstore", "docker.openapi", "long-operation-id", "kombo.openapi"] as const;
// @ts-expect-error arktype enum inference
const runtimes = allowedRuntimes.toJsonSchema().enum as string[];

const samplePath = (sample: string) => {
  const json = `${__dirname}/samples/${sample}.json`;
  if (existsSync(json)) return json;
  return `${__dirname}/samples/${sample}.yaml`;
};

const heavySample = (sample: string) => sample === "docker.openapi" || sample === "kombo.openapi";

samples.forEach((sample) => {
  describe(`generate-runtime-${sample}`, () => {
    test.each(runtimes)("generate %s", { timeout: heavySample(sample) ? 300_000 : 60_000 }, async (runtime) => {
      const openApiDoc = (await SwaggerParser.parse(samplePath(sample))) as OpenAPIObject;
      const ctx = mapOpenApiEndpoints(openApiDoc);
      // Skip oxfmt on multi-hundred-KB outputs — still deterministic for snapshots.
      const raw = generateFile({ ...ctx, runtime: runtime as any });
      const tsRouter = heavySample(sample) ? raw : await prettify(raw);
      const runtimeName = runtime === "none" ? "client" : runtime;
      await expect(tsRouter).toMatchFileSnapshot(`./snapshots/${sample}.` + runtimeName + ".ts");
    });
  });
});
