import { Button, ButtonProps } from "@mantine/core";

const DimmedButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button
            {...props}
            sx={(theme) => {
                return {
                    "&:hover": {
                        background: "inherit",
                        opacity: 0.8,
                    },
                    "color":
                        theme.colorScheme === "dark"
                            ? "white"
                            : "black",
                    "backgroundColor":
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[4]
                            : theme.colors.gray[4],
                };
            }}
        ></Button>
    );
};

export default DimmedButton;
