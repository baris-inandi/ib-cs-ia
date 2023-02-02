import { Box, Group, Text } from "@mantine/core";
import { IconBell, IconSchoolBell } from "@tabler/icons";
import { useAtom } from "jotai";
import {
	activeAppletAtom,
} from "../../../globalAtoms";
import TopbarSearch from "./TopbarSearch";

export default function Topbar(props: { h: number }) {
	const [activeApplet] = useAtom(activeAppletAtom);
	return (
		<Group
			position="apart"
			w="100%"
			h={props.h}
			sx={(theme) => {
				return {
					color: "black",
					backgroundColor: "white",
					borderBottom: `1px solid ${theme.colors.gray[4]}`
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
