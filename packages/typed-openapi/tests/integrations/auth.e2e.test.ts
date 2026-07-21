import { describe, expect, test } from "vitest";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { prettify } from "../../src/format.ts";
import { generateAuthHelpersSource, parseSecuritySchemes } from "../../src/security.ts";

const tmp = join(__dirname, "../../tmp/auth-e2e");

describe("applyAuth e2e", () => {
  test("applies bearer + api key header + query key", async () => {
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const doc = (await SwaggerParser.parse("./tests/samples/petstore.yaml")) as OpenAPIObject;
    const schemes = parseSecuritySchemes(doc);
    // Add a query key for coverage
    schemes.push({
      name: "query_key",
      prop: "query_key",
      type: "apiKey",
      in: "query",
      paramName: "qk",
    });

    const src = await prettify(generateAuthHelpersSource(schemes));
    writeFileSync(join(tmp, "auth.ts"), src);

    const mod = await import(pathToFileURL(join(tmp, "auth.ts")).href + `?t=${Date.now()}`);
    const headers = new Headers();
    const url = new URL("https://api.example.com/pet");

    mod.applyAuth(headers, url, {
      petstore_auth: "tok-123",
      api_key: "key-abc",
      query_key: "q-value",
    });

    expect(headers.get("Authorization")).toBe("Bearer tok-123");
    expect(headers.get("api_key")).toBe("key-abc");
    expect(url.searchParams.get("qk")).toBe("q-value");
  });

  test("basic auth encodes user:pass", async () => {
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const src = await prettify(
      generateAuthHelpersSource([{ name: "basic", prop: "basic", type: "http", scheme: "basic" }]),
    );
    writeFileSync(join(tmp, "basic.ts"), src);
    const mod = await import(pathToFileURL(join(tmp, "basic.ts")).href + `?t=${Date.now()}`);
    const headers = new Headers();
    const url = new URL("https://api.example.com/");
    mod.applyAuth(headers, url, { basic: "user:secret" });
    expect(headers.get("Authorization")).toBe("Basic " + btoa("user:secret"));
  });

  test("cookie apiKey is set on Cookie header", async () => {
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const src = await prettify(
      generateAuthHelpersSource([{ name: "session", prop: "session", type: "apiKey", in: "cookie", paramName: "sid" }]),
    );
    writeFileSync(join(tmp, "cookie.ts"), src);
    const mod = await import(pathToFileURL(join(tmp, "cookie.ts")).href + `?t=${Date.now()}`);
    const headers = new Headers();
    headers.set("cookie", "other=1");
    const url = new URL("https://api.example.com/");
    mod.applyAuth(headers, url, { session: "abc" });
    expect(headers.get("cookie")).toBe("other=1; sid=abc");
  });

  test("double Bearer when token already prefixed (AUTH-1)", async () => {
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const src = await prettify(
      generateAuthHelpersSource([{ name: "oauth", prop: "oauth", type: "oauth2", scheme: "bearer" }]),
    );
    writeFileSync(join(tmp, "bearer.ts"), src);
    const mod = await import(pathToFileURL(join(tmp, "bearer.ts")).href + `?t=${Date.now()}`);
    const headers = new Headers();
    const url = new URL("https://api.example.com/");
    mod.applyAuth(headers, url, { oauth: "Bearer already" });
    expect(headers.get("Authorization")).toBe("Bearer Bearer already");
  });
});
