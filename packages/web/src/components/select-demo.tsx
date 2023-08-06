import { Portal } from "@ark-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { Button } from "./button";
import { Select, SelectContent, SelectOption, SelectPositioner, SelectTrigger, type SelectProps } from "./select";
import { HStack } from "panda/jsx";

export const SelectRuntime = (props: SelectProps) => {
  return (
    <Select positioning={{ sameWidth: true }} {...props}>
      {({ selectedOption, isOpen }) => (
        <>
          <SelectTrigger asChild>
            <Button variant="secondary" minW="252px">
              <HStack justify="space-between" flex="1" fontWeight="medium">
                {selectedOption?.label ?? "Select runtime"}
                <SelectIcon isOpen={isOpen} />
              </HStack>
            </Button>
          </SelectTrigger>
          <Portal>
            <SelectPositioner>
              <SelectContent>
                <SelectOption value="none" label="None (types only)">
                  None (types only)
                </SelectOption>
                <SelectOption value="zod" label="Zod">
                  Zod
                </SelectOption>
                <SelectOption value="typebox" label="Typebox">
                  Typebox
                </SelectOption>
                <SelectOption value="arktype" label="Arktype">
                  Arktype
                </SelectOption>
                <SelectOption value="valibot" label="Valibot">
                  Valibot
                </SelectOption>
                <SelectOption value="yup" label="Yup">
                  Yup
                </SelectOption>
                <SelectOption value="io-ts" label="io-ts">
                  io-ts
                </SelectOption>
              </SelectContent>
            </SelectPositioner>
          </Portal>
        </>
      )}
    </Select>
  );
};

const SelectIcon = (props: { isOpen: boolean }) => {
  const iconStyles = {
    transform: props.isOpen ? "rotate(-180deg)" : undefined,
    transition: "transform 0.2s",
    transformOrigin: "center",
    fontSize: "18px",
  };
  return <FiChevronDown style={iconStyles} />;
};
