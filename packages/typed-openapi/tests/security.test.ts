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

  test("cookie apiKey emits cookie header merge with encodeURIComponent", () => {
    const src = generateAuthHelpersSource([
      { name: "session", prop: "session", type: "apiKey", in: "cookie", paramName: "sid" },
    ]);
    expect(src).toContain('headers.get("cookie")');
    expect(src).toContain('"sid="');
    expect(src).toContain("encodeURIComponent");
  });

  test("mutualTLS emits credentials field but does not apply Bearer", () => {
    const src = generateAuthHelpersSource([{ name: "mtls", prop: "mtls", type: "mutualTLS" }]);
    expect(src).toContain('"mtls"?: string');
    expect(src).not.toContain('headers.set("Authorization"');
  });

  test("Bearer tokens already prefixed are not double-prefixed", () => {
    const src = generateAuthHelpersSource([{ name: "oauth", prop: "oauth", type: "oauth2", scheme: "bearer" }]);
    expect(src).toContain("/^bearer\\s+/i");
    expect(src).toContain('"Bearer " + token');
  });

  test("http digest is unsupported and skipped in applyAuth", () => {
    const src = generateAuthHelpersSource([{ name: "digest", prop: "digest", type: "http", scheme: "digest" }]);
    expect(src).toContain('"digest"?: string');
    expect(src).not.toContain('headers.set("Authorization"');
    expect(src).not.toContain("Digest");
  });

  test("empty schemes emit no-op AuthCredentials", () => {
    const src = generateAuthHelpersSource([]);
    expect(src).toContain("Record<string, never>");
    expect(src).toContain("applyAuth = (_headers: Headers, _url: URL, _auth: AuthCredentials): void => {}");
  });

  test("description is escaped in JSDoc", () => {
    const src = generateAuthHelpersSource([
      {
        name: "k",
        prop: "k",
        type: "apiKey",
        in: "header",
        paramName: "X-Key",
        description: "secret */ injection",
      },
    ]);
    expect(src).toContain("secret *\\/ injection");
  });
});
