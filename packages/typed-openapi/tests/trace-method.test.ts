import { describe, expect, test } from "vitest";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";

describe("TRACE operations", () => {
  test("remain callable in generated clients", () => {
    const doc = {
      openapi: "3.1.0",
      info: { title: "trace", version: "1" },
      paths: {
        "/trace": {
          trace: {
            operationId: "traceResource",
            responses: { "204": { description: "No content" } },
          },
        },
      },
    } as OpenAPIObject;

    const generated = generateFile({ ...mapOpenApiEndpoints(doc), includeClient: true });

    expect(generated).toContain('export type Method = "get" | "head" | "options" | "trace" | MutationMethod;');
    expect(generated).toContain('trace<Path extends keyof TraceEndpoints');
    expect(generated).toContain('method: Method;');
  });
});
