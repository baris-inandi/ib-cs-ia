import { Box, MantineProvider } from "@mantine/core";
import AppLayout from "components/Sidebar/AppLayout";
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
						<AppLayout>
							<Box
								sx={(theme) => {
									return {
										backgroundColor: theme.colors.gray[2],
										height: "100%",
										width: "100%",
										overflowY: "scroll",
									};
								}}>
								<Component {...pageProps} />
							</Box>
						</AppLayout>
					</main>
				</MantineProvider>
			</AppSpotlightProvider>
		</>
	);
}
