import { describe, expect, test } from "vitest";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile } from "../src/generator.ts";
import type { ValidationPreset } from "../src/runtimes/validation.ts";

const filePath = `${__dirname}/samples/constraints.openapi.yaml`;

describe("validation depth", async () => {
  const openApiDoc = (await SwaggerParser.parse(filePath)) as OpenAPIObject;
  const ctx = mapOpenApiEndpoints(openApiDoc);

  const cases: Array<{ runtime: "zod" | "effect" | "valibot"; validation: ValidationPreset }> = [
    { runtime: "zod", validation: "loose" },
    { runtime: "zod", validation: "formats" },
    { runtime: "zod", validation: "strict" },
    { runtime: "effect", validation: "strict" },
    { runtime: "valibot", validation: "strict" },
  ];

  for (const { runtime, validation } of cases) {
    test(`${runtime} / ${validation}`, () => {
      const out = generateFile({ ...ctx, runtime, validation, schemasOnly: true });

      if (validation === "loose") {
        expect(out).toContain("z.string()");
        expect(out).not.toContain("z.email()");
        expect(out).not.toContain(".min(");
        expect(out).not.toContain(".max(");
      }

      if (validation === "formats") {
        expect(out).toContain("z.email()");
        expect(out).toContain("z.uuid()");
        expect(out).not.toContain(".min(3)");
      }

      if (validation === "strict" && runtime === "zod") {
        expect(out).toContain("z.email()");
        expect(out).toContain(".min(3)");
        expect(out).toContain(".max(100)");
        expect(out).toContain(".min(0)");
        expect(out).toContain(".lt(150)"); // exclusiveMaximum: true
        expect(out).toContain(".regex(");
      }

      if (runtime === "effect" && validation === "strict") {
        expect(out).toContain('import { Schema } from "effect"');
        expect(out).toContain("Schema.minLength");
        expect(out).toContain("Schema.Int");
      }

      if (runtime === "valibot" && validation === "strict") {
        expect(out).toContain("v.email()");
        expect(out).toContain("v.minLength(3)");
      }
    });
  }
});
