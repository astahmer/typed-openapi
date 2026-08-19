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
    expect(file).toContain("createQueryKey(path, params[0], true)");
    // Internal cast in createQueryKey only — call sites stay cast-free (C007).
    expect(file).toContain("as EndpointParameters");
    expect(file).not.toMatch(/path as string/);
    expect(file).not.toMatch(/params\[0\] as /);
    expect(file).toContain("queryOptions:");
    expect(file).toContain("mutationOptions:");
    expect(file).toContain("export class TanstackQueryApiClient");
    expect(file).toContain("export type TanstackQueryApiClientOptions");
    expect(file).toContain("signal: queryContext.signal");
    expect(file).toContain("ApiCallParams, ApiQueryOptions");
    expect(file).toContain("queryOptions?: ApiQueryOptions");
    expect(file).toContain("endpointQueryOptions?.consumeQuerySignal ?? this.options.consumeQuerySignal");
    expect(file).toContain("const endpointQueryOptions = (params[0] as { queryOptions?: ApiQueryOptions } | undefined)?.queryOptions;");
    expect(file).toContain("private readonly options: TanstackQueryApiClientOptions = {}");
    expect(file).toContain("TResponse extends { data: infer TData }");
    expect(file).not.toContain("TypedSuccessResponse<any, any, any>");
    expect(file).not.toContain("this.client as any");
    expect(file).not.toContain("params as any");
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

    expect(file).toMatch(/endpoint:\s*\(id: PropertyKey, options\?: object, infinite\?: boolean\)/);
    expect(file).toContain("createQueryKey(id, options, infinite)");
    expect(file).toContain("const createQueryKey = (");
    expect(file).toContain("id: PropertyKey");
    expect(file).not.toMatch(/createQueryKey = <TOptions extends EndpointParameters>/);
  });

  test("queryKeyFactory.all prefixes hierarchical endpoint keys", async () => {
    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    const file = await generateTanstackQueryFile({
      ...mapOpenApiEndpoints(openApiDoc),
      relativeApiClientPath: "./api.client.ts",
    });

    expect(file).toContain('all: ["typed-openapi"] as const');
    expect(file).toContain("const keyId = String(id)");
    expect(file).toContain('return ["typed-openapi", keyId, params] as const');
    expect(file).toContain('return ["typed-openapi", keyId] as const');
    expect(file).toContain("invalidateQueries:");
    expect(file).not.toContain("_id: id");
  });

  test("effect client wraps queryFns with Effect.runPromise", async () => {
    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    const file = await generateTanstackQueryFile({
      ...mapOpenApiEndpoints(openApiDoc),
      relativeApiClientPath: "./api.client.ts",
      client: "effect",
    });

    expect(file).toContain('import { Effect } from "effect"');
    expect(file).toContain("EffectApiClient");
    expect(file).toContain("Effect.runPromise");
    expect(file).toContain("infiniteQueryOptions:");
  });

  test("createQueryKey copies body header path query cookie", async () => {
    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    const file = await generateTanstackQueryFile({
      ...mapOpenApiEndpoints(openApiDoc),
      relativeApiClientPath: "./api.client.ts",
    });

    for (const field of ["body", "header", "path", "query", "cookie"] as const) {
      expect(file).toContain(`if (src.${field})`);
      expect(file).toContain(`params.${field} = src.${field}`);
    }
    expect(file).toContain('params["_infinite"]');
    expect(file).toContain('delete keyParams["_infinite"]');
    expect(file).toContain("createQueryKey(path, params[0])");
    expect(file).toContain("(options ?? {}) as EndpointParameters");
  });
});
