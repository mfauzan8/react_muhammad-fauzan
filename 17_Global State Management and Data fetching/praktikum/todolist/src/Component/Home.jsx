import { useState } from "react";
import { mockTask } from "../mocData";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

const valueData = mockTask;

function Home() {
  const [data, setData] = useState(valueData);

  const handleTaskStatus = (index) => {
    const updateData = [...data];
    updateData[index].completed = !updateData[index].completed;
    setData(updateData);
  };

  return (
    <div className="container">
      <p>To Do App</p>
      <AddTask />
      <ListTask handleTaskStatus={handleTaskStatus} />
    </div>
  );
}

export default Home;
