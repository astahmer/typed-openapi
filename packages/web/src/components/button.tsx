import type { ComponentPropsWithoutRef } from "react";
import { styled } from "panda/jsx";
import { button, type ButtonVariantProps } from "panda/recipes";

export type ButtonProps = ButtonVariantProps & ComponentPropsWithoutRef<"button">;
export const Button = styled("button", button);
