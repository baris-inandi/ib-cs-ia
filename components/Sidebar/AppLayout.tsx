import { Flex } from "@mantine/core";
import Sidebar from "./Sidebar/Sidebar";

export default function AppLayout(props: { children: React.ReactNode }) {
	return (
		<Flex
			sx={(theme) => {
				return {
					height: "100vh",
					width: "100%",
					backgroundColor: theme.white,
					borderTop: `1px solid ${theme.colors.gray[4]}`,
				};
			}}>
			<Sidebar />
			<Flex
				sx={{
					overflowY: "scroll",
				}}
				h="100%"
				w="100%"
				maw={1440}>
				{props.children}
			</Flex>
		</Flex>
	);
}
