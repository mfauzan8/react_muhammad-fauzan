import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../Features/TaskSlice";
import ListItem from "./ListItem";

const ListTask = (props) => {
  const { handleTaskStatus } = props;
  const task = useSelector((state) => state.tasklist.tasks);
  const dispatch = useDispatch;
  return (
    <div>
      {task.map((task, index) => (
        <ListItem
          key={index}
          item={task}
          deleteTask={() => {
            dispatch(deleteTask(task.id));
          }}
          handleTaskStatus={handleTaskStatus}
          index={index}
        />
      ))}
    </div>
  );
};
export default ListTask;
