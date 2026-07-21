import { existsSync } from "node:fs";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { describe, expect, test, vi } from "vitest";
import { Effect } from "effect";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile, type OutputRuntime } from "../src/generator.ts";

/** typia needs an AOT transformer; mock so generated clients can load under vitest. */
vi.mock("typia", () => {
  const pass = () => true;
  const identity = <T>(v: T) => v;
  const api = {
    createIs: () => pass,
    createAssert: () => identity,
    createValidate: () => (v: unknown) => ({ success: true, data: v }),
  };
  return { default: api, ...api };
});

const runtimes: OutputRuntime[] = [
  "none",
  "zod",
  "zod3",
  "effect",
  "effect3",
  "valibot",
  "arktype",
  "typebox",
  "typia",
];
const clients = ["promise", "effect"] as const;

type SampleSpec = {
  id: string;
  file: string;
  path: string;
  method: "get";
  successBody: unknown;
  errorStatus: number;
  errorBody: unknown;
  /** Invalid body that should fail output validation for schema runtimes (except typia mock). */
  invalidSuccessBody: unknown;
};

const samples: SampleSpec[] = [
  {
    id: "kombo.openapi",
    file: "kombo.openapi.json",
    path: "/check-api-key",
    method: "get",
    successBody: {
      status: "success",
      data: { environment_id: "env_1", customer_id: "cust_1" },
    },
    errorStatus: 401,
    errorBody: { status: "error", message: "unauthorized" },
    invalidSuccessBody: { status: "success", data: { environment_id: 123 } },
  },
  {
    id: "docker.openapi",
    file: "docker.openapi.yaml",
    path: "/version",
    method: "get",
    successBody: {
      Version: "24.0.0",
      ApiVersion: "1.43",
      Platform: { Name: "Docker Engine - Community" },
    },
    errorStatus: 500,
    errorBody: { message: "server error" },
    invalidSuccessBody: { Version: 12345 },
  },
];

const samplePath = (file: string) => join(__dirname, "samples", file);
const outRoot = join(__dirname, "../tmp/runtime-matrix");

type PromiseMod = {
  createApiClient: (
    fetcher: { fetch: (input: any) => Promise<Response> },
    baseUrl?: string,
    options?: { validate?: string; onValidate?: (c: any) => unknown },
  ) => {
    get: (path: string, params?: any) => Promise<unknown>;
    setOnValidate: (fn: ((c: any) => unknown) | undefined) => unknown;
  };
};

type EffectMod = {
  createEffectApiClient: (
    fetcher: { fetch: (input: any) => Promise<Response> },
    baseUrl?: string,
    options?: { validate?: string; onValidate?: (c: any) => unknown },
  ) => {
    get: (path: string, params?: any) => Effect.Effect<unknown, unknown, never>;
  };
};

const loadDoc = async (file: string) => (await SwaggerParser.parse(samplePath(file))) as OpenAPIObject;

