import { Tabs } from "@mantine/core";
import {
    IconCalendar,
    IconExclamationCircle,
    IconSchool,
} from "@tabler/icons";
import { useAtom } from "jotai";
import TaskListFilterViewDatetime from "./TaskList/FilterViews/TaskListFilterViewDatetime";
import TaskListFilterViewPriority from "./TaskList/FilterViews/TaskListFilterViewPriority";
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

                <Tabs.Panel value="customorder" pt="xs">
                    <TaskListFilterViewDatetime />
                </Tabs.Panel>

                <Tabs.Panel value="datetime" pt="xs">
                    <TaskListFilterViewDatetime />
                </Tabs.Panel>

                <Tabs.Panel value="priority" pt="xs">
                    <TaskListFilterViewPriority />
                </Tabs.Panel>

                <Tabs.Panel value="course" pt="xs">
                    <TaskListFilterViewDatetime />
                </Tabs.Panel>
            </Tabs>
        </>
    );
};

export default Tasks;

