import { describe, expect, test } from "vitest";
import { writeFileSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import {
  loadConfigFile,
  mergeConfigWithCli,
  applyGeneratorOptionDefaults,
  resolveValidationFromOptions,
  validationFromConfig,
} from "../src/config.ts";
import { resolveValidationPolicy } from "../src/runtimes/validation.ts";

const tmp = join(__dirname, "../tmp/config-tests");

describe("typed-openapi config file", () => {
  rmSync(tmp, { recursive: true, force: true });
  mkdirSync(tmp, { recursive: true });

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
        // Mimic cac after removing parser defaults: unset flags are undefined
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
});
