import { FiChevronDown } from "react-icons/fi";
import { HStack, styled } from "panda/jsx";

const runtimeOptions = [
  { value: "none", label: "None (types only)" },
  { value: "zod", label: "Zod" },
  { value: "typebox", label: "Typebox" },
  { value: "arktype", label: "Arktype" },
  { value: "valibot", label: "Valibot" },
  { value: "yup", label: "Yup" },
  { value: "io-ts", label: "io-ts" },
] as const;

type RuntimeOption = (typeof runtimeOptions)[number];

type SelectRuntimeProps = {
  defaultValue?: RuntimeOption;
  onChange?: (option?: RuntimeOption) => void;
};

export const SelectRuntime = ({ defaultValue, onChange }: SelectRuntimeProps) => {
  return (
    <HStack position="relative" minW="252px">
      <styled.select
        defaultValue={defaultValue?.value ?? "none"}
        onChange={(event) => {
          onChange?.(runtimeOptions.find((option) => option.value === event.currentTarget.value));
        }}
        appearance="none"
        bg="var(--sp-colors-surface2)"
        color="inherit"
        borderRadius="md"
        borderWidth="1px"
        borderColor="var(--sp-colors-surface3)"
        px="3"
        py="2"
        pr="10"
        fontWeight="medium"
        width="100%"
        cursor="pointer"
        outline="none"
      >
        {runtimeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </styled.select>
      <SelectIcon />
    </HStack>
  );
};

const SelectIcon = () => {
  const iconStyles = {
    position: "absolute" as const,
    right: "0.75rem",
    fontSize: "18px",
    pointerEvents: "none" as const,
  };
  return <FiChevronDown style={iconStyles} />;
};
