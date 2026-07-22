import { existsSync, mkdirSync, writeFileSync, rmSync, readdirSync, readFileSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { describe, expect, test } from "vitest";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../../src/map-openapi-endpoints.ts";
import { generateFile, type OutputRuntime } from "../../src/generator.ts";
import { filterTypecheckDiagnostics } from "../helpers/typecheck-filters.ts";

const require = createRequire(import.meta.url);
const tscBin = require.resolve("typescript/bin/tsc");
const pkgRoot = join(__dirname, "../..");
const pkgRequire = createRequire(join(pkgRoot, "package.json"));
const outRoot = join(__dirname, "../../tmp/runtime-matrix-typecheck");

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

type SampleCase = {
  id: string;
  file: string;
  path: string;
  /** Kombo has deep recursive JSON Schema that TS cannot express as type aliases / z.lazy without annotations. */
  allowCircularDiagnostics?: boolean;
};

const samples: SampleCase[] = [
  { id: "kombo.openapi", file: "kombo.openapi.json", path: "/check-api-key", allowCircularDiagnostics: true },
  { id: "docker.openapi", file: "docker.openapi.yaml", path: "/version" },
];

const resolvePkgRoot = (name: string): string => {
  const entry = pkgRequire.resolve(name);
  let dir = dirname(entry);
  for (let i = 0; i < 8; i++) {
    if (existsSync(join(dir, "package.json"))) {
      try {
        const pkg = JSON.parse(readFileSync(join(dir, "package.json"), "utf8")) as { name?: string };
        if (pkg.name === name || name.startsWith((pkg.name ?? "") + "/")) return dir;
      } catch {
        // continue
      }
      if (basename(dir) === name || basename(dir) === name.split("/").pop()) return dir;
    }
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  throw new Error(`Cannot resolve package root for ${name}`);
};

const resolveZod3 = (): string | undefined => {
  const pnpmZod3 = join(__dirname, "../../../../node_modules/.pnpm");
  if (!existsSync(pnpmZod3)) return;
  const entry = readdirSync(pnpmZod3).find((d) => d.startsWith("zod@3."));
  return entry ? join(pnpmZod3, entry, "node_modules/zod") : undefined;
};

/** Keep diagnostics that affect usage.ts (the matrix assertion). Exported for unit coverage. */
export const filterDiagnostics = (out: string, allowCircular: boolean, runtime?: string): string =>
  filterTypecheckDiagnostics(out, {
    allowCircular,
    runtime,
    alwaysKeepPathSubstring: "/usage.ts(",
  });

const hasError = (out: string) => /\berror TS\d+:/.test(out);

describe("filterDiagnostics (kombo allowlist)", () => {
  const usage = "tmp/x/usage.ts(1,1): error TS2502: keep me";
  const client2502 = "tmp/x/client.ts(1,1): error TS2502: circular leftover";
  const clientLazy = "tmp/x/client.ts(1,1): error TS7022: must surface";
  const clientArk = "tmp/x/client.ts(1,1): error TS2322: arktype must surface now";

  test("always keeps usage.ts errors", () => {
    expect(filterDiagnostics(usage, true, "arktype")).toContain("error TS2502");
  });

  test("drops TS2502 on generated client when allowCircular; keeps arktype TS2322", () => {
    const out = filterDiagnostics([clientArk, clientLazy, client2502].join("\n"), true, "arktype");
    expect(out).toContain("TS2322");
    expect(out).not.toContain("TS2502");
    expect(out).toContain("TS7022");
  });

  test("does not drop client errors for non-kombo samples", () => {
    expect(filterDiagnostics(client2502, false, "arktype")).toContain("TS2502");
  });
});

describe("runtime×client typecheck matrix", () => {
  mkdirSync(outRoot, { recursive: true });

  const effectRoot = resolvePkgRoot("effect");
  const valibotRoot = resolvePkgRoot("valibot");
  const arktypeRoot = resolvePkgRoot("arktype");
  const zod4Root = resolvePkgRoot("zod");
  const effectSchemaRoot = resolvePkgRoot("@effect/schema");
  const typeboxRoot = resolvePkgRoot("@sinclair/typebox");
  const typiaRoot = resolvePkgRoot("typia");
  const zod3Root = resolveZod3();

  for (const sample of samples) {
    for (const runtime of runtimes) {
      for (const client of clients) {
        test(`${sample.id} ${runtime}+${client}`, { timeout: 300_000 }, async () => {
          if (runtime === "zod3" && !zod3Root) {
            expect.fail("zod@3 not found in pnpm store");
          }

          const doc = (await SwaggerParser.parse(join(__dirname, "../samples", sample.file))) as OpenAPIObject;
          const ctx = mapOpenApiEndpoints(doc);
          const code = generateFile({
            ...ctx,
            runtime,
            client,
            includeClient: true,
            coerce: runtime === "arktype" ? false : runtime !== "none",
            validation: runtime === "none" ? "loose" : "strict",
          });

          const dir = join(outRoot, sample.id, `${runtime}-${client}`);
          rmSync(dir, { recursive: true, force: true });
          mkdirSync(dir, { recursive: true });
          writeFileSync(join(dir, "client.ts"), code);

          const usageBody =
            client === "effect"
              ? `
import { Effect } from "effect";
import { createEffectApiClient, type EffectApiClient } from "./client";

declare const api: EffectApiClient;

async function ok() {
  await Effect.runPromise(api.get(${JSON.stringify(sample.path)}));
}

async function bad() {
  // @ts-expect-error path must be a known endpoint
  await Effect.runPromise(api.get("/nope-not-real"));
}

void ok;
void bad;
void createEffectApiClient;
`
              : `
import { createApiClient, type ApiClient } from "./client";

declare const api: ApiClient;

async function ok() {
  await api.get(${JSON.stringify(sample.path)});
}

async function bad() {
  // @ts-expect-error path must be a known endpoint
  await api.get("/nope-not-real");
}

void ok;
void bad;
void createApiClient;
`;

          writeFileSync(join(dir, "usage.ts"), usageBody);

          const paths: Record<string, string[]> = {
            effect: [effectRoot],
            "effect/*": [join(effectRoot, "*")],
            valibot: [valibotRoot],
            "valibot/*": [join(valibotRoot, "*")],
            arktype: [arktypeRoot],
            "arktype/*": [join(arktypeRoot, "*")],
            zod: [runtime === "zod3" ? zod3Root! : zod4Root],
            "zod/*": [join(runtime === "zod3" ? zod3Root! : zod4Root, "*")],
            "@effect/schema": [effectSchemaRoot],
            "@effect/schema/*": [join(effectSchemaRoot, "*")],
            "@sinclair/typebox": [typeboxRoot],
            "@sinclair/typebox/*": [join(typeboxRoot, "*")],
            typia: [typiaRoot],
            "typia/*": [join(typiaRoot, "*")],
          };

          writeFileSync(
            join(dir, "tsconfig.json"),
            JSON.stringify(
              {
                compilerOptions: {
                  strict: true,
                  noEmit: true,
                  skipLibCheck: true,
                  module: "ESNext",
                  moduleResolution: "bundler",
                  target: "ES2022",
                  lib: ["ES2022", "DOM"],
                  types: [],
                  paths,
                  baseUrl: ".",
                  ignoreDeprecations: "6.0",
                },
                include: ["client.ts", "usage.ts"],
              },
              null,
              2,
            ),
          );

          let out = "";
          try {
            execFileSync(process.execPath, [tscBin, "-p", dir, "--pretty", "false"], {
              cwd: pkgRoot,
              stdio: ["ignore", "pipe", "pipe"],
              encoding: "utf8",
            });
          } catch (err: any) {
            out = `${err.stdout ?? ""}${err.stderr ?? ""}`;
          }

          const filtered = filterDiagnostics(out, Boolean(sample.allowCircularDiagnostics), runtime);
          if (hasError(filtered)) {
            expect.fail(`tsc failed for ${sample.id}/${runtime}+${client}:\n${filtered.slice(0, 8000)}`);
          }
        });
      }
    }
  }
});
