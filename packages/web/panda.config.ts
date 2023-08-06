import { defineConfig } from "@pandacss/dev";
import { preset as basePreset } from "@pandacss/preset-base";
import { preset as pandaPreset } from "@pandacss/preset-panda";
import { themePreset } from "./theme/preset";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{tsx,jsx}", "./pages/**/*.{jsx,tsx}"],
  exclude: [],
  jsxFramework: "react",
  presets: [pandaPreset as any, themePreset, "@park-ui/presets"],
  conditions: {
    // next-themes
    dark: '.dark &, [data-theme="dark"] &',
    light: ".light &",
    // react-resizable-panels
    resizeHandleActive: "[data-resize-handle-active] &",
    panelHorizontalActive: '[data-panel-group-direction="horizontal"] &',
    panelVerticalActive: '[data-panel-group-direction="vertical"] &',
  },
  utilities: {
    boxSize: {
      values: basePreset.utilities?.width?.values,
      transform: (value) => {
        return {
          width: value,
          height: value,
        };
      },
    },
  },
});
