import { describe, expect, test } from "vitest";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { prettify } from "../src/format.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateTanstackQueryFile } from "../src/tanstack-query.generator.ts";

describe("tanstack + EffectApiClient", () => {
  test("wraps Effect client calls with Effect.runPromise", async () => {
    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    const file = await prettify(
      await generateTanstackQueryFile({
        ...mapOpenApiEndpoints(openApiDoc),
        relativeApiClientPath: "./api.client.ts",
        client: "effect",
      }),
    );

    expect(file).toContain('import { Effect } from "effect"');
    expect(file).toContain("EffectApiClient");
    expect(file).toContain("Effect.runPromise");
    expect(file).not.toContain("await this.client.get(path, requestParams as never)");
    expect(file).toContain("cookie?: Record<string, unknown>");
  });
});
