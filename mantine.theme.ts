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
        dark: [
            "#C1C1C1",
            "#A6A6A6",
            "#909090",
            "#5c5c5c",
            "#373737",
            "#2C2C2C",
            "#252525",
            "#1A1A1A",
            "#141414",
            "#101010",
        ],
        accent: DEFAULT_THEME.colors.indigo,
    },
    primaryColor: "accent",
    primaryShade: { light: 7, dark: 5 },
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Inter", Arial, sans-serif',
};

export default theme;
