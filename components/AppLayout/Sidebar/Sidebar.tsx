import { Navbar } from "@mantine/core";
import { usePomoSidebarHueRotate } from "../../../hooks/ui/usePomoSidebarHueRotate";
import SidebarLower from "./SidebarLower/SidebarLower";
import SidebarUpper from "./SidebarUpper/SidebarUpper";
import useStyles from "./sidebar.styles";

const Sidebar = () => {
    const { classes } = useStyles();
    const [documentHue] = usePomoSidebarHueRotate();

    return (
        <Navbar
            id="sidebar"
            sx={(theme) => {
                return {
                    filter: `hue-rotate(${documentHue}deg)`,
                    zIndex: 1,
                    background:
                        theme.colorScheme === "dark"
                            ? theme.colors["dark"][7]
                            : theme.colors["gray"][0],
                    borderRight: `1px solid ${
                        theme.colorScheme === "dark"
                            ? theme.colors["dark"][5]
                            : theme.colors["gray"][4]
                    }`,
                    overflowY: "scroll",
                    boxShadow: theme.shadows.xs,
                };
            }}
            height="100%"
            width={{ xs: 200, sm: 280, md: 310, lg: 330 }}
            className={classes.navbar + " noscrollbar"}
        >
            <SidebarUpper section={Navbar.Section} classes={classes} />
            <SidebarLower section={Navbar.Section} classes={classes} />
        </Navbar>
    );
};

export default Sidebar;

