import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
	return {
		navbar: {
			backgroundColor: theme.white,
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
			paddingLeft: 10,
			paddingRight: 10,
			paddingBottom: 20,
		},

		mainLink: {
			display: "flex",
			alignItems: "center",
			width: "100%",
			fontSize: theme.fontSizes.sm,
			padding: `9px ${theme.spacing.xs}px`,
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
			color: theme.colors.gray[7],
		},
	};
});
export default useStyles;
