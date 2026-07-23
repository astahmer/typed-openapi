import { useActorRef } from "@xstate/react";
import { lazy, Suspense, type ReactNode } from "react";
import type { ActorRefFrom } from "xstate";
import { runIfFn } from "../run-if-fn";
import { playgroundMachine } from "./Playground.machine";
import { PlaygroundMachineProvider } from "./PlaygroundMachineProvider";

const Playground = lazy(async () => {
  const module = await import("./Playground");
  return { default: module.Playground };
});

export const PlaygroundWithMachine = ({
  children,
}: {
  children?: ReactNode | ((service: ActorRefFrom<typeof playgroundMachine>) => ReactNode);
}) => {
  const service = useActorRef(playgroundMachine);

  return (
    <PlaygroundMachineProvider value={service}>
      {runIfFn(children, service)}
      <Suspense fallback={<div className="playground-loading">Loading editor…</div>}>
        <Playground />
      </Suspense>
    </PlaygroundMachineProvider>
  );
};

export default PlaygroundWithMachine;
