import { describe, expect, test } from "vitest";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { generateFile } from "../../src/generator.ts";
import { mapOpenApiEndpoints } from "../../src/map-openapi-endpoints.ts";

const pkgRequire = createRequire(import.meta.url);
const tscBin = pkgRequire.resolve("typescript/bin/tsc");
const tmpRoot = join(__dirname, "../../tmp/lazy-recursive-e2e");

/** Resolve package root directory (handles packages that block ./package.json exports). */
const resolvePkgRoot = (name: string): string => {
  const entry = pkgRequire.resolve(name);
  let dir = dirname(entry);
  for (let i = 0; i < 8; i++) {
    if (existsSync(join(dir, "package.json"))) {
      try {
        const pkg = JSON.parse(readFileSync(join(dir, "package.json"), "utf8")) as { name?: string };
        if (pkg.name === name || (pkg.name && name.startsWith(pkg.name + "/"))) return dir;
      } catch {
        // continue
      }
      if (basename(dir) === name || basename(dir) === name.split("/").pop()) return dir;
    }
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  throw new Error(`Cannot resolve package root for ${name} (from ${entry})`);
};

const circularDoc = {
  openapi: "3.0.3",
  info: { title: "circular", version: "1" },
  components: {
    schemas: {
      Json: {
        oneOf: [
          { type: "string" },
          { type: "number" },
          { type: "boolean" },
          { $ref: "#/components/schemas/JsonObject" },
          { $ref: "#/components/schemas/JsonArray" },
        ],
      },
      JsonObject: {
        type: "object",
        additionalProperties: { $ref: "#/components/schemas/Json" },
      },
      JsonArray: {
        type: "array",
        items: { $ref: "#/components/schemas/Json" },
      },
    },
  },
  paths: {
    "/v": {
      get: {
        operationId: "getJson",
        responses: {
          "200": {
            description: "ok",
            content: {
              "application/json": { schema: { $ref: "#/components/schemas/Json" } },
            },
          },
        },
      },
    },
  },
} as OpenAPIObject;

describe("lazy recursive schema types e2e", () => {
  test.each([
    { runtime: "zod" as const, importName: "zod", marker: "z.ZodType<Json>" },
    { runtime: "valibot" as const, importName: "valibot", marker: "v.GenericSchema<Json>" },
    { runtime: "effect" as const, importName: "effect", marker: "Schema.Schema<Json>" },
  ])("$runtime typechecks recursive JSON without TS7022", { timeout: 60_000 }, ({ runtime, importName, marker }) => {
    mkdirSync(tmpRoot, { recursive: true });
    const dir = mkdtempSync(join(tmpRoot, `${runtime}-`));

    const code = generateFile({
      ...mapOpenApiEndpoints(circularDoc),
      runtime,
      schemasOnly: true,
    });
    expect(code).toContain(marker);
    expect(code).toMatch(/export interface JsonObject/);
    const schemasPath = join(dir, "schemas.ts");
    const usagePath = join(dir, "usage.ts");
    writeFileSync(schemasPath, code);

    const pkgRoot = resolvePkgRoot(importName);
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
            ignoreDeprecations: "6.0",
            paths: {
              [importName]: [pkgRoot],
              [`${importName}/*`]: [join(pkgRoot, "*")],
            },
            baseUrl: ".",
          },
          include: ["schemas.ts", "usage.ts"],
        },
        null,
        2,
      ),
    );

    writeFileSync(
      usagePath,
      `
import type { Json, JsonObject } from "./schemas.ts";
const value: Json = { nested: ["ok", 1, true, { deep: "x" }] };
const obj: JsonObject = { a: value };
void obj;
const fromString: Json = "hello";
void fromString;
`,
    );

    expect(existsSync(schemasPath)).toBe(true);
    expect(existsSync(usagePath)).toBe(true);

    let out = "";
    try {
      execFileSync(process.execPath, [tscBin, "-p", dir, "--pretty", "false"], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
      });
    } catch (err: any) {
      out = `${err.stdout ?? ""}${err.stderr ?? ""}`;
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
    expect(out).not.toContain("error TS7022");
    expect(out).not.toContain("error TS7024");
    expect(out).not.toContain("error TS2456");
    expect(out).not.toMatch(/\berror TS\d+:/);
  });
});
