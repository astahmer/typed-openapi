import { describe, expect, test } from "vitest";
import { writeFileSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import {
  loadConfigFile,
  loadConfig,
  mergeConfigWithCli,
  applyGeneratorOptionDefaults,
  resolveValidationFromOptions,
  validationFromConfig,
  defineConfig,
  findDefaultConfigPath,
} from "../src/config.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";

const tmp = join(__dirname, "../tmp/config-tests");

describe("typed-openapi config file", () => {
  rmSync(tmp, { recursive: true, force: true });
  mkdirSync(tmp, { recursive: true });

  test("defineConfig is identity", () => {
    const cfg = defineConfig({ runtime: "zod", transformDates: true, tanstack: true });
    expect(cfg.runtime).toBe("zod");
    expect(cfg.transformDates).toBe(true);
    expect(cfg.tanstack).toBe(true);
  });

  test("loads fine-grained validation overrides", () => {
    const path = join(tmp, "typed-openapi.config.json");
    writeFileSync(
      path,
      JSON.stringify({
        runtime: "zod",
        validation: {
          preset: "formats",
          stringConstraints: true,
          numberConstraints: false,
        },
      }),
    );

    const cfg = loadConfigFile(path);
    expect(cfg.runtime).toBe("zod");
    const policy = resolveValidationPolicy(validationFromConfig(cfg.validation)!);
    expect(policy.formats).toBe(true);
    expect(policy.stringConstraints).toBe(true);
    expect(policy.numberConstraints).toBe(false);
    expect(policy.arrayConstraints).toBe(false);
  });

  test("CLI options override config file", () => {
    const merged = mergeConfigWithCli(
      { runtime: "zod", validation: "loose" },
      { runtime: "valibot", validation: undefined },
    );
    expect(merged.runtime).toBe("valibot");
    expect(merged.validation).toBe("loose");
  });

  test("cac-style undefined flags do not stomp config booleans", () => {
    const fromFile = mergeConfigWithCli(
      { jsdoc: false, format: true, includeClient: false, schemasOnly: true },
      {
        jsdoc: undefined,
        format: undefined,
        includeClient: undefined,
        schemasOnly: undefined,
        runtime: "zod",
      },
    );
    expect(fromFile.jsdoc).toBe(false);
    expect(fromFile.format).toBe(true);
    expect(fromFile.includeClient).toBe(false);
    expect(fromFile.schemasOnly).toBe(true);

    const withDefaults = applyGeneratorOptionDefaults(fromFile);
    expect(withDefaults.jsdoc).toBe(false);
    expect(withDefaults.format).toBe(true);
    expect(withDefaults.includeClient).toBe(false);
    expect(withDefaults.schemasOnly).toBe(true);
  });

  test("applyGeneratorOptionDefaults fills only missing booleans", () => {
    const defaults = applyGeneratorOptionDefaults({});
    expect(defaults).toEqual({
      format: false,
      schemasOnly: false,
      includeClient: true,
      jsdoc: true,
    });
  });

  test("resolveValidationFromOptions accepts object form", () => {
    const policy = resolveValidationFromOptions({
      preset: "strict",
      objectConstraints: false,
    });
    expect(policy?.formats).toBe(true);
    expect(policy?.objectConstraints).toBe(false);
  });

  test("loadConfig reads typed-openapi.config.ts via defineConfig", async () => {
    const dir = join(tmp, "ts-config");
    mkdirSync(dir, { recursive: true });
    const path = join(dir, "typed-openapi.config.ts");
    writeFileSync(
      path,
      `
import { defineConfig } from ${JSON.stringify(join(__dirname, "../src/config.ts"))};

export default defineConfig({
  runtime: "zod",
  tanstack: true,
  msw: true,
  transformDates: true,
  transformBigInt: true,
});
`,
    );

    const cfg = await loadConfig(path);
    expect(cfg.runtime).toBe("zod");
    expect(cfg.tanstack).toBe(true);
    expect(cfg.msw).toBe(true);
    expect(cfg.transformDates).toBe(true);
    expect(cfg.transformBigInt).toBe(true);
  });

  test("findDefaultConfigPath prefers .ts over .json", () => {
    const dir = join(tmp, "prefer-ts");
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "typed-openapi.config.json"), JSON.stringify({ runtime: "none" }));
    writeFileSync(join(dir, "typed-openapi.config.ts"), `export default { runtime: "zod" };`);
    expect(findDefaultConfigPath(dir)?.endsWith("typed-openapi.config.ts")).toBe(true);
  });

  test("JSON config accepts new feature keys", () => {
    const path = join(tmp, "features.json");
    writeFileSync(
      path,
      JSON.stringify({
        runtime: "valibot",
        tanstack: "tanstack.ts",
        msw: true,
        mswFaker: false,
        mswBaseUrl: "https://api.example.com",
        defaultFetcher: true,
        transformDates: true,
        transformBigInt: false,
      }),
    );
    const cfg = loadConfigFile(path);
    expect(cfg.tanstack).toBe("tanstack.ts");
    expect(cfg.msw).toBe(true);
    expect(cfg.defaultFetcher).toBe(true);
    expect(cfg.transformDates).toBe(true);
  });

  test("loadConfigFile rejects non-JSON paths", () => {
    expect(() => loadConfigFile(join(tmp, "typed-openapi.config.ts"))).toThrow(/only supports JSON/);
  });

  test("loadConfig rejects invalid schema", async () => {
    const path = join(tmp, "bad.json");
    writeFileSync(path, JSON.stringify({ runtime: 123 }));
    await expect(loadConfig(path)).rejects.toThrow(/Invalid config file/);
  });

  test("loadConfig accepts named config export", async () => {
    const dir = join(tmp, "named-export");
    mkdirSync(dir, { recursive: true });
    const path = join(dir, "cfg.mjs");
    writeFileSync(path, `export const config = { runtime: "none", msw: true };\n`);
    const cfg = await loadConfig(path);
    expect(cfg.runtime).toBe("none");
    expect(cfg.msw).toBe(true);
  });

  test("config schema accepts input key used by generateClientFiles", () => {
    const path = join(tmp, "with-input.json");
    writeFileSync(path, JSON.stringify({ input: "./openapi.yaml", runtime: "zod" }));
    const cfg = loadConfigFile(path);
    expect(cfg.input).toBe("./openapi.yaml");
  });

  test("mergeConfigWithCli prefers CLI transform/msw flags", () => {
    const merged = mergeConfigWithCli(
      { transformDates: false, msw: false, mswBaseUrl: "http://a" },
      { transformDates: true, msw: "handlers.ts", mswBaseUrl: undefined },
    );
    expect(merged.transformDates).toBe(true);
    expect(merged.msw).toBe("handlers.ts");
    expect(merged.mswBaseUrl).toBe("http://a");
  });
});
