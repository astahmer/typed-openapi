import { describe, expect, test } from "vitest";
import { mkdirSync, writeFileSync, rmSync, readFileSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { generateClientFiles } from "../src/generate-client-files.ts";

const tmp = join(__dirname, "../tmp/config-generate-integration");
const pkgRoot = join(__dirname, "..");

describe("generateClientFiles + config file integration", () => {
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
    expect(client).toContain("__reviveDates");

    const msw = readFileSync(join(tmp, "msw.handlers.ts"), "utf8");
    expect(msw).toContain("https://mini.test");
    expect(msw).toContain("export const handlers");

    const tanstack = readFileSync(join(tmp, "tanstack.client.ts"), "utf8");
    expect(tanstack).toContain("infiniteQueryOptions");
    expect(tanstack).toContain("queryKeyFactory");
  });

  test("config input key is ignored when CLI input is provided (CFG-2)", async () => {
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
        input: fakeSpec,
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
