/**
 * Inference perf harness — typecheck with:
 *   pnpm exec tsc -p scripts/tsconfig.infer-bench.json --extendedDiagnostics
 *
 * Concrete await calls force overload resolution + InferSchemaInput / InferSuccessData.
 */
import type { ApiClient as ZodClient, Pet as ZodPet } from "../tests/snapshots/petstore.zod.ts";
import type { ApiClient as ClientOnly, Schemas } from "../tests/snapshots/petstore.client.ts";
import type { ApiClient as ValibotClient } from "../tests/snapshots/petstore.valibot.ts";
import type { ApiClient as ArkClient } from "../tests/snapshots/petstore.arktype.ts";
import type { createEffectApiClient as EffectCreate } from "../tests/snapshots/petstore.effect.ts";

declare const zod: ZodClient;
declare const none: ClientOnly;
declare const valibot: ValibotClient;
declare const ark: ArkClient;
declare const effect: ReturnType<typeof EffectCreate>;

async function sampleZod() {
  const list = await zod.get("/pet/findByStatus", { query: { status: "available" } });
  const pet = await zod.get("/pet/{petId}", { path: { petId: 1 } });
  const full = await zod.get("/pet/{petId}", { path: { petId: 1 }, withResponse: true });
  const user = await zod.get("/user/{username}", { path: { username: "john" } });
  return { list, pet, full, user };
}

async function sampleNone() {
  const list = await none.get("/pet/findByStatus", { query: { status: "available" } });
  const pet = await none.get("/pet/{petId}", { path: { petId: 1 } });
  const full = await none.get("/pet/{petId}", { path: { petId: 1 }, withResponse: true });
  const user = await none.get("/user/{username}", { path: { username: "john" } });
  return { list, pet, full, user };
}

async function sampleValibot() {
  const list = await valibot.get("/pet/findByStatus", { query: { status: "available" } });
  const pet = await valibot.get("/pet/{petId}", { path: { petId: 1 } });
  const full = await valibot.get("/pet/{petId}", { path: { petId: 1 }, withResponse: true });
  const user = await valibot.get("/user/{username}", { path: { username: "john" } });
  return { list, pet, full, user };
}

async function sampleArk() {
  // ark optional query tuples don't accept object literals via InferSchemaInput; path calls still exercise inference
  const pet = await ark.get("/pet/{petId}", { path: { petId: "1" } });
  const full = await ark.get("/pet/{petId}", { path: { petId: "1" }, withResponse: true });
  const user = await ark.get("/user/{username}", { path: { username: "john" } });
  return { pet, full, user };
}

function sampleEffect() {
  const list = effect.get("/pet/findByStatus", { query: { status: "available" } });
  const pet = effect.get("/pet/{petId}", { path: { petId: "1" } });
  const user = effect.get("/user/{username}", { path: { username: "john" } });
  return { list, pet, user };
}

export type Probe = {
  zod: Awaited<ReturnType<typeof sampleZod>>;
  none: Awaited<ReturnType<typeof sampleNone>>;
  valibot: Awaited<ReturnType<typeof sampleValibot>>;
  ark: Awaited<ReturnType<typeof sampleArk>>;
  effect: ReturnType<typeof sampleEffect>;
  pet: ZodPet;
  np: Schemas.Pet;
};
