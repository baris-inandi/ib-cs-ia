import {
  Avatar,
  Group,
  Text,
  UnstyledButton,
  UnstyledButtonProps,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";

interface UserButtonProps extends UnstyledButtonProps {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

export default function SidebarUpperUserButton({
  image,
  name,
  email,
}: UserButtonProps) {
  return (
    <UnstyledButton w="100%" p={10} pb={0}>
      <Group
        position="apart"
        sx={(theme) => {
          return {
            borderRadius: theme.radius.md,
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            paddingLeft: theme.spacing.md,
            paddingRight: theme.spacing.md,
            paddingTop: theme.spacing.sm,
            paddingBottom: theme.spacing.sm,
            border: `1px solid ${
              theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[4]
            }`,
          };
        }}
      >
        <Avatar src={image} radius="xl" />
        <Group style={{ flex: 1 }} position="apart">
          <div>
            <Text size="md" weight={500}>
              {name}
            </Text>

            <Text color="dimmed" size="xs">
              {email}
            </Text>
          </div>

          <IconChevronDown size={14} stroke={1.5} />
        </Group>
      </Group>
    </UnstyledButton>
  );
}
