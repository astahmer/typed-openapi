import { describe, expect, test } from "vitest";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { allowedRuntimes, generateFile } from "../src/generator.ts";
import { prettify } from "../src/format.ts";

const samples = ["petstore", "docker.openapi", "long-operation-id"];
// @ts-expect-error
const runtimes = allowedRuntimes.toJsonSchema().enum;

samples.forEach((sample) => {
  describe(`generate-rutime-${sample}`, async () => {
    const filePath = `${__dirname}/samples/${sample}.yaml`;
    const openApiDoc = (await SwaggerParser.parse(filePath)) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(openApiDoc);

    runtimes.forEach((runtime: string) => {
      if (runtime === "arktype" && sample === "docker.openapi") return;

      test(`generate ${runtime}`, async () => {
        const tsRouter = await prettify(generateFile({ ...ctx, runtime: runtime as any }));
        const runtimeName = runtime === "none" ? "client" : runtime;
        await expect(tsRouter).toMatchFileSnapshot(`./snapshots/${sample}.` + runtimeName + ".ts");
      });
    });
  });
});
