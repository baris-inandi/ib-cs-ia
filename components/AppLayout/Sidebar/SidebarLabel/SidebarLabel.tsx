import { Text } from "@mantine/core";

interface SidebarLabelProps {
    text: string;
}

const SidebarLabel: React.FC<SidebarLabelProps> = (props) => {
    return (
        <Text size="xs" color="dimmed" pb="xs" weight="600">
            {props.text}
        </Text>
    );
};

export default SidebarLabel;
