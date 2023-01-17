import { Anchor, Group, Text } from "@mantine/core";

const SpotlightBottom = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			{children}
			<Group
				position="apart"
				px={15}
				py="xs"
				sx={(theme) => ({
					borderTop: `1px solid ${
						theme.colorScheme === "dark"
							? theme.colors.dark[4]
							: theme.colors.gray[2]
					}`,
				})}>
				<Text size="xs" color="dimmed">
					Search powered by Mantine
				</Text>
				<Anchor size="xs" href="#">
					Learn more
				</Anchor>
			</Group>
		</div>
	);
};
export default SpotlightBottom;
