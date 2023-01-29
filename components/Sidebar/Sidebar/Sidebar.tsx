import { Navbar, Stack } from "@mantine/core";
import { IconSettings, TablerIcon } from "@tabler/icons";
import { useAtom } from "jotai";
import { activeAppletAtom } from "../../../globalAtoms";
import applets, { Applet } from "../../../lib/utils/applets";
import NavbarLink from "./NavbarLink";

export default function Sidebar() {
	const [activeApplet, setActiveApplet] = useAtom(activeAppletAtom);
	const links = Array.from(applets.values()).map((applet: Applet) => {
		return (
			<NavbarLink
				label={applet.title}
				key={applet.id}
				active={applet.id === activeApplet?.id}
				onClick={() => {
					setActiveApplet(applet);
				}}
				route={applet.route}
				icon={applet.iconNoSize as unknown as TablerIcon}
				tooltipIDForColor={applet.id}
			/>
		);
	});
	return (
		<Navbar
			height="100%"
			width={{ base: 86 }}
			p="md"
			sx={(theme) => ({
				borderRight: `1px solid ${theme.colors.gray[5]}`,
				backgroundColor: theme.white,
			})}>
			<Stack
				justify="center"
				align="stretch"
				style={{ height: "100%" }}
				spacing={4}>
				{links}
			</Stack>
			<Navbar.Section>
				<Stack justify="center" spacing={0}>
					<NavbarLink icon={IconSettings} label="Settings" />
				</Stack>
			</Navbar.Section>
		</Navbar>
	);
}
