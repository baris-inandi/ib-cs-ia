import { DEFAULT_THEME, MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  defaultRadius: "md",
  colors: {
    black: [
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
    ],
    accent: DEFAULT_THEME.colors.indigo,
  },
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Inter", Arial, sans-serif',
};

export default theme;
