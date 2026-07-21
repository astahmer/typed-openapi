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

const tmp = join(__dirname, "../../tmp/tanstack-infinite-e2e");

describe("tanstack infinite / queryKey e2e", () => {
  test("generated module exports queryKeyFactory and invalidateEndpoint", async () => {
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
    expect(key[0]._id).toBe("/pet/findByStatus");
    expect(key[0].query).toEqual({ status: "available" });
    expect(key[0]._infinite).toBeUndefined();

    const infiniteKey = mod.queryKeyFactory.endpoint("/pet/findByStatus", { query: { status: "available" } }, true);
    expect(infiniteKey[0]._infinite).toBe(true);

    const qc = new QueryClient();
    const spy = vi.spyOn(qc, "invalidateQueries");
    await mod.invalidateEndpoint(qc, "/pet/findByStatus", { query: { status: "available" } });
    expect(spy).toHaveBeenCalledWith({ queryKey: key });
  });
});
