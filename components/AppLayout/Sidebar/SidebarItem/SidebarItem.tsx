import { Avatar, Box, Text, UnstyledButton } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { useRouter } from "next/router";
import { Applet } from "../../../../lib/applets/global/applets";
import { Course } from "../../../../lib/applets/global/course";
import { nameInitials } from "../../../../lib/utils/nameInitials";
import { Style } from "../../../../lib/utils/types";

interface SidebarItemProps {
    appletOrCourse: Applet | Course;
    classes: Style;
    active?: boolean;
    kbdindex?: number;
}

const SidebarItem: React.FC<SidebarItemProps> = (props) => {
    let shortcut = (props.kbdindex ?? -1).toString();
    const router = useRouter();
    const isCourse = props.appletOrCourse.isCourse;
    console.log(props.appletOrCourse.courseId);

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
                                  : theme.colors.gray[2],
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
                    padding: "5px 14px",
                    borderRadius: theme.radius.md,
                    fontWeight: 400,
                    color:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[0]
                            : theme.colors.gray[7],
                    ...extras,
                };
            }}
        >
            <div className="flex grow-0 flex-col">
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
                        {props.appletOrCourse.iconNoSize ? (
                            <props.appletOrCourse.iconNoSize
                                size={20}
                                stroke={1.5}
                            />
                        ) : (
                            props.appletOrCourse.icon ?? ""
                        )}
                    </Box>
                    <div>
                        <Text
                            truncate
                            className={`max-w-[140px] ${
                                isCourse ? "font-semibold" : ""
                            }`}
                        >
                            {isCourse
                                ? props.appletOrCourse.courseId
                                : props.appletOrCourse.title}
                        </Text>
                        <Text
                            color="dimmed"
                            size="sm"
                            lh={1.2}
                            truncate
                            className="max-w-[140px]"
                        >
                            {isCourse && props.appletOrCourse.title}
                        </Text>
                    </div>
                </div>
            </div>
            {props.kbdindex ? (
                <Text color="dimmed">{shortcut}</Text>
            ) : (
                props.appletOrCourse.admin && (
                    <Avatar size={28} radius={999} variant="light">
                        {nameInitials(props.appletOrCourse.admin.name)}
                    </Avatar>
                )
            )}
        </UnstyledButton>
    );
};

SidebarItem.defaultProps = {
    active: false,
};

export default SidebarItem;

