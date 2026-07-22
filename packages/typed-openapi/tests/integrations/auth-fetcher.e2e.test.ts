import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { prettify } from "../../src/format.ts";
import { generateDefaultFetcher } from "../../src/default-fetcher.generator.ts";

const tmp = join(__dirname, "../../tmp/auth-fetcher-e2e");

describe("default fetcher configureFetcher e2e", () => {
  const server = setupServer();

  beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("getAuth applies Bearer + api_key on outgoing fetch", async () => {
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const doc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;

    // Minimal client stub so createApiClient exists for the generated fetcher file
    const clientStub = `
export type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";
export type Fetcher = {
  fetch: (input: {
    method: string;
    url: URL;
    urlSearchParams?: URLSearchParams;
    parameters?: { body?: unknown; header?: Record<string, unknown>; cookie?: Record<string, unknown> };
    requestFormat?: RequestFormat;
    overrides?: RequestInit;
  }) => Promise<Response>;
};
export const createApiClient = (config: { fetch: Fetcher["fetch"] }, baseUrl: string) => ({
  fetch: config.fetch,
  baseUrl,
});
`;

    const fetcherSrc = await prettify(
      generateDefaultFetcher({
        clientPath: "./api.client.ts",
        envApiBaseUrl: "API_BASE_URL",
        doc,
      }),
    );

    writeFileSync(join(tmp, "api.client.ts"), clientStub);
    writeFileSync(
      join(tmp, "fetcher.ts"),
      fetcherSrc.replace(/process\.env\["API_BASE_URL"\]/, '"https://petstore.test"'),
    );

    const mod = await import(pathToFileURL(join(tmp, "fetcher.ts")).href + `?t=${Date.now()}`);
    mod.configureFetcher({
      getAuth: () => ({ petstore_auth: "tok", api_key: "key-1" }),
    });

    let seenAuth: string | null = null;
    let seenApiKey: string | null = null;
    server.use(
      http.get("https://petstore.test/pet/1", ({ request }) => {
        seenAuth = request.headers.get("Authorization");
        seenApiKey = request.headers.get("api_key");
        return HttpResponse.json({ id: 1 });
      }),
    );

    const res = await mod.api.fetch({
      method: "get",
      url: new URL("https://petstore.test/pet/1"),
      requestFormat: "json",
    });
    expect(res.ok).toBe(true);
    expect(seenAuth).toBe("Bearer tok");
    expect(seenApiKey).toBe("key-1");
  });
});
