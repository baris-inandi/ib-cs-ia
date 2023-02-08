import { Box, Group, Text } from "@mantine/core";

const SidebarUpperUpcoming = () => {
	return (
		<Box p={20}>
			<Box
				sx={(themes) => {
					return {
						padding: themes.spacing.lg,
						backgroundColor: themes.colors.gray[0],
						borderRadius: themes.radius.md,
						border: `1px solid ${themes.colors.gray[3]}`,
					};
				}}>
				<Group position="apart" pb={10}>
					<Text size="lg" weight={600} color="black">
						Upcoming
					</Text>
					<Text color="dimmed">due Monday</Text>
				</Group>
				<Text color="black">
					You have homework due on Monday from the course English
				</Text>
			</Box>
		</Box>
	);
};

export default SidebarUpperUpcoming;
