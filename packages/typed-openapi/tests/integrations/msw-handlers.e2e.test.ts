import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { prettify } from "../../src/format.ts";
import { mapOpenApiEndpoints } from "../../src/map-openapi-endpoints.ts";
import { generateMswFile } from "../../src/msw.generator.ts";

const tmp = join(__dirname, "../../tmp/msw-e2e");

describe("msw handlers e2e", () => {
  const server = setupServer();

  beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("generated handlers intercept fetch", async () => {
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const openApiDoc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    const ctx = mapOpenApiEndpoints(openApiDoc);

    // Minimal subset: one GET with a known path
    const findByStatus = ctx.endpointList.find((e) => e.path === "/pet/findByStatus" && e.method === "get");
    expect(findByStatus).toBeTruthy();

    const src = await prettify(
      generateMswFile({
        endpointList: [findByStatus!],
        doc: openApiDoc,
        baseUrl: "https://petstore3.swagger.io/api/v3",
      }),
    );
    writeFileSync(join(tmp, "handlers.ts"), src);

    const mod = await import(pathToFileURL(join(tmp, "handlers.ts")).href + `?t=${Date.now()}`);
    expect(Array.isArray(mod.handlers)).toBe(true);
    expect(mod.handlers.length).toBe(1);

    server.use(...mod.handlers);

    const res = await fetch("https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available");
    expect(res.ok).toBe(true);
    const body = await res.json();
    // Stub from schema — array of pets or ref placeholder
    expect(body).toBeDefined();
  });

  test("manual http.get still works alongside generated style", async () => {
    server.use(http.get("https://example.test/ping", () => HttpResponse.json({ ok: true })));
    const res = await fetch("https://example.test/ping");
    expect(await res.json()).toEqual({ ok: true });
  });
});
