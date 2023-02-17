import DragList from "./DragList/DragList";

const Tasks = () => {
  return (
    <div>
      <DragList
        data={[
          {
            position: 2,
            mass: 2,
            symbol: "Test",
            name: "Test",
          },
          {
            position: 2,
            mass: 2,
            symbol: "Test",
            name: "Test",
          },
          {
            position: 2,
            mass: 2,
            symbol: "Test",
            name: "Test",
          },
        ]}
      />
    </div>
  );
};

export default Tasks;
