import {
	Center,
	createStyles,
	Navbar,
	Stack,
	Tooltip,
	UnstyledButton,
} from "@mantine/core";
import {
	IconLogout,
	IconSun,
	IconSwitchHorizontal,
	TablerIcon,
} from "@tabler/icons";
import { useAtom } from "jotai";
import { useState } from "react";
import { accentColorAtom } from "../../atoms/theme.atom";
import applets, { Applet } from "../../lib/utils/applets";

const useStyles = createStyles((theme) => ({
	link: {
		"width": 50,
		"height": 50,
		"borderRadius": theme.radius.md,
		"display": "flex",
		"alignItems": "center",
		"justifyContent": "center",
		"color": theme.white,
		"opacity": 0.85,

		"&:hover": {
			opacity: 1,
			backgroundColor: theme.fn.lighten(
				theme.fn.variant({ variant: "filled", color: theme.primaryColor })
					.background!,
				0.1,
			),
		},
	},

	active: {
		"opacity": 1,
		"&, &:hover": {
			backgroundColor: theme.fn.lighten(
				theme.fn.variant({ variant: "filled", color: theme.primaryColor })
					.background!,
				0.15,
			),
		},
	},
}));

interface NavbarLinkProps {
	icon: TablerIcon;
	label: string;
	active?: boolean;
	onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
	const { classes, cx } = useStyles();
	return (
		<Tooltip label={label} position="right" transitionDuration={0}>
			<UnstyledButton
				onClick={onClick}
				className={cx(classes.link, { [classes.active]: active })}>
				<Icon stroke={1.5} />
			</UnstyledButton>
		</Tooltip>
	);
}

export default function NavbarMinimalColored() {
	const [activeAppletID, setActiveAppletID] = useState("dashboard");
	const [accent] = useAtom(accentColorAtom);

	const links = applets.map((applet: Applet) => {
		return (
			<NavbarLink
				label={applet.title}
				key={applet.id}
				active={applet.id === activeAppletID}
				onClick={() => {
					setActiveAppletID(applet.id);
					applet.triggerCallback();
				}}
				icon={applet.iconNoSize as unknown as TablerIcon}
			/>
		);
	});

	return (
		<Navbar
			height="100vh"
			width={{ base: 86 }}
			p="md"
			sx={(theme) => ({
				backgroundColor: theme.fn.variant({
					variant: "filled",
					color: theme.colors[accent][9],
				}).background,
			})}>
			<Center>
				<IconSun color="white"></IconSun>
			</Center>
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
