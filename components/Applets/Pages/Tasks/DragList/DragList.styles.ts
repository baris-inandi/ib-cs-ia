import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    item: {
        transition: "box-shadow 0.33s ease-out",
        display: "flex",
        alignItems: "center",
        borderRadius: theme.radius.md,
        border: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[3]
        }`,
        padding: `${theme.spacing.xs}px ${theme.spacing.xl}px`,
        paddingLeft: 0,
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.white,
        marginBottom: theme.spacing.sm,
        height: "100%",
    },

    itemDragging: {
        boxShadow: theme.shadows.md,
    },

    symbol: {
        fontSize: 30,
        fontWeight: 700,
        width: 60,
    },

    dragHandle: {
        ...theme.fn.focusStyles(),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[1]
                : theme.colors.gray[6],
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        backgroundColor: "accent",
    },
}));

export default useStyles;