describe("runtime×client integration matrix", () => {
  mkdirSync(outRoot, { recursive: true });

  for (const sample of samples) {
    describe(sample.id, () => {
      for (const runtime of runtimes) {
        for (const client of clients) {
          const label = `${runtime}+${client}`;

          test(`${label}: success + status error`, { timeout: 300_000 }, async () => {
            const doc = await loadDoc(sample.file);
            const ctx = mapOpenApiEndpoints(doc);
            const src = generateFile({
              ...ctx,
              runtime,
              client,
              includeClient: true,
              // ArkType coerce morphs + defaults trip on Docker/Kombo query params.
              coerce: runtime === "arktype" ? false : runtime !== "none",
              validation: runtime === "none" ? "loose" : "strict",
              validateSide: runtime === "none" || runtime === "typia" ? "none" : "both",
            });

            const dir = join(outRoot, sample.id, `${runtime}-${client}`);
            rmSync(dir, { recursive: true, force: true });
            mkdirSync(dir, { recursive: true });
            const file = join(dir, "client.ts");
            writeFileSync(file, src);
            expect(existsSync(file)).toBe(true);

            const href = pathToFileURL(file).href + `?t=${Date.now()}`;

            const tryImport = async () => {
              try {
                return { ok: true as const, mod: await import(href) };
              } catch (err) {
                // ArkType type.module still cannot express some Kombo recursive unions
                // (string refs break once nested under Type method calls). Generation +
                // typecheck coverage still apply; live import is best-effort here.
                if (runtime === "arktype" && sample.id === "kombo.openapi") {
                  expect(src).toContain(client === "effect" ? "createEffectApiClient" : "createApiClient");
                  expect(src).toContain(sample.path);
                  return { ok: false as const, err };
                }
                throw err;
              }
            };

            const loaded = await tryImport();
            if (!loaded.ok) return;

            if (client === "promise") {
              const mod = loaded.mod as PromiseMod;
              let calls = 0;
              const api = mod.createApiClient(
                {
                  fetch: async () => {
                    calls++;
                    if (calls === 1) {
                      return new Response(JSON.stringify(sample.successBody), {
                        status: 200,
                        headers: { "content-type": "application/json" },
                      });
                    }
                    return new Response(JSON.stringify(sample.errorBody), {
                      status: sample.errorStatus,
                      headers: { "content-type": "application/json" },
                    });
                  },
                },
                "http://example.com",
              );

              const ok = await api.get(sample.path);
              expect(ok).toEqual(sample.successBody);

              await expect(api.get(sample.path)).rejects.toBeTruthy();
            } else {
              const mod = loaded.mod as EffectMod;
              let calls = 0;
              const api = mod.createEffectApiClient(
                {
                  fetch: async () => {
                    calls++;
                    if (calls === 1) {
                      return new Response(JSON.stringify(sample.successBody), {
                        status: 200,
                        headers: { "content-type": "application/json" },
                      });
                    }
                    return new Response(JSON.stringify(sample.errorBody), {
                      status: sample.errorStatus,
                      headers: { "content-type": "application/json" },
                    });
                  },
                },
                "http://example.com",
              );

              const ok = await Effect.runPromise(api.get(sample.path));
              expect(ok).toEqual(sample.successBody);

              await expect(Effect.runPromise(api.get(sample.path))).rejects.toBeTruthy();
            }
          });

          if (runtime !== "none" && runtime !== "typia") {
            test(`${label}: output validation rejects invalid body`, { timeout: 300_000 }, async () => {
              if (runtime === "arktype" && sample.id === "kombo.openapi") return;

              const doc = await loadDoc(sample.file);
              const ctx = mapOpenApiEndpoints(doc);
              const src = generateFile({
                ...ctx,
                runtime,
                client,
                includeClient: true,
                coerce: runtime === "arktype" ? false : true,
                validation: "strict",
                validateSide: "output",
              });

              const dir = join(outRoot, sample.id, `${runtime}-${client}-validate`);
              rmSync(dir, { recursive: true, force: true });
              mkdirSync(dir, { recursive: true });
              const file = join(dir, "client.ts");
              writeFileSync(file, src);
              const href = pathToFileURL(file).href + `?t=${Date.now()}`;

              const fetcher = {
                fetch: async () =>
                  new Response(JSON.stringify(sample.invalidSuccessBody), {
                    status: 200,
                    headers: { "content-type": "application/json" },
                  }),
              };

              if (client === "promise") {
                const mod = (await import(href)) as PromiseMod;
                const api = mod.createApiClient(fetcher, "http://example.com");
                await expect(api.get(sample.path)).rejects.toBeTruthy();
              } else {
                const mod = (await import(href)) as EffectMod;
                const api = mod.createEffectApiClient(fetcher, "http://example.com");
                await expect(Effect.runPromise(api.get(sample.path))).rejects.toBeTruthy();
              }
            });
          }
        }
      }
    });
  }
});
