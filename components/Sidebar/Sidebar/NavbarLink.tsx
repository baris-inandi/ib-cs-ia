import { createStyles, MantineColor, Tooltip, UnstyledButton } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { accentColorAtom } from "../../../atoms/theme.atom";

const useStyles = (accent: MantineColor) => {
	return createStyles((theme) => ({
		link: {
			"width": 50,
			"height": 50,
			"borderRadius": theme.radius.md,
			"display": "flex",
			"alignItems": "center",
			"justifyContent": "center",
			"color": theme.black,
			"opacity": 0.85,

			"&:hover": {
				opacity: 1,
				backgroundColor: theme.colors.gray[0],
			},
		},

		active: {
			"opacity": 1,
			"&, &:hover": {
				backgroundColor: theme.colors[accent][0],
				border: `1px solid ${theme.colors[accent][3]}`
			},
		},
	}));
}

interface NavbarLinkProps {
	icon: TablerIcon;
	label: string;
	active?: boolean;
	onClick?(): void;
	route?: string;
}

export default function NavbarLink({
	icon: Icon,
	label,
	active,
	onClick,
	route,
}: NavbarLinkProps) {
	const [accent] = useAtom(accentColorAtom);
	const { classes, cx } = useStyles(accent)();
	const router = useRouter();

	return (
		<Tooltip
			label={label}
			position="right"
			withArrow
			transitionDuration={200}
			transition="pop-top-left"
			sx={(theme) => {
				return {
					backgroundColor: theme.black,
				};
			}}>
			<UnstyledButton
				onClick={() => {
					if (onClick) {
						onClick();
					}
					if (route) {
						router.push(route);
					}
				}}
				className={cx(classes.link, { [classes.active]: active })}>
				<Icon stroke={1.5} />
			</UnstyledButton>
		</Tooltip>
	);
}
