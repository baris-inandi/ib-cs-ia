import { Box, MantineProvider } from "@mantine/core";
import Sidebar from "components/Sidebar/Sidebar";
import { AppProps } from "next/app";
import Head from "next/head";
import AppSpotlightProvider from "../components/Spotlight/AppSpotlightProvider";
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

			<AppSpotlightProvider>
				<MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
					<main>
						<div className="flex">
							<Sidebar />
							<Box
								sx={(theme) => {
									return {
										backgroundColor: theme.colors.gray[0],
										height: "100vh",
										width: "100%",
										overflowY: "scroll",
										padding: "24px",
									};
								}}>
								<Component {...pageProps} />
							</Box>
						</div>
					</main>
				</MantineProvider>
			</AppSpotlightProvider>
		</>
	);
}
