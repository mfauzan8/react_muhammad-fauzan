import ListItem from "./ListItem";

const ListTask = (props) => {
  const { data, deleteTask, handleTaskStatus } = props;
  return (
    <div>
      {data.map((task, index) => (
        <ListItem key={index} item={task} deleteTask={deleteTask} handleTaskStatus={handleTaskStatus} completed={task.completed} index={index} />
      ))}
    </div>
  );
};
export default ListTask;
