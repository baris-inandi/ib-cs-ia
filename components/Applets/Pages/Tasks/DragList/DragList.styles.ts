import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    item: {
        transition: `border .33s ease-out,
            box-shadow .33s ease-out,a
            background-color .33s ease-out,
            border-radius .33s ease-out`,
        display: "flex",
        alignItems: "center",
        borderTop: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[3]
        }`,
        padding: `${theme.spacing.xs}px ${theme.spacing.xl}px`,
        paddingLeft: 0,
        height: "100%",
    },

    itemDragging: {
        border: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[4]
        }`,
        boxShadow: theme.shadows.sm,
        borderRadius: theme.radius.md,
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
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

