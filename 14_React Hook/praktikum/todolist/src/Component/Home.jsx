import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { mockTask } from "../mocData";
import AddTask from "./AddTask";
import ListTask from "./ListTask";


const valueData = mockTask;

function Home () {
  const [data,setData] = useState(valueData)

  const deleteTask = (id) => {
    setData((oldData) => oldData.filter(item => {
      return item.id !== id;
    }))
  };

  const addTask = (newData) => {
    const newTask = { id: uuidv4(), ...newData };
    setData((oldData) => [...oldData, newTask]);
  };

  const handleTaskStatus = (index) => {
    const updateData = [...data];
    updateData[index].completed = !updateData[index].completed;
    setData(updateData);
  };

    return (
      <div className="container">
        <p>To Do App</p>
        <AddTask addTask={addTask} />
        <ListTask data={data} deleteTask={deleteTask} handleTaskStatus={handleTaskStatus} />
      </div>
    );
}

export default Home;
