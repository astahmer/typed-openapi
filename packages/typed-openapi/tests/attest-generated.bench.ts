import { bench } from "@ark/attest";
import type { ApiClient as ZodApiClient, Pet as ZodPet } from "./snapshots/petstore.zod.ts";
import type { ApiClient as ClientOnly, Pet as ClientPet } from "./snapshots/petstore.client.ts";
import type { ApiClient as ValibotApiClient, Pet as ValibotPet } from "./snapshots/petstore.valibot.ts";
import type { ApiClient as ArkApiClient, Pet as ArkPet } from "./snapshots/petstore.arktype.ts";

/**
 * Type instantiation benches for generated petstore clients.
 * Run: pnpm test:bench:attest
 * First run / update baselines: ATTEST_updateSnapshots=1 pnpm test:bench:attest
 */

// Baseline warm-up so package import cost is excluded from benches below.
type _Warm = ClientPet;
type AssertWarm = _Warm;

bench("petstore client-only Pet", () => {
  return {} as ClientPet;
}).types([0, "instantiations"]);

bench("petstore zod Pet", () => {
  return {} as ZodPet;
}).types([1341, "instantiations"]);

bench("petstore valibot Pet", () => {
  return {} as ValibotPet;
}).types([12446, "instantiations"]);

bench("petstore arktype Pet", () => {
  return {} as ArkPet;
}).types([9775, "instantiations"]);

bench("petstore client-only ApiClient get method", () => {
  type G = ReturnType<ClientOnly["get"]>;
  return {} as G;
}).types([1518, "instantiations"]);

bench("petstore zod ApiClient get method", () => {
  type G = ReturnType<ZodApiClient["get"]>;
  return {} as G;
}).types([102680, "instantiations"]);

bench("petstore valibot ApiClient get method", () => {
  type G = ReturnType<ValibotApiClient["get"]>;
  return {} as G;
}).types([28795, "instantiations"]);

bench("petstore arktype ApiClient get method", () => {
  type G = ReturnType<ArkApiClient["get"]>;
  return {} as G;
}).types([71708, "instantiations"]);

export type { AssertWarm };
