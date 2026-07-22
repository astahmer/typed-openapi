import { describe, expect, test } from "vitest";
import { clientForRuntime } from "./Playground.machine.ts";

describe("playground clientForRuntime", () => {
  test("matches CLI defaults when switching runtimes", () => {
    expect(clientForRuntime("effect", "promise")).toBe("effect");
    expect(clientForRuntime("effect3", "promise")).toBe("effect");
    expect(clientForRuntime("zod", "effect")).toBe("promise");
    expect(clientForRuntime("none", "promise")).toBe("promise");
  });
});
