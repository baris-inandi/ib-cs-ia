import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { Provider as JotaiProvider } from "jotai";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import AppHead from "../components/global/AppHead";
import AppWebkitScrollbarStyleProvider from "../components/global/AppWebkitScrollbarStyleProvider";
import AppSpotlightProvider from "../components/Spotlight/AppSpotlightProvider";
import _mantineTheme from "../mantine.theme";
import "../styles/global.css";
import "../styles/tailwind.css";

/* 
  IA:
    This is the app component. It is the parent of all other components.
    It will be rendered on every page.
    This is where we can set up global state management, global styles, etc.
    All provider components that wrap the app should be placed here.
    All of them are explained below.
*/

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    preferredColorScheme,
  );
  const [mantineTheme] = useState(_mantineTheme);

  useEffect(() => {
    mantineTheme.colorScheme = preferredColorScheme;
    setColorScheme(preferredColorScheme);
  }, [preferredColorScheme, mantineTheme]);

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(
      value || (colorScheme === "dark" ? "light" : "dark"),
    );

  return (
    <>
      {/* IA: Every wrapper component is explained below: */}
      {/*
      Jotai, our global state management (centralizing state in a mutable container as a means to enable
      access to all components in the app) solution. Jotai requires a provider component to wrap the app.
      To see the usage of Jotai in the app, see files that end with `.atom.ts`.
      */}
      <JotaiProvider>
        {/*
        Mantine, our component library, requires a provider component to wrap the app. Mantine will be
        used for all components in the app.
        */}
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={mantineTheme}
        >
          {/*
          Mantine exposes a ColorSchemeProvider component. This component is used to provide the color scheme
          ("dark" or "light") in all components in the app. The body of the function component `App` handles the
          automatic switching of the color scheme based on the user's system preferences and `ColorSchemeProvider`
          is responsible to re-render the app when the color scheme changes.
          */}
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            {/*
              Mantine exposes a Spotlight component. `AppSpotlightProvider` is a wrapper component around the
              default Spotlight component. It is used to provide Spotlight in all components in the app.
              The custom wrapper handles collecting the spotlight items. See `AppSpotlightProvider.ts`.
            */}
            <AppSpotlightProvider>
              {/*
                `AppHead` implements standard HTML head elements. It is used to set the title, favicon, etc.
                There are also meta tags for SEO and PWA support in this component.
              */}
              <AppHead />
              <main>
                {/*
                  `AppWebkitScrollbarStyleProvider` is a wrapper component that uses `emotion` to style the webkit scrollbar.
                  It is used to provide the webkit scrollbar style in all components in the app. The custom wrapper also handles
                  the automatic switching of the webkit scrollbar style (light or dark) based on the user's system preferences.
                */}
                <AppWebkitScrollbarStyleProvider>
                  {/*
                    `Component` is the page component. It is rendered based on the route. This is where the app lives.
                    Components will be rendered here are located in the `pages` directory.
                  */}
                  <Component {...pageProps} />
                </AppWebkitScrollbarStyleProvider>
              </main>
            </AppSpotlightProvider>
          </ColorSchemeProvider>
        </MantineProvider>
      </JotaiProvider>
    </>
  );
}
