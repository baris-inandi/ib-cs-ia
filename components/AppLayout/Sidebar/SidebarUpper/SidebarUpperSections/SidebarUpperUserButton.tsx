import { Avatar, Flex, Group, Text } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons";
import { useRouter } from "next/router";
import { nameInitials } from "../../../../../lib/utils/nameInitials";

export default function SidebarUpperUserButton() {
    const router = useRouter();
    let name = "Ada Lovelace";

    return (
        <Group position="apart" pt={4} pb={8}>
            <Flex align="center" gap={12}>
                <Avatar size={28} radius={999} variant="filled">
                    {nameInitials(name)}
                </Avatar>
                <Text size="sm">{name}</Text>
            </Flex>
            <Group
                pl={1}
                sx={(theme) => {
                    return {
                        color:
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[5]
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

