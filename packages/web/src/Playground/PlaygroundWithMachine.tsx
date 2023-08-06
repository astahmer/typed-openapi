import { useInterpret } from "@xstate/react";
import { ReactNode } from "react";
import { InterpreterFrom } from "xstate";
import { runIfFn } from "../run-if-fn";
import { Playground } from "./Playground";
import { playgroundMachine } from "./Playground.machine";
import { PlaygroundMachineProvider } from "./PlaygroundMachineProvider";

export const PlaygroundWithMachine = ({
  children,
}: {
  children?: ReactNode | ((service: InterpreterFrom<typeof playgroundMachine>) => ReactNode);
}) => {
  const service = useInterpret(playgroundMachine);

  return (
    <PlaygroundMachineProvider value={service}>
      {runIfFn(children, service)}
      <Playground />
    </PlaygroundMachineProvider>
  );
};

export default PlaygroundWithMachine;
