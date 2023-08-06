import { defineTokens } from "@pandacss/dev";

export const tokens = defineTokens({
  colors: {
    // chakra
      whiteAlpha: {
        50: { value: "rgba(255, 255, 255, 0.04)" },
        100: { value: "rgba(255, 255, 255, 0.06)" },
        200: { value: "rgba(255, 255, 255, 0.08)" },
        300: { value: "rgba(255, 255, 255, 0.16)" },
        400: { value: "rgba(255, 255, 255, 0.24)" },
        500: { value: "rgba(255, 255, 255, 0.36)" },
        600: { value: "rgba(255, 255, 255, 0.48)" },
        700: { value: "rgba(255, 255, 255, 0.64)" },
        800: { value: "rgba(255, 255, 255, 0.80)" },
        900: { value: "rgba(255, 255, 255, 0.92)" },
      },

      blackAlpha: {
        50: { value: "rgba(0, 0, 0, 0.04)" },
        100: { value: "rgba(0, 0, 0, 0.06)" },
        200: { value: "rgba(0, 0, 0, 0.08)" },
        300: { value: "rgba(0, 0, 0, 0.16)" },
        400: { value: "rgba(0, 0, 0, 0.24)" },
        500: { value: "rgba(0, 0, 0, 0.36)" },
        600: { value: "rgba(0, 0, 0, 0.48)" },
        700: { value: "rgba(0, 0, 0, 0.64)" },
        800: { value: "rgba(0, 0, 0, 0.80)" },
        900: { value: "rgba(0, 0, 0, 0.92)" },
      },
      // custom
      primary: {
        "50": {value: "#EEF7F7"},
        "100": {value: "#CEE8E8"},
        "200": {value: "#AFDADA"},
        "300": {value: "#90CBCB"},
        "400": {value: "#70BCBC"},
        "500": {value: "#51AEAE"},
        "600": {value: "#418B8B"},
        "700": {value: "#316868"},
        "800": {value: "#204646"},
        "900": {value: "#102323"},
    },
  },
});
