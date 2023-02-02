import { Box, MantineProvider } from "@mantine/core";
import AppLayout from "components/Sidebar/AppLayout";
import { AppProps } from "next/app";
import AppHead from "../components/global/AppHead";
import AppSpotlightProvider from "../components/Spotlight/AppSpotlightProvider";
import mantineTheme from "../mantine.theme";
import "../styles/tailwind.css";

export default function App(props: AppProps) {
	const { Component, pageProps } = props;

	return (
		<>
			<AppHead />
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
