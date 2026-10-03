import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import * as v from "valibot";
import { describe, expect, test } from "vitest";
import { generateFile, generateRuntimeTypeDeclarations } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { valibotAdapter } from "../src/runtimes/valibot/index.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";

const ctx = createEmitCtx(resolveValidationPolicy("strict"));
const nullableEnum = { enum: ["ready", null] };
const mixedEnum = { enum: ["ready", 0, false, null] };
const nullOnlyEnum = { enum: [null] };

const doc = {
  openapi: "3.1.0",
  info: { title: "Null enum values", version: "1" },
  components: {
    schemas: {
      Nullable: nullableEnum,
      Mixed: mixedEnum,
      NullOnly: nullOnlyEnum,
      Payload: {
        type: "object",
        required: ["nullable", "mixed", "nullOnly"],
        properties: {
          nullable: { $ref: "#/components/schemas/Nullable" },
          mixed: { $ref: "#/components/schemas/Mixed" },
          nullOnly: { $ref: "#/components/schemas/NullOnly" },
        },
      },
    },
  },
  paths: {
    "/values": {
      post: {
        operationId: "postValues",
        requestBody: {
          required: true,
          content: { "application/json": { schema: { $ref: "#/components/schemas/Payload" } } },
        },
        responses: {
          "200": {
            description: "Values",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Payload" } } },
          },
        },
      },
    },
  },
} satisfies OpenAPIObject;

describe("Valibot null literals", () => {
  test("emits a null schema for a literal IR node", () => {
    const source = valibotAdapter.emitNode({ kind: "literal", value: null, meta: {} }, ctx);
    expect(source).toBe("v.null()");
    const schema = new Function("v", `return ${source}`)(v);
    expect(v.safeParse(schema, null).success).toBe(true);
    expect(v.safeParse(schema, "null").success).toBe(false);
    expect(v.safeParse(schema, undefined).success).toBe(false);
  });

  test.each([
    { name: "nullable", definition: nullableEnum, valid: ["ready", null] },
    { name: "mixed", definition: mixedEnum, valid: ["ready", 0, false, null] },
    { name: "null only", definition: nullOnlyEnum, valid: [null] },
  ])("validates $name enum members without broadening the union", ({ definition, valid }) => {
    const node = openApiToIr(definition, { getRefName: (ref) => ref });
    const source = valibotAdapter.emitNode(node, ctx);
    expect(source).not.toContain("v.literal(null)");
    const schema = new Function("v", `return ${source}`)(v);
    for (const value of valid) expect(v.safeParse(schema, value).success).toBe(true);
    for (const value of [undefined, "null", "other", 1, true, {}, []]) {
      expect(v.safeParse(schema, value).success).toBe(false);
    }
  });

  test.each([false, true])(
    "generated client validates and typechecks (sidecar: %s)",
    { timeout: 30_000 },
    async (sidecar) => {
      const root = join(__dirname, "../tmp");
      mkdirSync(root, { recursive: true });
      const dir = mkdtempSync(join(root, "valibot-null-"));
      try {
        const options = {
          ...mapOpenApiEndpoints(doc),
          runtime: "valibot" as const,
          validation: "strict" as const,
          coerce: false,
          ...(sidecar ? { runtimeTypeDeclarations: "./client.types.js" } : {}),
        };
        writeFileSync(join(dir, "client.ts"), generateFile(options));
        if (sidecar) writeFileSync(join(dir, "client.types.d.ts"), generateRuntimeTypeDeclarations(options));
        writeFileSync(
          join(dir, "consumer.ts"),
          `
import * as v from "valibot";
import { createApiClient, Nullable, Mixed, NullOnly } from "./client.ts";
const nullable: Nullable = null;
const mixed: Mixed[] = ["ready", 0, false, null];
const nullOnly: NullOnly = null;
// @ts-expect-error Null-only enums reject strings.
const invalidNull: NullOnly = "null";
// @ts-expect-error Mixed enum types retain their exact members.
const invalidMixed: Mixed = 1;
const parsed: null = v.parse(NullOnly, null);
const api = createApiClient({ fetch: async () => new Response() });
api.post("/values", { body: { nullable, mixed: null, nullOnly } });
// @ts-expect-error Requests retain their exact enum members.
api.post("/values", { body: { nullable: "other", mixed: null, nullOnly } });
api.post("/values", { body: { nullable, mixed: false, nullOnly } }).then((result) => {
  const output: "ready" | 0 | false | null = result.mixed;
  // @ts-expect-error Responses retain null as a possible value.
  const invalidOutput: string = result.mixed;
});
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
              allowImportingTsExtensions: true,
              types: [],
            },
            include: ["client.ts", "client.types.d.ts", "consumer.ts"],
          }),
        );
        const tsc = createRequire(import.meta.url).resolve("typescript/bin/tsc");
        const result = spawnSync(process.execPath, [tsc, "-p", dir, "--pretty", "false"], { encoding: "utf8" });
        expect(result.status, `${result.stdout}${result.stderr}`).toBe(0);

        const module = await import(pathToFileURL(join(dir, "client.ts")).href);
        let response: unknown = { nullable: null, mixed: null, nullOnly: null };
        const api = module.createApiClient(
          {
            fetch: async () =>
              new Response(JSON.stringify(response), { headers: { "content-type": "application/json" } }),
          },
          "https://example.com",
        );
        const body = { nullable: null, mixed: 0, nullOnly: null };
        await expect(api.post("/values", { body })).resolves.toEqual(response);
        response = { nullable: "ready", mixed: false, nullOnly: null };
        await expect(api.post("/values", { body })).resolves.toEqual(response);
        response = { nullable: null, mixed: "other", nullOnly: null };
        await expect(api.post("/values", { body })).rejects.toThrow();
        response = { nullable: null, mixed: null };
        await expect(api.post("/values", { body })).rejects.toThrow();
      } finally {
        rmSync(dir, { recursive: true, force: true });
      }
    },
  );
});
