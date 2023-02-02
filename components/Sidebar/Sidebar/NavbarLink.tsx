import { createStyles, Tooltip, UnstyledButton } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => {
	let accent = "gray";
	return {
		link: {
			"width": 50,
			"height": 50,
			"borderRadius": theme.radius.md,
			"display": "flex",
			"alignItems": "center",
			"justifyContent": "center",
			"color": theme.black,
			"opacity": 0.7,

			"&:hover": {
				opacity: 1,
				backgroundColor: theme.colors.gray[0],
			},
		},

		active: {
			"opacity": 1,
			"&, &:hover": {
				color: theme.colors[accent][9],
				background: `linear-gradient(0deg, ${theme.fn.lighten(
					theme.colors[accent][1],
					0.33,
				)} ,${theme.colors[accent][1]});`,
				border: `2px solid ${theme.colors[accent][1]}`,
			},
		},
	};
});
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
	const { classes, cx } = useStyles();
	const router = useRouter();

	return (
		<Tooltip
			label={label}
			position="right"
			withArrow
			transitionDuration={200}
			transition="pop-top-left"
			sx={{
				fontSize: 15,
			}}
			arrowSize={8}>
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
