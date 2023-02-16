import { Text } from "@mantine/core";
import { useListState } from "@mantine/hooks";
import { IconGripVertical } from "@tabler/icons";
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

const DragList: React.FC<DragListProps> = ({ data }) => {
  const { classes, cx } = useStyles();
  const [state, handlers] = useListState(data);

  const items = state.map((item, index) => (
    <Draggable
      key={item.symbol}
      index={index}
      draggableId={item.symbol}
    >
      {(provided: any, snapshot: any) => (
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
            <IconGripVertical size={18} stroke={1.5} />
          </div>
          <Text className={classes.symbol}>{item.symbol}</Text>
          <div>
            <Text>{item.name}</Text>
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
      onDragEnd={({ destination, source }: any) =>
        handlers.reorder({
          from: source.index,
          to: destination?.index || 0,
        })
      }
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided: any) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragList;
