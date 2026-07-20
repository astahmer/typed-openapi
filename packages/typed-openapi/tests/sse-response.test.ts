import { describe, expect, test } from "vitest";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { generateFile } from "../src/generator.ts";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";

const load = async () =>
  (await SwaggerParser.parse("./tests/samples/github-issues/sse-event-stream.yaml")) as OpenAPIObject;

describe("SSE / text/event-stream responses", () => {
  test("maps SSE media type to responseFormat sse + stream schema", async () => {
    const doc = await load();
    const mapped = mapOpenApiEndpoints(doc);
    const sse = mapped.endpointList.find((e) => e.path === "/events");
    const json = mapped.endpointList.find((e) => e.path === "/pets");

    expect(sse?.responseFormat).toBe("sse");
    expect(sse?.responses?.["200"]?.kind).toBe("stream");
    expect(json?.responseFormat).toBe("json");
  });

  test("generated client types ReadableStream and sparse endpointResponseFormats", async () => {
    const doc = await load();
    const mapped = mapOpenApiEndpoints(doc);
    const file = generateFile({ ...mapped, runtime: "none" });

    expect(file).toContain('responseFormat: "sse"');
    expect(file).toContain("ReadableStream<Uint8Array>");
    expect(file).toContain("endpointResponseFormats");
    expect(file).toContain('"/events": "sse"');
    expect(file).toContain('responseFormat === "sse"');
  });

  test("zod runtime emits stream check and skips output validation for sse", async () => {
    const doc = await load();
    const mapped = mapOpenApiEndpoints(doc);
    const file = generateFile({ ...mapped, runtime: "zod" });

    expect(file).toContain("ReadableStream");
    expect(file).toContain('responseFormat: z.literal("sse")');
    expect(file).toContain('responseFormat !== "sse"');
  });

  test("binary SchemaNode still maps format binary to Blob", async () => {
    const doc = {
      openapi: "3.0.3",
      info: { title: "bin", version: "1" },
      paths: {
        "/upload": {
          post: {
            requestBody: {
              content: {
                "application/octet-stream": {
                  schema: { type: "string", format: "binary" },
                },
              },
            },
            responses: { "200": { description: "ok" } },
          },
        },
      },
    } as OpenAPIObject;

    const mapped = mapOpenApiEndpoints(doc);
    const ep = mapped.endpointList[0]!;
    expect(ep.requestFormat).toBe("binary");
    expect(ep.parameters?.body?.kind).toBe("binary");

    const file = generateFile({ ...mapped, runtime: "none" });
    expect(file).toContain("Blob");
  });
});
