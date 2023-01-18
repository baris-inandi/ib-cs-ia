import { Box, Group, Text } from "@mantine/core";
import { IconBell, IconSchoolBell } from "@tabler/icons";
import { useAtom } from "jotai";
import { accentColorAtom } from "../../../atoms/theme.atom";
import TopbarSearch from "./TopbarSearch";

export default function Topbar(props: { activeAppletTitle: string }) {
	const [accent] = useAtom(accentColorAtom);
	return (
		<Group
			position="apart"
			w="100%"
			h={{ base: 60 }}
			sx={(theme) => {
				return {
					color: "white",
					backgroundColor: theme.fn.darken(theme.colors[accent][8], 0.1),
					borderBottom: `2px solid ${theme.colors[accent][9]}`,
				};
			}}>
			<Group w="100%" position="apart" px={32}>
				<Group>
					<IconSchoolBell />
					<Text size={20} fw={500}>
						SchoolApp
					</Text>
					<Text
						sx={{
							minWidth: 140,
						}}>
						{props.activeAppletTitle}
					</Text>
					<Box pl={20}>
						<TopbarSearch />
					</Box>
				</Group>
				<Group>
					<Group>
						<IconBell />4
					</Group>
					{/* TODO: topbarprofile here */}
				</Group>
			</Group>
		</Group>
	);
}
