import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Guardrail: committed tstyche suites must stay in sync with the generator.
 * Re-run: pnpm gen:tstyche-suites
 */
describe("gen-tstyche-suites output", () => {
  const root = join(__dirname, "..");
  const runtimes = ["none", "zod", "zod3", "effect", "effect3", "valibot", "arktype", "typebox", "typia"] as const;

  it("every runtime has promise + effect suites", () => {
    for (const runtime of runtimes) {
      const promise = readFileSync(join(root, "tests/tstyche/runtimes", `${runtime}.types.tstyche.ts`), "utf8");
      const effect = readFileSync(join(root, "tests/tstyche/effect-client", `${runtime}.types.tstyche.ts`), "utf8");
      expect(promise.length).toBeGreaterThan(200);
      expect(effect.length).toBeGreaterThan(200);
      expect(promise).toContain(`${runtime} `);
      expect(effect).toContain(`${runtime} `);
    }
  });

  it("promise suites cover MSW-parity cases (except light effect3)", () => {
    const zod = readFileSync(join(root, "tests/tstyche/runtimes/zod.types.tstyche.ts"), "utf8");
    for (const needle of [
      "withResponse: true",
      "api.request",
      "TanstackQueryApiClient",
      "user/login",
      "findByTags",
      "throwOnStatusError",
      "successStatusCodes",
    ]) {
      expect(zod).toContain(needle);
    }
  });

  it("effect suites cover error channel + request parity", () => {
    const zod = readFileSync(join(root, "tests/tstyche/effect-client/zod.types.tstyche.ts"), "utf8");
    for (const needle of [
      "TypedStatusError | HttpClientError",
      "request() success data matches get()",
      "overrides are accepted",
      "body params accept Pet",
    ]) {
      expect(zod).toContain(needle);
    }
  });
});
