import { Box, Group, Text } from "@mantine/core";

const SidebarUpperUpcoming = () => {
	return (
		<Box
			sx={(themes) => {
				return {
					padding: themes.spacing.lg,
					backgroundColor: themes.colors.gray[1],
					marginTop: themes.spacing.xl,
				};
			}}>
			<Group position="apart">
				<Text size="lg" weight={600}>
					Upcoming
				</Text>
				<Text color="dimmed">due Monday</Text>
			</Group>
			<p className="text-sm">
				You have homework due on <span className="font-bold">Monday</span> from
				the course <span className="font-bold">English</span>
			</p>
		</Box>
	);
};

export default SidebarUpperUpcoming;
