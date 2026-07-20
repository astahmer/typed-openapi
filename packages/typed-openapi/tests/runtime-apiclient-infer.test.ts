import { describe, expect, test } from "vitest";
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile } from "../src/generator.ts";

const require = createRequire(import.meta.url);
const tscBin = require.resolve("typescript/bin/tsc");

const miniDoc = {
  openapi: "3.0.3",
  info: { title: "mini", version: "1" },
  paths: {
    "/pet": {
      put: {
        operationId: "updatePet",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Pet" },
            },
          },
        },
        responses: {
          "200": {
            description: "ok",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Pet" },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Pet: {
        type: "object",
        required: ["name"],
        properties: {
          name: { type: "string" },
          id: { type: "integer" },
        },
      },
    },
  },
} as unknown as OpenAPIObject;

describe("runtime ApiClient InferSchemaValue", () => {
  test("generated zod client exposes InferSchemaValue helper", () => {
    const ctx = mapOpenApiEndpoints(miniDoc);
    const out = generateFile({ ...ctx, runtime: "zod", includeClient: true });
    expect(out).toContain("type InferSchemaValue<T>");
    expect(out).toContain("z.infer<T>");
    expect(out).toContain("InferSchemaValue<UParams>");
    expect(out).toContain("TypedApiResponse<InferSchemaValue<TResponses>");
  });

  test("zod ApiClient method params typecheck as inferred Pet, not ZodType", { timeout: 30_000 }, () => {
    const ctx = mapOpenApiEndpoints(miniDoc);
    const client = generateFile({ ...ctx, runtime: "zod", includeClient: true });

    const dir = join(__dirname, "../tmp/runtime-apiclient-infer");
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "client.ts"), client);
    writeFileSync(
      join(dir, "usage.ts"),
      `
import { ApiClient, type Pet } from "./client";

declare const api: ApiClient;

async function ok() {
  const pet: Pet = { name: "x" };
  await api.put("/pet", { body: pet });
}

async function bad() {
  // @ts-expect-error body must be Pet, not a string
  await api.put("/pet", { body: "nope" });
}

void ok;
void bad;
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
        include: ["*.ts"],
      }),
    );

    try {
      execFileSync(process.execPath, [tscBin, "-p", dir, "--pretty", "false"], {
        cwd: join(__dirname, ".."),
        stdio: "pipe",
        encoding: "utf8",
      });
    } catch (err: any) {
      expect.fail(`${err.stdout ?? ""}${err.stderr ?? ""}`);
    }
  });
});
