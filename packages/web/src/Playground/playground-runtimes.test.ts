import { describe, expect, test } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

describe("playground runtime declarations", () => {
  const dir = join(__dirname, "../../declarations");

  for (const name of ["zod", "arktype", "valibot", "effect", "effect3"]) {
    test(`${name}.d.ts exists for monaco ExtraLib`, () => {
      const path = join(dir, `${name}.d.ts`);
      expect(existsSync(path)).toBe(true);
      expect(readFileSync(path, "utf8").length).toBeGreaterThan(20);
    });
  }
});
