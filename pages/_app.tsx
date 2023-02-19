import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import AppHead from "../components/global/AppHead";
import AppWebkitScrollbarStyleProvider from "../components/global/AppWebkitScrollbarStyleProvider";
import AppSpotlightProvider from "../components/Spotlight/AppSpotlightProvider";
import mantineTheme from "../mantine.theme";
import "../styles/global.css";
import "../styles/tailwind.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    preferredColorScheme,
  );

  useEffect(() => {
    console.log("preferred", preferredColorScheme);
    mantineTheme.colorScheme = preferredColorScheme;
    setColorScheme(preferredColorScheme);
  }, [preferredColorScheme]);

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(
      value || (colorScheme === "dark" ? "light" : "dark"),
    );

  return (
    <>
      <AppSpotlightProvider>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={mantineTheme}
        >
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <AppHead />
            <main>
              <AppWebkitScrollbarStyleProvider>
                <Component {...pageProps} />
              </AppWebkitScrollbarStyleProvider>
            </main>
          </ColorSchemeProvider>
        </MantineProvider>
      </AppSpotlightProvider>
    </>
  );
}
