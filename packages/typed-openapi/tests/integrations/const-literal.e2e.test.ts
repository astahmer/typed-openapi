import { describe, expect, test } from "vitest";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { z } from "zod";
import { generateFile } from "../../src/generator.ts";
import { mapOpenApiEndpoints } from "../../src/map-openapi-endpoints.ts";
import { getRuntimeAdapter } from "../../src/runtimes/registry.ts";
import { createEmitCtx } from "../../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../../src/runtimes/validation.ts";
import { openApiToIr } from "../../src/schema-ir/openapi-to-ir.ts";
import { prettify } from "../../src/format.ts";

const tmp = join(__dirname, "../../tmp/const-literal-e2e");
const irCtx = { getRefName: (ref: string) => ref };

describe("const literal e2e", () => {
  test("zod parse accepts only the const value", async () => {
    const adapter = getRuntimeAdapter("zod");
    const ctx = createEmitCtx(resolveValidationPolicy("formats"), new Set());
    const expr = adapter.emitNode(openApiToIr({ type: "string", const: "success" }, irCtx), ctx);
    const schema = new Function("z", `return ${expr}`)(z) as z.ZodType;
    expect(schema.parse("success")).toBe("success");
    expect(() => schema.parse("error")).toThrow();
  });

  test("generated none client types: status is literal success", async () => {
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const doc = {
      openapi: "3.1.0",
      info: { title: "t", version: "1" },
      components: {
        schemas: {
          Ok: {
            type: "object",
            required: ["status"],
            properties: {
              status: { type: "string", const: "success" },
            },
          },
        },
      },
      paths: {
        "/ok": {
          get: {
            operationId: "getOk",
            responses: {
              "200": {
                description: "ok",
                content: {
                  "application/json": { schema: { $ref: "#/components/schemas/Ok" } },
                },
              },
            },
          },
        },
      },
    } as OpenAPIObject;

    const src = await prettify(generateFile({ ...mapOpenApiEndpoints(doc), runtime: "none" }));
    writeFileSync(join(tmp, "client.ts"), src);

    // Type-level check via assignability probe
    writeFileSync(
      join(tmp, "probe.ts"),
      `
import type { Schemas } from "./client.ts";
type Status = Schemas.Ok["status"];
const _ok: Status = "success";
// @ts-expect-error only const literal allowed
const _bad: Status = "error";
`,
    );

    const { execFileSync } = await import("node:child_process");
    const { createRequire } = await import("node:module");
    const require = createRequire(import.meta.url);
    const tscBin = require.resolve("typescript/bin/tsc");
    writeFileSync(
      join(tmp, "tsconfig.json"),
      JSON.stringify({
        compilerOptions: {
          strict: true,
          noEmit: true,
          skipLibCheck: true,
          module: "ESNext",
          moduleResolution: "bundler",
          target: "ES2022",
          lib: ["ES2022", "DOM"],
        },
        include: ["client.ts", "probe.ts"],
      }),
    );

    let out = "";
    try {
      execFileSync(process.execPath, [tscBin, "-p", tmp, "--pretty", "false"], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
      });
    } catch (err: any) {
      out = `${err.stdout ?? ""}${err.stderr ?? ""}`;
    }
    expect(out).not.toMatch(/\berror TS\d+:/);
  });

  test("valibot const literal round-trip", async () => {
    const dir = join(tmp, "valibot");
    rmSync(dir, { recursive: true, force: true });
    mkdirSync(dir, { recursive: true });
    const adapter = getRuntimeAdapter("valibot");
    const ctx = createEmitCtx(resolveValidationPolicy("formats"), new Set());
    const expr = adapter.emitNode(openApiToIr({ type: "string", const: "success" }, irCtx), ctx);
    writeFileSync(join(dir, "schema.ts"), `import * as v from "valibot";\nexport const schema = ${expr};\n`);
    const mod = await import(pathToFileURL(join(dir, "schema.ts")).href + `?t=${Date.now()}`);
    const { parse } = await import("valibot");
    expect(parse(mod.schema, "success")).toBe("success");
  });
});
