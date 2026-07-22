/**
 * Nullable recursive Node e2e — complements review-fixes unit coverage (C003).
 */
import { describe, expect, test } from "vitest";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { generateFile } from "../../src/generator.ts";
import { mapOpenApiEndpoints } from "../../src/map-openapi-endpoints.ts";

const tmp = join(__dirname, "../../tmp/nullable-recursive-e2e");
const require = createRequire(import.meta.url);
const tscBin = require.resolve("typescript/bin/tsc");

const doc = {
  openapi: "3.1.0",
  info: { title: "t", version: "1" },
  components: {
    schemas: {
      Node: {
        type: "object",
        required: ["name"],
        nullable: true,
        properties: {
          name: { type: "string" },
          child: { $ref: "#/components/schemas/Node" },
        },
      },
    },
  },
  paths: {
    "/n": {
      get: {
        operationId: "getN",
        responses: {
          "200": {
            description: "ok",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Node" } } },
          },
        },
      },
    },
  },
} as OpenAPIObject;

describe("nullable recursive e2e (C003)", () => {
  test.each(["zod", "valibot"] as const)(
    "%s nullable recursive typechecks without TS7022/7024",
    { timeout: 60_000 },
    (runtime) => {
      const dir = join(tmp, runtime);
      rmSync(dir, { recursive: true, force: true });
      mkdirSync(dir, { recursive: true });
      const src = generateFile({
        ...mapOpenApiEndpoints(doc),
        runtime,
        schemasOnly: true,
        includeClient: false,
      });
      writeFileSync(join(dir, "schemas.ts"), src);
      writeFileSync(
        join(dir, "probe.ts"),
        `
import { Node } from "./schemas";
const _n: Node = { name: "root", child: null };
void _n;
`,
      );
      writeFileSync(
        join(dir, "tsconfig.json"),
        JSON.stringify({
          compilerOptions: {
            strict: true,
            noEmit: true,
            skipLibCheck: true,
            module: "ESNext",
            moduleResolution: "bundler",
            target: "ES2022",
          },
          include: ["schemas.ts", "probe.ts"],
        }),
      );
      let out = "";
      try {
        execFileSync(process.execPath, [tscBin, "-p", dir, "--pretty", "false"], {
          encoding: "utf8",
          stdio: ["ignore", "pipe", "pipe"],
        });
      } catch (err: any) {
        out = `${err.stdout ?? ""}${err.stderr ?? ""}`;
      }
      expect(out).not.toMatch(/error TS7022/);
      expect(out).not.toMatch(/error TS7024/);
      expect(out).not.toMatch(/\berror TS\d+:/);
    },
  );
});
