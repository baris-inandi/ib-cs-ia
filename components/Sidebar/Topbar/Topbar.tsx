import { Box, Group, Text } from "@mantine/core";
import { IconBell, IconSchoolBell } from "@tabler/icons";
import { useAtom } from "jotai";
import {
	accentColorAtom,
	accentColorRgbaAtom,
	activeAppletAtom,
} from "../../../globalAtoms";
import TopbarSearch from "./TopbarSearch";

export default function Topbar(props: { h: number }) {
	const [activeApplet] = useAtom(activeAppletAtom);
	const [_, setAccentRgba] = useAtom(accentColorRgbaAtom);
	const [accent] = useAtom(accentColorAtom);
	return (
		<Group
			position="apart"
			w="100%"
			h={props.h}
			sx={(theme) => {
				const c = theme.fn.rgba(
					theme.fn.darken(theme.colors[accent][8], 0.1),
					1,
				);
				setAccentRgba(c);
				return {
					color: "white",
					backgroundColor: c,
					borderBottom: `2px solid ${theme.colors[accent][9]}`,
				};
			}}>
			<Group w="100%" position="apart" px={28}>
				<Group>
					<IconSchoolBell />
					<Text size={16} fw={500}>
						SchoolApp
					</Text>
					<Text
						size={13}
						sx={{
							minWidth: 140,
						}}>
						{activeApplet?.title}
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
