import { Group, Select, Text } from "@mantine/core";
import dayjs from "dayjs";
import { useAtom } from "jotai";
import { tasksFilterAtom } from "../tasks.atom";

interface TasksHeaderProps {}

const TasksHeader: React.FC<TasksHeaderProps> = () => {
    const today = dayjs().format("dddd, MMMM D");
    const [val, setVal] = useAtom(tasksFilterAtom);

    return (
        <Group position="apart" py={16} px={20}>
            <Text className="text-2xl font-bold">{today}</Text>
            <Group>
                Filter by:
                <Select
                    defaultChecked={true}
                    defaultValue={"datetime"}
                    onChange={setVal as (value: string) => void}
                    value={val}
                    data={[
                        { value: "datetime", label: "Date and Time" },
                        { value: "priority", label: "Priority" },
                        { value: "course", label: "Course" },
                    ]}
                ></Select>
            </Group>
        </Group>
    );
};

export default TasksHeader;
