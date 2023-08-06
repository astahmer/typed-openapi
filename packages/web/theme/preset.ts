import { definePreset } from "@pandacss/dev";

import { semanticTokens } from "./semantic-tokens";
import { tokens } from "./tokens";
import { textStyles } from "./text-styles";

export const themePreset = definePreset({
  theme: {
    extend: {
      semanticTokens: semanticTokens,
      tokens: tokens,
      textStyles: textStyles
    },
  },
});
