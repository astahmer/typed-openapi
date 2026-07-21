import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { describe, test } from "vitest";
import { attest } from "@ark/attest";
import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPIObject } from "openapi3-ts/oas31";
import { mapOpenApiEndpoints } from "../src/map-openapi-endpoints.ts";
import { generateFile, type OutputRuntime } from "../src/generator.ts";

/**
 * Attest type snapshots for generated clients (filter-fixture /pets).
 * Run: ATTEST_skipTypes=0 pnpm test:types:attest
 * Update: ATTEST_updateSnapshots=1 ATTEST_skipTypes=0 pnpm test:types:attest
 *
 * Uses `import type` only — typia createIs needs a transformer at runtime.
 */

const runtimes: OutputRuntime[] = [
  "none",
  "zod",
  "zod3",
  "effect",
  "effect3",
  "valibot",
  "arktype",
  "typebox",
  "typia",
];

const fixturePath = join(__dirname, "samples/filter-fixture.openapi.yaml");
const outRoot = join(__dirname, "../tmp/attest-generated");

const doc = (await SwaggerParser.parse(fixturePath)) as OpenAPIObject;
const ctx = mapOpenApiEndpoints(doc);
mkdirSync(outRoot, { recursive: true });
for (const runtime of runtimes) {
  for (const client of ["promise", "effect"] as const) {
    const dir = join(outRoot, `${runtime}-${client}`);
    mkdirSync(dir, { recursive: true });
    writeFileSync(
      join(dir, "client.ts"),
      generateFile({
        ...ctx,
        runtime,
        client,
        includeClient: true,
        endpointPatterns: ["/pets"],
      }),
    );
  }
}

describe("attest generated client types", () => {
  test("none Pet", () => {
    type Pet = import("../tmp/attest-generated/none-promise/client.ts").Schemas.Pet;
    attest({} as Pet).type.toString.snap("Pet");
  });
  test("zod Pet", () => {
    type Pet = import("../tmp/attest-generated/zod-promise/client.ts").Pet;
    attest({} as Pet).type.toString.snap(`{
  name: string
  tag?: { id?: string | undefined } | undefined
}`);
  });
  test("zod3 Pet", () => {
    type Pet = import("../tmp/attest-generated/zod3-promise/client.ts").Pet;
    attest({} as Pet).type.toString.snap(`{
  name: string
  tag?: { id?: string | undefined } | undefined
}`);
  });
  test("effect Pet", () => {
    type Pet = import("../tmp/attest-generated/effect-promise/client.ts").Pet;
    attest({} as Pet).type.toString.snap(`{
  readonly name: string
  readonly tag?:
    { readonly id?: string | undefined } | undefined
}`);
  });
  test("effect3 Pet", () => {
    type Pet = import("../tmp/attest-generated/effect3-promise/client.ts").Pet;
    attest({} as Pet).type.toString.snap(`{
  readonly name: string
  readonly tag?:
    { readonly id?: string | undefined } | undefined
}`);
  });
  test("valibot Pet", () => {
    type Pet = import("../tmp/attest-generated/valibot-promise/client.ts").Pet;
    attest({} as Pet).type.toString.snap(`{
  name: string
  tag?: { id?: string | undefined } | undefined
}`);
  });
  test("arktype Pet", () => {
    type Pet = import("../tmp/attest-generated/arktype-promise/client.ts").Pet;
    attest({} as Pet).type.toString.snap("{ name: string; tag?: { id?: string } }");
  });
  test("typebox Pet", () => {
    type Pet = import("../tmp/attest-generated/typebox-promise/client.ts").Pet;
    attest({} as Pet).type.toString.snap("{ tag?: { id?: string }; name: string }");
  });
  test("typia Pet", () => {
    type Pet = import("../tmp/attest-generated/typia-promise/client.ts").Pet;
    attest({} as Pet).type.toString.snap("Pet");
  });
});
