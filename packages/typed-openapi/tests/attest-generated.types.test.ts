import { describe, test } from "vitest";
import { attest } from "@ark/attest";

/**
 * Attest type snapshots for generated clients (filter-fixture /pets).
 * Fixtures: vitest globalSetup → scripts/gen-attest-fixtures.ts
 * Run: ATTEST_skipTypes=0 pnpm test:types:attest
 * Update: ATTEST_updateSnapshots=1 ATTEST_skipTypes=0 pnpm test:types:attest
 *
 * Uses `import type` only — typia createIs needs a transformer at runtime.
 */

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
