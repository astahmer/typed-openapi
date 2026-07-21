import { describe, expect, test, vi } from "vitest";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { QueryClient } from "@tanstack/react-query";
import { prettify } from "../../src/format.ts";
import { mapOpenApiEndpoints } from "../../src/map-openapi-endpoints.ts";
import { generateTanstackQueryFile } from "../../src/tanstack-query.generator.ts";

const tmpRoot = join(__dirname, "../../tmp/tanstack-infinite-e2e");

describe("tanstack infinite / queryKey e2e", () => {
  test("generated module exports queryKeyFactory and invalidateEndpoint", async () => {
    const tmp = join(tmpRoot, "keys");
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(openApiDoc);

    const stubClient = `
export type SuccessStatusCode = 200 | 201 | 202 | 204;
export type ErrorStatusCode = 400 | 401 | 403 | 404 | 500;
export type TypedSuccessResponse<T = unknown, S = number, H = unknown> = { data: T; status: S; headers: H; ok: true };
export type InferResponseByStatus<TEndpoint, TStatusCode> = TEndpoint extends { responses: infer R }
  ? TStatusCode extends keyof R ? { data: R[TStatusCode]; status: TStatusCode; ok: true } : never
  : never;
export type EndpointByMethod = {
  get: {
    "/pet/findByStatus": {
      parameters: { query?: { status?: string } };
      responses: { 200: Array<{ id?: number; name: string }> };
    };
  };
  put: Record<string, never>;
  post: Record<string, never>;
  delete: Record<string, never>;
};
export type ApiCallParams<_T> = Record<string, unknown>;
export const errorStatusCodes = [400, 401, 403, 404, 500] as const;
export class TypedStatusError extends Error {}
export class ApiClient {
  get(_path: string, _params?: unknown) {
    return Promise.resolve([{ id: 1, name: "dog" }]);
  }
}
`;

    const tanstackSrc = await prettify(
      await generateTanstackQueryFile({
        ...ctx,
        relativeApiClientPath: "./api.client.ts",
      }),
    );

    writeFileSync(join(tmp, "api.client.ts"), stubClient);
    writeFileSync(join(tmp, "tanstack.client.ts"), tanstackSrc);

    const mod = await import(pathToFileURL(join(tmp, "tanstack.client.ts")).href + `?t=${Date.now()}`);
    expect(mod.queryKeyFactory.all).toEqual(["typed-openapi"]);
    const key = mod.queryKeyFactory.endpoint("/pet/findByStatus", { query: { status: "available" } });
    expect(key[0]).toBe("typed-openapi");
    expect(key[1]).toBe("/pet/findByStatus");
    expect(key[2]?.query).toEqual({ status: "available" });
    expect(key[2]?._infinite).toBeUndefined();

    const infiniteKey = mod.queryKeyFactory.endpoint("/pet/findByStatus", { query: { status: "available" } }, true);
    expect(infiniteKey[2]?._infinite).toBe(true);

    const qc = new QueryClient();
    const spy = vi.spyOn(qc, "invalidateQueries");
    await mod.invalidateEndpoint(qc, "/pet/findByStatus", { query: { status: "available" } });
    expect(spy).toHaveBeenCalledWith({ queryKey: key });
  });

  test("TanstackQueryApiClient infiniteQueryOptions merges pageParam and invalidate helpers work", async () => {
    const tmp = join(tmpRoot, "infinite");
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(openApiDoc);

    const stubClient = `
export type SuccessStatusCode = 200 | 201 | 202 | 204;
export type ErrorStatusCode = 400 | 401 | 403 | 404 | 500;
export type TypedSuccessResponse<T = unknown, S = number, H = unknown> = { data: T; status: S; headers: H; ok: true };
export type InferResponseByStatus<TEndpoint, TStatusCode> = TEndpoint extends { responses: infer R }
  ? TStatusCode extends keyof R ? { data: R[TStatusCode]; status: TStatusCode; ok: true } : never
  : never;
export type EndpointByMethod = {
  get: {
    "/pet/findByStatus": {
      parameters: { query?: { status?: string; page?: number } };
      responses: { 200: Array<{ id?: number; name: string }> };
    };
  };
  put: Record<string, never>;
  post: Record<string, never>;
  delete: Record<string, never>;
};
export type ApiCallParams<_T> = Record<string, unknown>;
export const errorStatusCodes = [400, 401, 403, 404, 500] as const;
export class TypedStatusError extends Error {}
export class ApiClient {
  lastParams: unknown;
  get(_path: string, params?: { query?: Record<string, unknown> }) {
    this.lastParams = params;
    return Promise.resolve([{ id: 1, name: "dog" }]);
  }
}
`;

    const tanstackSrc = await prettify(
      await generateTanstackQueryFile({
        ...ctx,
        relativeApiClientPath: "./api.client.ts",
      }),
    );

    writeFileSync(join(tmp, "api.client.ts"), stubClient);
    writeFileSync(join(tmp, "tanstack.client.ts"), tanstackSrc);

    const stamp = Date.now();
    const apiMod = await import(pathToFileURL(join(tmp, "api.client.ts")).href + `?t=${stamp}`);
    const mod = await import(pathToFileURL(join(tmp, "tanstack.client.ts")).href + `?t=${stamp}`);
    const api = new apiMod.ApiClient();
    const client = new mod.TanstackQueryApiClient(api);
    const query = client.get("/pet/findByStatus", { query: { status: "available" } });

    const infiniteOpts = query.infiniteQueryOptions({
      initialPageParam: 1,
      pageParamKey: "page",
      getNextPageParam: () => undefined,
    });

    expect(infiniteOpts.queryKey[0]).toBe("typed-openapi");
    expect(infiniteOpts.queryKey[2]._infinite).toBe(true);
    const page = await infiniteOpts.queryFn({ pageParam: 3, signal: new AbortController().signal } as never);
    expect(page).toEqual([{ id: 1, name: "dog" }]);
    expect(client.client).toBe(api);
    expect(api.lastParams).toEqual(
      expect.objectContaining({
        query: { status: "available", page: 3 },
        withResponse: false,
      }),
    );

    const fromSuspense = await query.suspenseQueryOptions.queryFn({
      queryKey: query.queryKey,
      signal: new AbortController().signal,
    } as never);
    expect(fromSuspense).toEqual([{ id: 1, name: "dog" }]);

    const qc = new QueryClient();
    const spy = vi.spyOn(qc, "invalidateQueries");
    await query.invalidate(qc);
    expect(spy).toHaveBeenCalledWith({ queryKey: query.queryKey });
    await query.invalidateInfinite(qc);
    expect(spy.mock.calls.at(-1)?.[0]).toEqual({
      queryKey: mod.queryKeyFactory.endpoint("/pet/findByStatus", { query: { status: "available" } }, true),
    });
  });
});
