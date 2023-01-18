import { Box, Group, Text, UnstyledButton } from "@mantine/core";
import { useSpotlight } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons";

export default function TopbarSearch() {
	const spotlight = useSpotlight();

	return (
		<UnstyledButton
			w="100%"
			onClick={() => {
				spotlight.openSpotlight();
			}}>
			<Box
				w={400}
				p={4}
				sx={(theme) => {
					return {
						borderRadius: theme.radius.md,
						backgroundColor: "rgba(255,255,255,0.9)",
						color: "black",
						textAlign: "left",
					};
				}}>
				<Group w="100%" position="apart">
					<Group pl={12}>
						<IconSearch width={16} height={16} />
						Search...
					</Group>
					<Text
						px={8}
						py={4}
						sx={(theme) => {
							return {
								fontSize: 14,
								borderRadius: theme.radius.sm,
								backgroundColor: "white",
								border: `1px solid ${theme.colors.gray[4]}`,
							};
						}}>
						Ctrl+K
					</Text>
				</Group>
			</Box>
		</UnstyledButton>
	);
}
