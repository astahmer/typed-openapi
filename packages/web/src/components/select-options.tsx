import { FiChevronDown } from "react-icons/fi";
import { HStack, styled } from "panda/jsx";

type Option<T extends string> = { value: T; label: string };

type SelectOptionsProps<T extends string> = {
  options: readonly Option<T>[];
  value: T;
  onChange?: (value: T) => void;
  minW?: string;
};

export const SelectOptions = <T extends string>({ options, value, onChange, minW = "180px" }: SelectOptionsProps<T>) => {
  return (
    <HStack position="relative" minW={minW}>
      <styled.select
        value={value}
        onChange={(event) => onChange?.(event.currentTarget.value as T)}
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
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </styled.select>
      <FiChevronDown
        style={{
          position: "absolute",
          right: "0.75rem",
          fontSize: "18px",
          pointerEvents: "none",
        }}
      />
    </HStack>
  );
};
