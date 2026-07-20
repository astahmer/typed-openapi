import { arktypeAdapter } from "./arktype/index.ts";
import { effectAdapter } from "./effect/index.ts";
import { effect3Adapter } from "./effect3/index.ts";
import type { OutputRuntime, RuntimeAdapter } from "./types.ts";
import { valibotAdapter } from "./valibot/index.ts";
import { zodAdapter } from "./zod/index.ts";
import { zod3Adapter } from "./zod3/index.ts";

export const runtimeAdapters = {
  zod: zodAdapter,
  zod3: zod3Adapter,
  effect: effectAdapter,
  effect3: effect3Adapter,
  valibot: valibotAdapter,
  arktype: arktypeAdapter,
} as const satisfies Record<Exclude<OutputRuntime, "none">, RuntimeAdapter>;

export type ShippedRuntime = keyof typeof runtimeAdapters;

export const getRuntimeAdapter = (runtime: ShippedRuntime): RuntimeAdapter => runtimeAdapters[runtime];

export const shippedRuntimeNames = Object.keys(runtimeAdapters) as ShippedRuntime[];
