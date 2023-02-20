import { Text } from "@mantine/core";

interface AppKbdProps {
  content: string;
}

const AppKbd: React.FC<AppKbdProps> = (props) => {
  return (
    <Text
      px={10}
      py={2}
      sx={(theme) => {
        return {
          display: "inline-block",
          fontSize: 13,
          borderRadius: theme.radius.sm,
          backgroundColor:
            theme.colorScheme === "dark"
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
      {props.content}
    </Text>
  );
};

export default AppKbd;
