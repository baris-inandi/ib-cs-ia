import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
	return {
		navbar: {
			paddingTop: 0,
			backgroundColor: theme.white,
		},

		section: {
			"marginLeft": -theme.spacing.md,
			"marginRight": -theme.spacing.md,
			"marginBottom": theme.spacing.md,

			"&:not(:last-of-type)": {
				borderBottom: `1px solid ${theme.colors.gray[3]}`,
			},
		},

		sectionCompact: {
			"marginLeft": -theme.spacing.md,
			"marginRight": -theme.spacing.md,

			"&:not(:last-of-type)": {
				borderBottom: `1px solid ${theme.colors.gray[3]}`,
			},
		},

		searchCode: {
			fontWeight: 700,
			fontSize: 10,
			backgroundColor: theme.colors.gray[0],
			border: `1px solid ${theme.colors.gray[2]}`,
		},

		mainLinks: {
			paddingLeft: theme.spacing.md - theme.spacing.xs,
			paddingRight: theme.spacing.md - theme.spacing.xs,
			paddingBottom: 20,
		},

		mainLink: {
			display: "flex",
			alignItems: "center",
			width: "100%",
			fontSize: theme.fontSizes.sm,
			padding: `10px ${theme.spacing.xs}px`,
			borderRadius: theme.radius.md,
			fontWeight: 500,
			color: theme.colors.gray[7],
		},

		mainLinkInner: {
			display: "flex",
			alignItems: "center",
			flex: 1,
		},

		mainLinkIcon: {
			marginRight: theme.spacing.sm,
			color:
				theme.colorScheme === "dark"
					? theme.colors.dark[2]
					: theme.colors.gray[6],
		},

		mainLinkBadge: {
			padding: 0,
			width: 20,
			height: 20,
			pointerEvents: "none",
		},

		collections: {
			paddingLeft: theme.spacing.md - 6,
			paddingRight: theme.spacing.md - 6,
			paddingBottom: theme.spacing.xl,
		},

		collectionsHeader: {
			paddingLeft: theme.spacing.md + 2,
			paddingRight: theme.spacing.md,
			marginBottom: 5,
		},

		collectionLink: {
			display: "block",
			padding: `10px ${theme.spacing.xs}px`,
			textDecoration: "none",
			borderRadius: theme.radius.md,
			fontSize: theme.fontSizes.xs,
			color: theme.colors.gray[7],
			lineHeight: 1,
			fontWeight: 500,
		},
	};
});
export default useStyles;
