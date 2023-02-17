import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import AppHead from "../components/global/AppHead";
import AppSpotlightProvider from "../components/Spotlight/AppSpotlightProvider";
import mantineTheme from "../mantine.theme";
import "../styles/global.css";
import "../styles/tailwind.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <AppHead />
      <AppSpotlightProvider>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={mantineTheme}
        >
          <main>
            <Component {...pageProps} />
          </main>
        </MantineProvider>
      </AppSpotlightProvider>
    </>
  );
}
