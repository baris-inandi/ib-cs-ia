import { MantineProvider } from "@mantine/core";
import { SpotlightAction, SpotlightProvider } from "@mantine/spotlight";
import Sidebar from "components/Sidebar/Sidebar";
import { AppProps } from "next/app";
import Head from "next/head";
import spotlightActions from "../lib/utils/spotlightActions";
import mantineTheme from "../mantine.theme";
import "../styles/tailwind.css";

export default function App(props: AppProps) {
	const { Component, pageProps } = props;

	return (
		<>
			<Head>
				<title>Page title</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>

			<SpotlightProvider actions={spotlightActions as SpotlightAction[]}>
				<MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
					<main>
						<div className="flex">
							<Sidebar />
							<div className="w-full h-screen overflow-y-scroll">
								<Component {...pageProps} />
							</div>
						</div>
					</main>
				</MantineProvider>
			</SpotlightProvider>
		</>
	);
}
