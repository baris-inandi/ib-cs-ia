import { Tabs, Text } from "@mantine/core";
import {
    IconCalendar,
    IconExclamationCircle,
    IconSchool,
} from "@tabler/icons";
import { useAtom } from "jotai";
import TaskList from "./TaskList/TaskList";
import TasksHotkeys from "./TasksHotkeys";
import { tasksFilterTabSelectionAtom } from "./tasks.atom";

const Tasks = () => {
    const [activeTab, setActiveTab] = useAtom(
        tasksFilterTabSelectionAtom,
    );

    return (
        <>
            <TasksHotkeys />
            <Tabs
                value={activeTab}
                onTabChange={setActiveTab}
                radius="md"
                pt={14}
                variant="pills"
                defaultValue="datetime"
                styles={{
                    tabsList: {
                        borderWidth: 1,
                        paddingLeft: 14,
                        paddingBottom: 2,
                    },
                    tab: { padding: "8px 12px" },
                }}
            >
                <div className="flex items-center gap-3 px-5">
                    <Text>Filter by:</Text>
                    <Tabs.List>
                        <Tabs.Tab
                            value="datetime"
                            icon={<IconCalendar size={18} />}
                        >
                            By Date/Time
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="priority"
                            icon={<IconExclamationCircle size={18} />}
                        >
                            By Priority
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="course"
                            icon={<IconSchool size={18} />}
                        >
                            By Course
                        </Tabs.Tab>
                    </Tabs.List>
                </div>

                <Tabs.Panel value="datetime" pt="xs">
                    <TaskList filter="datetime" />
                </Tabs.Panel>

                <Tabs.Panel value="priority" pt="xs">
                    <TaskList filter="priority" />
                </Tabs.Panel>

                <Tabs.Panel value="course" pt="xs">
                    <TaskList filter="course" />
                </Tabs.Panel>
            </Tabs>
        </>
    );
};

export default Tasks;
