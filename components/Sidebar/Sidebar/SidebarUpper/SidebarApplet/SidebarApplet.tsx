import { Box, Text, UnstyledButton } from "@mantine/core";
import { useRouter } from "next/router";
import { Applet } from "../../../../../lib/applets/global/applets";
import { Style } from "../../../../../lib/utils/types";

interface SidebarAppletProps {
  appletOrCourse?: Applet | any; // TODO: type this when Course has an interface implemented
  classes: Style;
  active?: boolean;
}

const SidebarApplet: React.FC<SidebarAppletProps> = (props) => {
  const router = useRouter();

  return (
    <UnstyledButton
      onClick={() => {
        router.push(props.appletOrCourse.route);
      }}
      sx={(theme) => {
        return props.active
          ? {
              background: theme.fn.rgba(theme.colors.accent[5], 0.12),
            }
          : {
              border: `1px solid transparent`,
            };
      }}
      className={props.classes.mainLink}
    >
      <Box
        sx={(theme) => {
          return props.active
            ? {
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.accent[3]
                    : theme.colors.accent[9],
              }
            : {};
        }}
        className={props.classes.mainLinkInner}
      >
        <props.appletOrCourse.iconNoSize
          size={20}
          className={props.classes.mainLinkIcon}
          stroke={1.5}
        />
        <Text>{props.appletOrCourse.title}</Text>
      </Box>
    </UnstyledButton>
  );
};

SidebarApplet.defaultProps = {
  active: false,
};

export default SidebarApplet;
