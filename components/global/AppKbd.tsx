import { Text } from "@mantine/core";
import { ReactNode } from "react";
import { Style } from "../../lib/utils/types";

interface AppKbdProps {
    content?: string;
    onClick?: () => void;
    hundredPercent?: boolean;
    fullHeight?: boolean;
    sidebarStyles?: boolean;
    children?: ReactNode;
}

const AppKbd: React.FC<AppKbdProps> = (props) => {
    return (
        <Text
            className="select-none"
            onClick={props.onClick}
            px={10}
            py={2}
            sx={(theme) => {
                let others: Style = props.hundredPercent
                    ? {
                          height: "100%",
                          width: "100%",
                      }
                    : {};
                others = props.fullHeight
                    ? {
                          height: "100%",
                          ...others,
                      }
                    : {
                          ...others,
                      };
                return {
                    ...others,
                    display: "inline-block",
                    fontSize: props.sidebarStyles ? 16 : 14,
                    borderRadius: props.sidebarStyles
                        ? theme.radius.md
                        : theme.radius.sm,
                    backgroundColor: props.sidebarStyles
                        ? theme.colorScheme === "dark"
                            ? theme.colors.dark[6]
                            : theme.white
                        : theme.colorScheme === "dark"
                        ? theme.colors.dark[4]
                        : theme.white,
                    border: `1px solid ${
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[4]
                            : theme.colors.gray[4]
                    }`,
                    color: theme.colors.gray[6],
                };
            }}
        >
            <div className="flex h-full w-full items-center justify-center">
                {props.content}
                {props.children}
            </div>
        </Text>
    );
};

export default AppKbd;

