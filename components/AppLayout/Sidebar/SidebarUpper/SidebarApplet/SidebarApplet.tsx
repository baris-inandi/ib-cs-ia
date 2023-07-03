import { Box, Text, UnstyledButton } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { useRouter } from "next/router";
import { Applet } from "../../../../../lib/applets/global/applets";
import { Style } from "../../../../../lib/utils/types";

interface SidebarAppletProps {
    appletOrCourse?: Applet | any; // TODO: type this when Course has an interface implemented
    classes: Style;
    active?: boolean;
    kbdindex?: number;
}

const AIAppletIds = ["recommended"];

const SidebarApplet: React.FC<SidebarAppletProps> = (props) => {
    let shortcut = (props.kbdindex ?? -1).toString();
    const router = useRouter();
    const isAI = AIAppletIds.includes(props.appletOrCourse.id);

    useHotkeys(
        props.kbdindex ?? -1 >= 0
            ? [
                  [
                      shortcut,
                      () => {
                          router.push(props.appletOrCourse.route);
                      },
                  ],
              ]
            : [],
    );

    return (
        <UnstyledButton
            onClick={() => {
                router.push(props.appletOrCourse.route);
            }}
            sx={(theme) => {
                const extras = props.active
                    ? {
                          background:
                              theme.colorScheme === "dark"
                                  ? theme.colors.dark[5]
                                  : theme.white,
                          border: `1px solid ${
                              theme.colorScheme === "dark"
                                  ? theme.colors.dark[4]
                                  : theme.colors.gray[3]
                          }`,
                      }
                    : {
                          border: "1px solid transparent",
                      };
                return {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    fontSize: theme.fontSizes.md,
                    padding: "6px 12px",
                    borderRadius: theme.radius.md,
                    fontWeight: 500,
                    color:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[0]
                            : theme.colors.gray[7],
                    ...extras,
                };
            }}
        >
            <div className="flex flex-col">
                <div className="flex flex-row items-center">
                    <Box
                        sx={(theme) => {
                            return {
                                marginRight: theme.spacing.sm,
                                color: theme.colors.accent[5],
                                height: 18,
                            };
                        }}
                    >
                        <props.appletOrCourse.iconNoSize
                            size={18}
                            stroke={2}
                        />
                    </Box>

                    <Text>{props.appletOrCourse.title}</Text>
                    <Text pl={5} size={12} color="dimmed" pt={0}>
                        {isAI ? "AI" : ""}
                    </Text>
                </div>
            </div>
            {props.kbdindex ? (
                <Text color="dimmed">{shortcut}</Text>
            ) : (
                <></>
            )}
        </UnstyledButton>
    );
};

SidebarApplet.defaultProps = {
    active: false,
};

export default SidebarApplet;
