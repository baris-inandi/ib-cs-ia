import { Text } from "@mantine/core";
import { useListState } from "@mantine/hooks";
import { IconGripVertical } from "@tabler/icons";
import { useEffect } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
} from "react-beautiful-dnd";
import useStyles from "./DragList.styles";
interface DragListProps {
  data: {
    position: number;
    mass: number;
    symbol: string;
    name: string;
  }[];
}

// TODO: sometimes render occurs before the dnd provider inits. WAIT FOR THE RENDER!

export default function DragList({ data }: DragListProps) {
  const { classes, cx } = useStyles();
  const [state, handlers] = useListState(data);

  useEffect(() => {
    console.log(state);
    // TODO: update the list order in the database
  }, [state]);

  const items = state.map((item, index) => (
    <Draggable
      key={item.symbol}
      index={index}
      draggableId={item.symbol}
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
          <Text className={classes.symbol}>{item.symbol}</Text>
          <div>
            <Text
              onClick={() => {
                console.log("click");
              }}
            >
              {item.name}
            </Text>
            <Text color="dimmed" size="sm">
              Position: {item.position} • Mass: {item.mass}
            </Text>
          </div>
        </div>
      )}
    </Draggable>
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source, reason }) => {
        console.log(reason);
        if (!destination) return;
        handlers.reorder({
          from: source.index,
          to: destination.index >= 0 ? destination.index : source.index,
        });
      }}
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
