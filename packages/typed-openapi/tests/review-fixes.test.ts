import { describe, expect, test } from "vitest";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { z } from "zod";
import { openApiToIr } from "../src/schema-ir/openapi-to-ir.ts";
import { irToTs, buildIrToTsOptions } from "../src/schema-ir/ir-to-ts.ts";
import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { getRuntimeAdapter } from "../src/runtimes/registry.ts";
import { createEmitCtx } from "../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";
import { parseSecuritySchemes, generateAuthHelpersSource } from "../src/security.ts";
import { filterTypecheckDiagnostics } from "./helpers/typecheck-filters.ts";
import { prettify } from "../src/format.ts";

const irCtx = { getRefName: (ref: string) => ref.replace(/^#\/components\/schemas\//, "") };
const tmp = join(__dirname, "../tmp/review-fixes");

describe("complex enum IR (C002)", () => {
  test("object enum members become union of object literals — not null", () => {
    const node = openApiToIr(
      {
        enum: [
          { kind: "a", n: 1 },
          { kind: "b", n: 2 },
        ],
      },
      irCtx,
    );
    expect(node).toMatchObject({ kind: "union" });
    if (node.kind !== "union") throw new Error("expected union");
    expect(node.members).toHaveLength(2);
    expect(node.members[0]).toMatchObject({
      kind: "object",
      properties: { kind: { kind: "literal", value: "a" }, n: { kind: "literal", value: 1 } },
    });
    expect(JSON.stringify(node)).not.toContain('"kind":"null"');
  });

  test("mixed primitive + object enum becomes union", () => {
    const node = openApiToIr({ enum: [1, { x: true }] }, irCtx);
    expect(node.kind).toBe("union");
  });

  test("primitive multi-enum still kind enum", () => {
    expect(openApiToIr({ type: "string", enum: ["a", "b"] }, irCtx)).toMatchObject({
      kind: "enum",
      values: ["a", "b"],
    });
  });

  test("typed string enum with objects still uses union path via enumToIr", () => {
    // type:string with non-string enum values is weird OAS but must not coerce to null
    const node = openApiToIr({ type: "string", enum: [{ a: 1 }, { a: 2 }] }, irCtx);
    expect(node.kind).toBe("union");
  });
});

describe("readonlyArrays IrToTs option (C004)", () => {
  test("emits ReadonlyArray when flagged", () => {
    const node = openApiToIr({ type: "array", items: { type: "string" } }, irCtx);
    expect(irToTs(node, buildIrToTsOptions({ readonlyArrays: true }))).toBe("ReadonlyArray<string>");
    expect(irToTs(node, buildIrToTsOptions({}))).toBe("Array<string>");
  });
});

describe("apiKey missing in (C006)", () => {
  test("invalid in → supported false; applyAuth skips", () => {
    const schemes = parseSecuritySchemes({
      openapi: "3.1.0",
      info: { title: "t", version: "1" },
      paths: {},
      components: {
        securitySchemes: {
          BadKey: { type: "apiKey", name: "X-Key", in: "body" as "header" },
          NoIn: { type: "apiKey", name: "X-Key" } as never,
          Ok: { type: "apiKey", name: "X-Key", in: "header" },
        },
      },
    } as OpenAPIObject);
    const bad = schemes.find((s) => s.name === "BadKey");
    const noIn = schemes.find((s) => s.name === "NoIn");
    const ok = schemes.find((s) => s.name === "Ok");
    expect(bad?.supported).toBe(false);
    expect(noIn?.supported).toBe(false);
    expect(ok?.supported).toBe(true);
    const src = generateAuthHelpersSource(schemes);
    expect(src).toMatch(/not applied automatically/);
    // Only supported apiKeys appear in applyAuth body (Ok → header set).
    expect(src).toContain('headers.set("X-Key"');
    expect(src.match(/headers\.set\("X-Key"/g)?.length).toBe(1);
  });
});

describe("shared typecheck filters (C011)", () => {
  test("kombo arktype drops TS2322 but keeps TS7022", () => {
    const out = filterTypecheckDiagnostics(
      ["a.ts(1,1): error TS2322: x", "a.ts(2,1): error TS7022: y"].join("\n"),
      { allowCircular: true, runtime: "arktype" },
    );
    expect(out).not.toContain("TS2322");
    expect(out).toContain("TS7022");
  });

  test("alwaysKeepPathSubstring wins over allowlist", () => {
    const out = filterTypecheckDiagnostics("tmp/usage.ts(1,1): error TS2322: keep", {
      allowCircular: true,
      runtime: "arktype",
      alwaysKeepPathSubstring: "/usage.ts(",
    });
    expect(out).toContain("TS2322");
  });
});

describe("nullable recursive explicit types (C003)", () => {
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

  test.each(["zod", "zod3", "valibot"] as const)("%s emits explicit type + annotation for nullable recursive", (runtime) => {
    const src = generateFile({
      ...mapOpenApiEndpoints(doc),
      runtime,
      schemasOnly: true,
      includeClient: false,
    });
    expect(src).toMatch(/export (?:type|interface) Node/);
    if (runtime === "valibot") {
      expect(src).toMatch(/export const Node: v\.GenericSchema<Node> =/);
    } else {
      expect(src).toMatch(/export const Node: z\.ZodType<Node> =/);
    }
    expect(src).toMatch(/\.lazy\(/);
  });

  test("effect emits NameCore + Name | null for nullable recursive", () => {
    const src = generateFile({
      ...mapOpenApiEndpoints(doc),
      runtime: "effect",
      schemasOnly: true,
      includeClient: false,
    });
    expect(src).toMatch(/export (?:type|interface) NodeCore/);
    expect(src).toContain("export type Node = NodeCore | null");
    expect(src).toContain("Schema.Schema<NodeCore>");
  });
});

describe("complex enum runtime + e2e (C002)", () => {
  test("zod parses object-enum union", () => {
    const adapter = getRuntimeAdapter("zod");
    const ctx = createEmitCtx(resolveValidationPolicy("formats"), new Set());
    const node = openApiToIr(
      {
        enum: [
          { op: "add", n: 1 },
          { op: "sub", n: 2 },
        ],
      },
      irCtx,
    );
    const expr = adapter.emitNode(node, ctx);
    const schema = new Function("z", `return ${expr}`)(z) as z.ZodType;
    expect(schema.safeParse({ op: "add", n: 1 }).success).toBe(true);
    expect(schema.safeParse({ op: "mul", n: 1 }).success).toBe(false);
  });

  test("generated none client typechecks object enum", { timeout: 60_000 }, async () => {
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });
    const doc = {
      openapi: "3.1.0",
      info: { title: "t", version: "1" },
      components: {
        schemas: {
          Op: {
            enum: [
              { op: "add", n: 1 },
              { op: "sub", n: 2 },
            ],
          },
        },
      },
      paths: {
        "/op": {
          get: {
            operationId: "getOp",
            responses: {
              "200": {
                description: "ok",
                content: { "application/json": { schema: { $ref: "#/components/schemas/Op" } } },
              },
            },
          },
        },
      },
    } as OpenAPIObject;
    const src = await prettify(generateFile({ ...mapOpenApiEndpoints(doc), runtime: "none" }));
    writeFileSync(join(tmp, "client.ts"), src);
    writeFileSync(
      join(tmp, "probe.ts"),
      `
import type { Schemas } from "./client.ts";
type Op = Schemas.Op;
const _ok: Op = { op: "add", n: 1 };
// @ts-expect-error wrong discriminant
const _bad: Op = { op: "mul", n: 1 };
`,
    );
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
});
