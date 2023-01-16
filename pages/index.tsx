import { Flex } from "@mantine/core";

const Index = () => {
	return (
		<main>
			<Flex
				sx={(theme) => {
					return {
						justifyContent: "center",
						alignItems: "center",
						height: "70px",
						width: "100vw",
						backgroundColor: theme.colors.red[6],
					};
				}}></Flex>
			<Flex
				sx={(theme) => {
					return {
						justifyContent: "center",
						alignItems: "center",
						height: "100%",
						width: "100vw",
						backgroundColor: theme.colors.red[5],
					};
				}}></Flex>
		</main>
	);
};

export default Index;
