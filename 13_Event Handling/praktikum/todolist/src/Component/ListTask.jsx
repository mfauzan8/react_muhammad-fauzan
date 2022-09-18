import ListItem from "./ListItem";

const ListTask = (props) => {
  const { data, deleteTask, handleTaskStatus } = props;
  return (
    <div>
      {data.map((task) => (
        <ListItem key={task.id} item={task} deleteTask={deleteTask} handleTaskStatus={handleTaskStatus} completed={task.completed} />
      ))}
    </div>
  );
};
export default ListTask;
