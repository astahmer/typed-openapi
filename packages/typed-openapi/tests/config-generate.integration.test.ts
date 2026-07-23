import { describe, expect, test, vi } from "vitest";
import { mkdirSync, writeFileSync, rmSync, readFileSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import SwaggerParser from "@apidevtools/swagger-parser";
import { generateClientFiles } from "../src/generate-client-files.ts";

const tmp = join(__dirname, "../tmp/config-generate-integration");
const pkgRoot = join(__dirname, "..");

describe("generateClientFiles + config file integration", () => {
  test("runtime clients emit declaration sidecars by default and allow opting out", async () => {
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });
    const specPath = join(tmp, "runtime-types.openapi.json");
    writeFileSync(
      specPath,
      JSON.stringify({
        openapi: "3.0.3",
        info: { title: "runtime types", version: "1" },
        paths: { "/hello": { get: { operationId: "getHello", responses: { "200": { description: "ok" } } } } },
      }),
    );

    const runtimeOutput = join(tmp, "runtime.ts");
    await generateClientFiles(specPath, { output: runtimeOutput, runtime: "zod", format: false });
    expect(existsSync(join(tmp, "runtime.types.d.ts"))).toBe(true);

    const optOutOutput = join(tmp, "runtime-opt-out.ts");
    await generateClientFiles(specPath, { output: optOutOutput, runtime: "zod", runtimeTypes: false, format: false });
    expect(existsSync(join(tmp, "runtime-opt-out.types.d.ts"))).toBe(false);

    const typesOnlyOutput = join(tmp, "types-only.ts");
    await generateClientFiles(specPath, { output: typesOnlyOutput, runtime: "none", format: false });
    expect(existsSync(join(tmp, "types-only.types.d.ts"))).toBe(false);
  });

  test("writes HTTP input output to inputDir when no output is specified", async () => {
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const bundle = vi.spyOn(SwaggerParser, "bundle").mockResolvedValue({
      openapi: "3.0.3",
      info: { title: "remote", version: "1" },
      paths: {},
    } as never);

    try {
      const input = "https://schemas.example.test/openapi.json";
      const inputDir = relative(pkgRoot, join(tmp, "remote-output"));

      await generateClientFiles(input, { inputDir });

      expect(existsSync(join(tmp, "remote-output", "openapi.json.client.ts"))).toBe(true);
      expect(existsSync(join(pkgRoot, "https:/schemas.example.test"))).toBe(false);

      const output = relative(pkgRoot, join(tmp, "explicit-output.ts"));
      await generateClientFiles(input, { inputDir, output });
      expect(existsSync(join(tmp, "explicit-output.ts"))).toBe(true);
    } finally {
      bundle.mockRestore();
    }
  });

  test("config enables msw, tanstack, transformDates without CLI flags", async () => {
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const openapiPath = join(tmp, "mini.openapi.json");
    writeFileSync(
      openapiPath,
      JSON.stringify({
        openapi: "3.0.3",
        info: { title: "mini", version: "1" },
        paths: {
          "/hello": {
            get: {
              operationId: "getHello",
              responses: {
                "200": {
                  description: "ok",
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        required: ["at", "id"],
                        properties: {
                          at: { type: "string", format: "date-time" },
                          id: { type: "integer", format: "int64" },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }),
    );

    // generateClientFiles joins output with process.cwd() — use paths relative to pkg root
    const outRel = relative(pkgRoot, join(tmp, "out.client.ts"));
    const configPath = join(tmp, "typed-openapi.config.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        runtime: "none",
        output: outRel,
        tanstack: true,
        msw: true,
        mswBaseUrl: "https://mini.test",
        transformDates: true,
        transformBigInt: true,
        format: false,
      }),
    );

    const prevCwd = process.cwd();
    process.chdir(pkgRoot);
    try {
      await generateClientFiles(relative(pkgRoot, openapiPath), { config: configPath });
    } finally {
      process.chdir(prevCwd);
    }

    expect(existsSync(join(tmp, "out.client.ts"))).toBe(true);
    expect(existsSync(join(tmp, "tanstack.client.ts"))).toBe(true);
    expect(existsSync(join(tmp, "msw.handlers.ts"))).toBe(true);

    const client = readFileSync(join(tmp, "out.client.ts"), "utf8");
    expect(client).toContain("at: Date");
    expect(client).toContain("id: bigint");
    expect(client).toContain("__reviveTransforms");

    const msw = readFileSync(join(tmp, "msw.handlers.ts"), "utf8");
    expect(msw).toContain("https://mini.test");
    expect(msw).toContain("export const handlers");

    const tanstack = readFileSync(join(tmp, "tanstack.client.ts"), "utf8");
    expect(tanstack).toContain("infiniteQueryOptions");
    expect(tanstack).toContain("queryKeyFactory");
  });

  test("config input alone drives generateClientFiles when CLI input omitted", async () => {
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const realSpec = join(tmp, "only-config.json");
    writeFileSync(
      realSpec,
      JSON.stringify({
        openapi: "3.0.3",
        info: { title: "cfg", version: "1" },
        paths: {
          "/from-config": {
            get: {
              operationId: "getFromConfig",
              responses: { "200": { description: "ok" } },
            },
          },
        },
      }),
    );

    const outRel = relative(pkgRoot, join(tmp, "from-config.client.ts"));
    const configPath = join(tmp, "typed-openapi.config.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        input: relative(pkgRoot, realSpec),
        output: outRel,
        format: false,
      }),
    );

    const prevCwd = process.cwd();
    process.chdir(pkgRoot);
    try {
      await generateClientFiles(undefined, { config: configPath });
    } finally {
      process.chdir(prevCwd);
    }

    const out = readFileSync(join(tmp, "from-config.client.ts"), "utf8");
    expect(out).toContain('"/from-config"');
  });

  test("CLI input wins over config input", async () => {
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const realSpec = join(tmp, "real.json");
    const fakeSpec = join(tmp, "fake.json");
    writeFileSync(
      realSpec,
      JSON.stringify({
        openapi: "3.0.3",
        info: { title: "real", version: "1" },
        paths: {
          "/real": {
            get: {
              operationId: "getReal",
              responses: { "200": { description: "ok" } },
            },
          },
        },
      }),
    );
    writeFileSync(
      fakeSpec,
      JSON.stringify({
        openapi: "3.0.3",
        info: { title: "fake", version: "1" },
        paths: {
          "/fake": {
            get: {
              operationId: "getFake",
              responses: { "200": { description: "ok" } },
            },
          },
        },
      }),
    );

    const outRel = relative(pkgRoot, join(tmp, "from-cli.client.ts"));
    const configPath = join(tmp, "typed-openapi.config.json");
    writeFileSync(
      configPath,
      JSON.stringify({
        input: relative(pkgRoot, fakeSpec),
        output: outRel,
        format: false,
      }),
    );

    const prevCwd = process.cwd();
    process.chdir(pkgRoot);
    try {
      await generateClientFiles(relative(pkgRoot, realSpec), { config: configPath });
    } finally {
      process.chdir(prevCwd);
    }

    const out = readFileSync(join(tmp, "from-cli.client.ts"), "utf8");
    expect(out).toContain('"/real"');
    expect(out).not.toContain('"/fake"');
  });
});
