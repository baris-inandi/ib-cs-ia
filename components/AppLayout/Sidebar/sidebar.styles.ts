import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
    return {
        navbar: {
            padding: "0 !important",
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[7]
                    : theme.white,
        },

        section: {
            "&:not(:last-of-type)": {
                borderBottom: `1px solid ${
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[5]
                        : theme.colors.gray[4]
                }`,
            },
        },

        searchCode: {
            fontWeight: 700,
            fontSize: 10,
            backgroundColor: theme.colors.gray[0],
            border: `1px solid ${theme.colors.gray[2]}`,
        },

        mainLink: {
            display: "flex",
            alignItems: "center",
            width: "100%",
            fontSize: theme.fontSizes.sm,
            padding: `9px ${theme.spacing.xs}px`,
            borderRadius: theme.radius.md,
            fontWeight: 500,
            color:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[0]
                    : theme.colors.gray[7],
        },

        mainLinkInner: {
            display: "flex",
            alignItems: "center",
            flex: 1,
        },

        mainLinkIcon: {
            marginRight: theme.spacing.md,
        },
    };
});
export default useStyles;
