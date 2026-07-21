import { describe, expect, test } from "vitest";
import { z } from "zod";
import { openApiToIr } from "../../src/schema-ir/openapi-to-ir.ts";
import { getRuntimeAdapter } from "../../src/runtimes/registry.ts";
import { createEmitCtx } from "../../src/runtimes/types.ts";
import { resolveValidationPolicy } from "../../src/runtimes/validation.ts";

const irCtx = { getRefName: (ref: string) => ref };

describe("transform dates/bigint runtime e2e", () => {
  test("zod parse yields Date and bigint", async () => {
    const adapter = getRuntimeAdapter("zod");
    const ctx = createEmitCtx(resolveValidationPolicy("formats"), new Set(), {
      transformDates: true,
      transformBigInt: true,
    });

    const dateExpr = adapter.emitNode(openApiToIr({ type: "string", format: "date-time" }, irCtx), ctx);
    const bigExpr = adapter.emitNode(openApiToIr({ type: "integer", format: "int64" }, irCtx), ctx);

    // Evaluate emitted expressions against real zod
    const dateSchema = new Function("z", `return ${dateExpr}`)(z) as z.ZodType;
    const bigSchema = new Function("z", `return ${bigExpr}`)(z) as z.ZodType;

    const d = dateSchema.parse("2020-01-02T03:04:05.000Z");
    expect(d).toBeInstanceOf(Date);
    expect((d as Date).toISOString()).toBe("2020-01-02T03:04:05.000Z");

    const b = bigSchema.parse("9007199254740993");
    expect(typeof b).toBe("bigint");
    expect(b).toBe(9007199254740993n);
  });

  test("none-runtime revive helper turns ISO strings into Date", () => {
    const __ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}(T[\d:.]+(Z|[+-]\d{2}:?\d{2})?)?$/;
    const __reviveDates = (value: unknown): unknown => {
      if (Array.isArray(value)) return value.map(__reviveDates);
      if (value && typeof value === "object") {
        const out: Record<string, unknown> = {};
        for (const [k, v] of Object.entries(value as Record<string, unknown>)) out[k] = __reviveDates(v);
        return out;
      }
      if (typeof value === "string" && __ISO_DATE_RE.test(value)) {
        const d = new Date(value);
        if (!Number.isNaN(d.getTime())) return d;
      }
      return value;
    };

    const revived = __reviveDates({
      shipDate: "2020-01-01T00:00:00.000Z",
      name: "not-a-date",
      nested: { at: "2021-06-15" },
    }) as { shipDate: Date; name: string; nested: { at: Date } };

    expect(revived.shipDate).toBeInstanceOf(Date);
    expect(revived.name).toBe("not-a-date");
    expect(revived.nested.at).toBeInstanceOf(Date);
  });
});
