import { describe, expect, test } from "vitest";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints";
import { allowedRuntimes, generateFile } from "../src/generator";

describe("generate-model", async () => {
  const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
  const ctx = mapOpenApiEndpoints(openApiDoc);
  const { string: runtimes } = allowedRuntimes.node as { string: Array<{ value: string }> };

  runtimes.forEach(({ value: runtime }) => {
    test(`generate ${runtime}`, () => {
      const tsRouter = generateFile({ ...ctx, runtime: runtime as any });
      const runtimeName = runtime === "none" ? "client" : runtime;
      expect(tsRouter).toMatchFileSnapshot("./snapshots/petstore." + runtimeName + ".ts");
    });
  });
});
