import { Box, Flex } from "@mantine/core";

export default function InnerAppletViewportWrapper(props: {
	children: React.ReactNode;
}) {
	return (
		<Flex
			sx={(theme) => {
				return {
					overflowY: "scroll",
					backgroundColor: theme.colors.gray[0],
				};
			}}
			h="100%"
			w="100%"
			justify="center">
			<Box w="100%" p={12} maw={900}>
				{props.children}
			</Box>
		</Flex>
	);
}
