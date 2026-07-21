import { describe, expect, test } from "vitest";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { generateDefaultFetcher } from "../src/default-fetcher.generator.ts";
import { generateAuthHelpersSource, parseSecuritySchemes } from "../src/security.ts";

describe("securitySchemes → auth helpers", () => {
  test("parseSecuritySchemes reads petstore oauth2 + apiKey", async () => {
    const doc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    const schemes = parseSecuritySchemes(doc);
    expect(schemes.map((s) => s.name).sort()).toEqual(["api_key", "petstore_auth"]);

    const apiKey = schemes.find((s) => s.name === "api_key")!;
    expect(apiKey.type).toBe("apiKey");
    expect(apiKey.in).toBe("header");
    expect(apiKey.paramName).toBe("api_key");

    const oauth = schemes.find((s) => s.name === "petstore_auth")!;
    expect(oauth.type).toBe("oauth2");
  });

  test("generateAuthHelpersSource emits Bearer + apiKey header", () => {
    const src = generateAuthHelpersSource([
      { name: "petstore_auth", prop: "petstore_auth", type: "oauth2", scheme: "bearer" },
      { name: "api_key", prop: "api_key", type: "apiKey", in: "header", paramName: "api_key" },
      { name: "qkey", prop: "qkey", type: "apiKey", in: "query", paramName: "api_key_q" },
      { name: "basic", prop: "basic", type: "http", scheme: "basic" },
    ]);

    expect(src).toContain("export type AuthCredentials");
    expect(src).toContain('"petstore_auth"?: string');
    expect(src).toContain('"api_key"?: string');
    expect(src).toContain('headers.set("Authorization", "Bearer "');
    expect(src).toContain('headers.set("api_key"');
    expect(src).toContain('url.searchParams.set("api_key_q"');
    expect(src).toContain('"Basic "');
  });

  test("default fetcher includes configureFetcher when doc has securitySchemes", async () => {
    const doc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    const src = generateDefaultFetcher({ clientPath: "./client.ts", doc });
    expect(src).toContain("export type AuthCredentials");
    expect(src).toContain("export const applyAuth");
    expect(src).toContain("configureFetcher");
    expect(src).toContain("getAuth");
    expect(src).toContain("applyAuth(headers, input.url, auth)");
  });

  test("default fetcher without doc has no auth helpers", () => {
    const src = generateDefaultFetcher({ clientPath: "./client.ts" });
    expect(src).not.toContain("AuthCredentials");
    expect(src).not.toContain("configureFetcher");
  });
});
