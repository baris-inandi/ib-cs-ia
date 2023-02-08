import { Box, Flex, Group, Text } from "@mantine/core";
import { IconCat } from "@tabler/icons";
import { useAtom } from "jotai";
import { activeAppletAtom } from "../../../../global.atom";
import applets from "../../../../lib/applets/global/applets";
import { Style } from "../../../../lib/utils/types";
import SidebarApplet from "./SidebarApplet/SidebarApplet";
import SidebarUpperSearchbar from "./SidebarUpperSections/SidebarUpperSearchbar";
import SidebarUpperUpcoming from "./SidebarUpperSections/SidebarUpperUpcoming";
import SidebarUpperUserButton from "./SidebarUpperSections/SidebarUpperUserButton";

interface Props {
	section: any;
	classes: Style;
}

const SidebarUpper: React.FC<Props> = (props) => {
	const [activeApplet] = useAtom(activeAppletAtom);

	const appletSidebarItems = Array.from(applets.values()).map((applet) => (
		<SidebarApplet
			classes={props.classes}
			appletOrCourse={applet}
			key={applet.id}
			active={activeApplet.id === applet.id}
		/>
	));

	return (
		<>
			<props.section className={props.classes.sectionCompact}>
				<Flex gap={8} py={14} px={20} align="center">
					<IconCat size={18} />
					<Group align="baseline">
						<Text size={15} fw={600}>
							SchoolApp
						</Text>
						<div className="hidden md:inline">
							<Text size={12}>{activeApplet?.title}</Text>
						</div>
					</Group>
				</Flex>
			</props.section>

			<props.section className={props.classes.sectionCompact}>
				<SidebarUpperUserButton
					image="https://i.imgur.com/fGxgcDF.png"
					name="Bob Rulebreaker"
					email="Product owner"
				/>
			</props.section>
			<props.section className={props.classes.sectionCompact}>
				<Box p={10}>
					<SidebarUpperSearchbar />
				</Box>
				<div className={props.classes.mainLinks}>
					{appletSidebarItems}
				</div>
				<SidebarUpperUpcoming />
			</props.section>
			<props.section className={props.classes.sectionCompact}>
			</props.section>
		</>
	);
};

export default SidebarUpper;
