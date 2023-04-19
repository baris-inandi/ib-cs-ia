import {
    Accordion,
    Badge,
    Checkbox,
    Drawer,
    Group,
    Text,
} from "@mantine/core";
import { useListState, useToggle } from "@mantine/hooks";
import { IconGripVertical } from "@tabler/icons";
import dayjs, { Dayjs } from "dayjs";
import { useAtom } from "jotai";
import { useEffect } from "react";
import {
    DragDropContext,
    Draggable,
    Droppable,
} from "react-beautiful-dnd";
import { tasksAtom } from "../tasks.atom";
import useStyles from "./DragList.styles";

interface DragListProps {
    day: Dayjs;
}

// TODO: sometimes render occurs before the "dnd" provider inits. WAIT FOR THE RENDER!

const DragList: React.FC<DragListProps> = (props) => {
    const [data, setData] = useAtom(tasksAtom);
    const { classes, cx } = useStyles();
    const [state, handlers] = useListState(data);

    const timeOfComponentMounted = dayjs();
    const formatDay = (day: Dayjs) => {
        return day.format("D MMM YYYY, dddd");
    };
    let dayFormatted = formatDay(props.day);
    let isOverdue = props.day.isBefore(timeOfComponentMounted);

    useEffect(() => {
        setData(state);
    }, [state, setData]);

    const [opened, openClose] = useToggle();

    const items = state.map((item, index) => (
        <div key={item.id}>
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
                            [classes.itemDragging]: snapshot.isDragging,
                        })}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                    >
                        <div
                            {...provided.dragHandleProps}
                            className={classes.dragHandle}
                        >
                            <IconGripVertical size={20} stroke={1.5} />
                        </div>
                        <div className="pr-4">
                            <Checkbox
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
    ));

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
                            handlers.reorder({
                                from: source.index,
                                to:
                                    destination.index >= 0
                                        ? destination.index
                                        : source.index,
                            });
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

