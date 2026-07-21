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

  test("mock factory body is returned by handler", async () => {
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const endpoint = {
      method: "get" as const,
      path: "/echo",
      meta: { alias: "getEcho", operationId: "getEcho", tags: [] as string[] },
      operation: {
        responses: {
          "200": {
            description: "ok",
            content: {
              "application/json": { example: { msg: "hello-msw" } },
            },
          },
        },
      },
      parameters: {},
      requestFormat: "json" as const,
      responseFormat: "json" as const,
      responses: {
        "200": {
          kind: "object" as const,
          required: ["msg"],
          partial: false,
          additionalProperties: false,
          properties: { msg: { kind: "string" as const, constraints: {}, meta: {} } },
          constraints: {},
          meta: {},
        },
      },
    };

    const src = await prettify(
      generateMswFile({
        endpointList: [endpoint as never],
        doc: { openapi: "3.0.3", info: { title: "t", version: "1" }, paths: {} },
        baseUrl: "https://example.test",
      }),
    );
    writeFileSync(join(tmp, "echo-handlers.ts"), src);
    const mod = await import(pathToFileURL(join(tmp, "echo-handlers.ts")).href + `?t=${Date.now()}`);

    expect(mod.getGetEchoMock()).toEqual({ msg: "hello-msw" });
    server.use(...mod.handlers);
    const res = await fetch("https://example.test/echo");
    expect(await res.json()).toEqual({ msg: "hello-msw" });
  });

  test("SSE handler returns event-stream content type", async () => {
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const endpoint = {
      method: "get" as const,
      path: "/stream",
      meta: { alias: "getStream", operationId: "getStream", tags: [] as string[] },
      operation: { responses: { "200": { description: "ok" } } },
      parameters: {},
      requestFormat: "json" as const,
      responseFormat: "sse" as const,
      responses: { "200": { kind: "unknown" as const, meta: {} } },
    };

    const src = await prettify(
      generateMswFile({
        endpointList: [endpoint as never],
        doc: { openapi: "3.0.3", info: { title: "t", version: "1" }, paths: {} },
        baseUrl: "https://example.test",
      }),
    );
    writeFileSync(join(tmp, "sse-handlers.ts"), src);
    const mod = await import(pathToFileURL(join(tmp, "sse-handlers.ts")).href + `?t=${Date.now()}`);
    server.use(...mod.handlers);

    const res = await fetch("https://example.test/stream");
    expect(res.headers.get("content-type")).toContain("text/event-stream");
    expect(await res.text()).toContain("data:");
  });
});
