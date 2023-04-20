import {
    Accordion,
    Badge,
    Checkbox,
    Drawer,
    Group,
    Text,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { IconGripVertical } from "@tabler/icons";
import dayjs, { Dayjs } from "dayjs";
import { useAtom } from "jotai";
import {
    DragDropContext,
    Draggable,
    Droppable,
} from "react-beautiful-dnd";
import useTasks from "../../../../../../hooks/applets/tasks/useTasks";
import { tasksShowCompleteAtom } from "../../tasks.atom";
import useStyles from "./DragList.styles";

interface DragListProps {
    day: Dayjs;
}

// TODO: sometimes render occurs before the "dnd" provider inits. WAIT FOR THE RENDER!

const DragList: React.FC<DragListProps> = (props) => {
    const taskHandlers = useTasks();
    console.log("taskhandlers", taskHandlers);

    const { classes, cx } = useStyles();
    const [showCompleted] = useAtom(tasksShowCompleteAtom);

    const timeOfComponentMounted = dayjs();
    const formatDay = (day: Dayjs) => {
        return day.format("D MMM YYYY, dddd");
    };
    let dayFormatted = formatDay(props.day);
    let isOverdue = props.day.isBefore(timeOfComponentMounted);

    const [opened, openClose] = useToggle();

    const items = taskHandlers.sortBy().map((item, index) => {
        return (
            <div
                className={
                    !showCompleted && item.complete ? "hidden" : ""
                }
                key={item.id}
            >
                <Drawer
                    opened={opened}
                    onClose={openClose}
                    position="right"
                    title={item.title}
                    size="xl"
                    overlayOpacity={0.2}
                >
                    {/* Drawer content */}
                </Drawer>
                <Draggable
                    key={item.id}
                    index={index}
                    draggableId={item.id}
                >
                    {(provided, snapshot) => (
                        <div
                            className={cx(classes.item, {
                                [classes.itemDragging]:
                                    snapshot.isDragging,
                            })}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                        >
                            <div
                                {...provided.dragHandleProps}
                                className={classes.dragHandle}
                            >
                                <IconGripVertical
                                    size={20}
                                    stroke={1.5}
                                />
                            </div>
                            <div className="pr-4">
                                <Checkbox
                                    checked={item.complete}
                                    color="accent"
                                    radius={999}
                                ></Checkbox>
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={() => {
                                    openClose();
                                }}
                            >
                                <Text
                                    className={
                                        item.complete
                                            ? "line-through"
                                            : ""
                                    }
                                    onClick={() => {
                                        console.log("click");
                                    }}
                                >
                                    {item.title}
                                </Text>
                                <Text color="dimmed" size="sm">
                                    {item.description}
                                </Text>
                            </div>
                        </div>
                    )}
                </Draggable>
            </div>
        );
    });

    return (
        <Accordion
            radius="md"
            styles={{ content: { paddingBottom: 0, paddingTop: 0 } }}
            chevronPosition="left"
            defaultValue="value"
        >
            <Accordion.Item value="value">
                <Accordion.Control>
                    <Group className="font-medium">
                        {dayFormatted}
                        {dayFormatted ===
                        formatDay(timeOfComponentMounted) ? (
                            <Badge variant="filled">Today</Badge>
                        ) : (
                            isOverdue && (
                                <Badge color="red" variant="filled">
                                    Overdue
                                </Badge>
                            )
                        )}
                    </Group>
                </Accordion.Control>
                <Accordion.Panel>
                    <DragDropContext
                        onDragEnd={({
                            destination,
                            source,
                            reason,
                        }) => {
                            console.log(reason);
                            if (!destination) return;
                            /* handlers.reorder({
                                from: source.index,
                                to:
                                    destination.index >= 0
                                        ? destination.index
                                        : source.index,
                            }); */
                        }}
                    >
                        <Droppable
                            droppableId="dnd-list"
                            direction="vertical"
                        >
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {items}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
};

export default DragList;

