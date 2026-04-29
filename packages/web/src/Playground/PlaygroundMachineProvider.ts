import { createContextWithHook } from "pastable/react";
import type { ActorRefFrom } from "xstate";
import { playgroundMachine } from "./Playground.machine";

export const [PlaygroundMachineProvider, usePlaygroundContext] =
  createContextWithHook<ActorRefFrom<typeof playgroundMachine>>("PlaygroundMachineContext");
