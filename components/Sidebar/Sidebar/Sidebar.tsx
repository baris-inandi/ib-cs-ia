import { Navbar, Stack } from "@mantine/core";
import { IconLogout, IconSwitchHorizontal, TablerIcon } from "@tabler/icons";
import { Dispatch, SetStateAction } from "react";
import applets, { Applet } from "../../../lib/utils/applets";
import NavbarLink from "./NavbarLink";

export default function Sidebar(props: {
	activeApplet: Applet;
	setActiveApplet: Dispatch<SetStateAction<any>>;
}) {
	const links = applets.map((applet: Applet) => {
		return (
			<NavbarLink
				label={applet.title}
				key={applet.id}
				active={applet.id === props.activeApplet.id}
				onClick={() => {
					props.setActiveApplet(applet);
				}}
				route={applet.route}
				icon={applet.iconNoSize as unknown as TablerIcon}
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
					<NavbarLink icon={IconSwitchHorizontal} label="Change account" />
					<NavbarLink icon={IconLogout} label="Logout" />
				</Stack>
			</Navbar.Section>
		</Navbar>
	);
}
