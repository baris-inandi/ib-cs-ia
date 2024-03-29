import {
    Avatar,
    Flex,
    Group,
    Menu,
    Text,
    UnstyledButton,
} from "@mantine/core";
import {
    IconArrowLeft,
    IconArrowRight,
    IconLogout,
    IconMessageDots,
    IconSettings,
    IconUser,
} from "@tabler/icons";
import { useRouter } from "next/router";
import { nameInitials } from "../../../../../lib/utils/nameInitials";

export default function SidebarUpperUserButton() {
    const router = useRouter();
    let name = "Ada Lovelace";

    return (
        <Group position="apart" pt={4} pb={8}>
            <Menu
                radius="md"
                withArrow
                position="bottom-start"
                transitionProps={{ transition: "scale" }}
                shadow="sm"
                width={260}
            >
                <Menu.Target>
                    <UnstyledButton>
                        <Flex align="center" gap={12}>
                            <Avatar
                                size={28}
                                radius={999}
                                variant="filled"
                            >
                                {nameInitials(name)}
                            </Avatar>
                            <Text size="sm">{name}</Text>
                        </Flex>
                    </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item
                        icon={<IconUser size={14} />}
                        component="a"
                        href="/app/profile"
                    >
                        Profile
                    </Menu.Item>
                    <Menu.Item
                        icon={<IconSettings size={14} />}
                        component="a"
                        href="/app/settings"
                    >
                        Settings
                    </Menu.Item>
                    <Menu.Item
                        icon={<IconMessageDots size={14} />}
                        component="a"
                        href="/app/feedback"
                    >
                        Give feedback
                    </Menu.Item>
                    <Menu.Item
                        color="red"
                        icon={<IconLogout size={14} />}
                        component="a"
                        href="/auth/logout"
                    >
                        Log out
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
            <Group
                pl={1}
                noWrap
                sx={(theme) => {
                    return {
                        color:
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[2]
                                : theme.colors.gray[7],
                    };
                }}
            >
                <IconArrowLeft
                    className="cursor-pointer"
                    onClick={router.back}
                    size={18}
                />
                <IconArrowRight
                    className="cursor-pointer"
                    onClick={router.forward}
                    size={18}
                />
            </Group>
        </Group>
    );
}
