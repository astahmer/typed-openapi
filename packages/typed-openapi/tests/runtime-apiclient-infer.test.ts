import { describe, expect, test } from "vitest";
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile, generateRuntimeTypeDeclarations } from "../src/generator.ts";
import type { SchemaTransform } from "../src/types.ts";

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

const brandedDoc = {
  openapi: "3.0.3",
  info: { title: "branded", version: "1" },
  paths: {
    "/thing/{thingId}": {
      get: {
        operationId: "getThing",
        parameters: [
          {
            in: "path",
            name: "thingId",
            required: true,
            schema: { type: "string", format: "brand" },
          },
        ],
        responses: {
          "200": {
            description: "ok",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["id", "createdAt", "metadata"],
                  properties: {
                    id: { type: "string", format: "brand" },
                    createdAt: { type: "string", format: "date-time" },
                    metadata: {
                      type: "object",
                      additionalProperties: {
                        type: "object",
                        required: ["count"],
                        properties: { count: { type: "number" } },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/thing": {
      put: {
        operationId: "updateThing",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["id", "createdAt"],
                properties: {
                  id: { type: "string", format: "brand" },
                  createdAt: { type: "string", format: "date-time" },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "ok",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["id", "createdAt"],
                  properties: {
                    id: { type: "string", format: "brand" },
                    createdAt: { type: "string", format: "date-time" },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
} as unknown as OpenAPIObject;

const effectBrandTransform: SchemaTransform = (schema) =>
  schema.type === "string" && schema.format === "brand"
    ? { type: 'string & { readonly __brand: "ThingId" }', runtime: "Schema.String" }
    : schema.type === "string" && schema.format === "date-time"
      ? {
          type: '{ readonly Type: import("effect").DateTime.Utc; readonly Encoded: string }',
          runtime: "Schema.DateTimeUtcFromString",
        }
      : undefined;

describe("runtime ApiClient InferSchemaValue", () => {
  test("preserves class-instance members while recursively mapping runtime values", () => {
    const output = generateFile({ ...mapOpenApiEndpoints(miniDoc), runtime: "zod", includeClient: true });
    expect(output).toContain("T extends (...args: never[]) => unknown ? T :");
    expect(output).toContain("type InferSchemaInputRaw<T> =");

    const dir = join(__dirname, "../tmp/runtime-apiclient-class-instance");
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "client.ts"), output);
    writeFileSync(
      join(dir, "usage.ts"),
      `
import type { InferSchemaValue } from "./client";

declare const parsed: InferSchemaValue<{ createdAt: Date }>;
const createdAt: Date = parsed.createdAt;
parsed.createdAt.getTime();
void createdAt;
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
          lib: ["ES2022", "DOM"],
          types: [],
        },
        include: ["client.ts", "usage.ts"],
      }),
    );

    try {
      execFileSync(process.execPath, [tscBin, "-p", dir, "--pretty", "false"], {
        cwd: join(__dirname, ".."),
        stdio: ["ignore", "pipe", "pipe"],
        encoding: "utf8",
      });
    } catch (err: any) {
      expect.fail(`tsc failed for class-instance inference:\n${err.stdout ?? ""}${err.stderr ?? ""}`);
    }
  });

  test("runtime endpoint maps validate their sidecar paths without broad casts", () => {
    const ctx = mapOpenApiEndpoints(miniDoc);
    const output = generateFile({
      ...ctx,
      runtime: "effect",
      client: "effect",
      runtimeTypeDeclarations: "./client.types.js",
    });
    const start = output.indexOf("// <EndpointByMethod>");
    const end = output.indexOf("// </EndpointByMethod>");
    const endpointMap = output.slice(start, end);

    expect(endpointMap).toContain("satisfies {");
    expect(endpointMap).not.toContain("as any");
  });

  test("runtime sidecar markers are required so plain runtime objects cannot match them", () => {
    const output = generateFile({
      ...mapOpenApiEndpoints(miniDoc),
      runtime: "effect",
      client: "effect",
      runtimeTypeDeclarations: "./client.types.js",
    });

    expect(output).toContain("readonly __typedOpenapiOutput: TOutput;");
    expect(output).toContain("readonly __typedOpenapiInput: TInput;");
    expect(output).not.toContain("readonly __typedOpenapiOutput?: TOutput;");
    expect(output).not.toContain("readonly __typedOpenapiInput?: TInput;");
  });

  test("generated zod client exposes InferSchemaValue / InferSchemaInput helpers", () => {
    const ctx = mapOpenApiEndpoints(miniDoc);
    const out = generateFile({ ...ctx, runtime: "zod", includeClient: true });
    expect(out).toContain("export type InferSchemaValue<T>");
    expect(out).toContain("type InferSchemaInput<T>");
    expect(out).toContain("z.infer<T>");
    expect(out).toContain("z.input<T>");
    expect(out).toContain("InferSchemaInput<UParams>");
    expect(out).toContain("TypedApiResponse<InferSchemaValue<TResponses>");
    expect(out).not.toContain("MaybeOptionalArg<any>");
    expect(out).not.toContain("): Promise<any>");
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

  test("effect ApiClient preserves branded scalar values through deep inference", { timeout: 30_000 }, () => {
    const ctx = mapOpenApiEndpoints(brandedDoc, { transformSchema: effectBrandTransform });
    const options = {
      ...ctx,
      runtime: "effect",
      client: "effect",
      includeClient: true,
      transformSchema: effectBrandTransform,
      runtimeTypeDeclarations: "./client.types.js",
    } as const;
    const client = generateFile(options);

    const dir = join(__dirname, "../tmp/runtime-apiclient-branded-infer");
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "client.ts"), client);
    writeFileSync(join(dir, "client.types.d.ts"), generateRuntimeTypeDeclarations(options));
    writeFileSync(
      join(dir, "usage.ts"),
      `
import { EffectApiClient } from "./client";
import { Effect } from "effect";
import type { DateTime } from "effect";

declare const api: EffectApiClient;
type ThingId = string & { readonly __brand: "ThingId" };
type GetThingEndpoint = import("./client").GetEndpoints["/thing/{thingId}"];

  async function ok(id: ThingId) {
    const result = await Effect.runPromise(api.get("/thing/{thingId}", { path: { thingId: id } }));
    const responseId: ThingId = result.id;
    const createdAt: DateTime.Utc = result.createdAt;
    const metadataCount: number = result.metadata.item.count;
    const response = await Effect.runPromise(api.get("/thing/{thingId}", { path: { thingId: id }, withResponse: true }));
    const responseStatus: 200 = response.status;
    const responseDataId: ThingId = response.data.id;
    const explicit = await Effect.runPromise(
      api.get<"/thing/{thingId}", GetThingEndpoint>("/thing/{thingId}", { path: { thingId: id } }),
    );
    const explicitRequest = await Effect.runPromise(
      api.request<"get", "/thing/{thingId}", GetThingEndpoint>("get", "/thing/{thingId}", {
        path: { thingId: id },
      }),
    );
  void responseId;
  void createdAt;
  void metadataCount;
  void responseStatus;
  void responseDataId;
  void explicit;
  void explicitRequest;
}

async function bad() {
  // @ts-expect-error a raw string must not satisfy the branded path parameter
    await api.get("/thing/{thingId}", { path: { thingId: "raw" } });
}

async function update(id: ThingId, encodedCreatedAt: string, decodedCreatedAt: DateTime.Utc) {
  const result = await Effect.runPromise(
    api.put("/thing", { body: { id, createdAt: encodedCreatedAt } }),
  );
  const responseId: ThingId = result.id;
  const responseCreatedAt: DateTime.Utc = result.createdAt;

  // @ts-expect-error request bodies use the schema's encoded input type, not its decoded output type
  await api.put("/thing", { body: { id, createdAt: decodedCreatedAt } });

  void responseId;
  void responseCreatedAt;
}

void ok;
void bad;
void update;
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
