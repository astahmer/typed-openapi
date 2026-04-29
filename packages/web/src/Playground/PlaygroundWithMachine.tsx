import { useActorRef } from "@xstate/react";
import type { ReactNode } from "react";
import type { ActorRefFrom } from "xstate";
import { runIfFn } from "../run-if-fn";
import { Playground } from "./Playground";
import { playgroundMachine } from "./Playground.machine";
import { PlaygroundMachineProvider } from "./PlaygroundMachineProvider";

export const PlaygroundWithMachine = ({
  children,
}: {
  children?: ReactNode | ((service: ActorRefFrom<typeof playgroundMachine>) => ReactNode);
}) => {
  const service = useActorRef(playgroundMachine);

  return (
    <PlaygroundMachineProvider value={service}>
      {runIfFn(children, service)}
      <Playground />
    </PlaygroundMachineProvider>
  );
};

export default PlaygroundWithMachine;
