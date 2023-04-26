import { Accordion, Box } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { useState } from "react";
import TaskWizardBadgeArea from "../shared/TaskWizardBadgeArea/TaskWizardBadgeArea";
import TaskWizardInput from "../shared/TaskWizardInput";

interface TaskWizardProps {}

const TaskWizardLite: React.FC<TaskWizardProps> = () => {
    const [open, toggle] = useToggle();
    const [text, setText] = useState("");

    return (
        <Accordion
            styles={{
                content: {
                    padding: 0,
                },
                item: {
                    border: "none",
                    padding: 0,
                },
                control: {
                    "display": "block",
                    "cursor": "default",
                    "padding": 0,
                    "backgroundColor": "transparent",
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                },
            }}
            value={open ? "content" : null}
            chevron={false}
        >
            <Accordion.Item value="content">
                <Accordion.Control>
                    <Box
                        className="select-none pl-11"
                        sx={(theme) => {
                            return {
                                width: "100%",
                                borderTop: `1px solid ${
                                    theme.colorScheme === "dark"
                                        ? theme.colors.dark[5]
                                        : theme.colors.gray[3]
                                }`,
                            };
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                height: 48,
                                paddingLeft: 0,
                                paddingRight: 0,
                            }}
                        >
                            <TaskWizardInput
                                value={[text, setText]}
                                onFocus={() => {
                                    toggle();
                                }}
                                onBlur={() => {
                                    toggle();
                                }}
                            />
                        </Box>
                    </Box>
                </Accordion.Control>
                <Accordion.Panel>
                    <div className="pl-11">
                        <TaskWizardBadgeArea />
                    </div>
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
};

export default TaskWizardLite;

