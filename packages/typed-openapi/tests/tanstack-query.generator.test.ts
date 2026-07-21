import { describe, expect, test } from "vitest";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { prettify } from "../src/format.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateTanstackQueryFile } from "../src/tanstack-query.generator.ts";

describe("tanstack-query.generator", () => {
  test("petstore emits infiniteQueryOptions, queryKeyFactory, invalidate helpers", async () => {
    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    const file = await prettify(
      await generateTanstackQueryFile({
        ...mapOpenApiEndpoints(openApiDoc),
        relativeApiClientPath: "./api.client.ts",
      }),
    );

    expect(file).toContain(
      'import { queryOptions, infiniteQueryOptions, type QueryClient } from "@tanstack/react-query"',
    );
    expect(file).toContain("export const queryKeyFactory");
    expect(file).toContain('all: ["typed-openapi"] as const');
    expect(file).toContain("export const invalidateEndpoint");
    expect(file).toContain("infiniteQueryOptions:");
    expect(file).toContain("pageParamKey?");
    expect(file).toContain("suspenseQueryOptions:");
    expect(file).toContain("invalidate:");
    expect(file).toContain("invalidateInfinite:");
    expect(file).toContain("_infinite");
    expect(file).toContain("createQueryKey(path as string, params[0], true)");
    expect(file).toContain("queryOptions:");
    expect(file).toContain("mutationOptions:");
    expect(file).toContain("export class TanstackQueryApiClient");
  });

  test("infinite query merges pageParam into query[pageParamKey]", async () => {
    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    const file = await generateTanstackQueryFile({
      ...mapOpenApiEndpoints(openApiDoc),
      relativeApiClientPath: "./api.client.ts",
    });

    expect(file).toContain("query[infiniteOpts.pageParamKey] = pageParam");
    expect(file).toContain("initialPageParam: infiniteOpts.initialPageParam");
    expect(file).toContain("getNextPageParam: infiniteOpts.getNextPageParam");
  });

  test("queryKeyFactory.endpoint tags infinite keys", async () => {
    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    const file = await generateTanstackQueryFile({
      ...mapOpenApiEndpoints(openApiDoc),
      relativeApiClientPath: "./api.client.ts",
    });

    expect(file).toMatch(
      /endpoint:\s*<TOptions extends EndpointParameters>\(id: string, options\?: TOptions, infinite\?: boolean\)/,
    );
    expect(file).toContain("createQueryKey(id, options, infinite)");
  });
});
