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
