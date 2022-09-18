import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { mockTask } from "../mocData";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: mockTask,
    };
  }

  deleteTask = (id) => {
    const newListTask = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: newListTask });
  };

  addTask = (newData) => {
    const newTask = { id: uuidv4(), ...newData };
    this.setState({ data: [...this.state.data, newTask] });
  };

  handleTaskStatus = (index) => {
    const updateData = [...this.state.data];
    updateData[index].completed = !updateData[index].completed;
    this.setState({
      data: updateData,
    });
  };

  render() {
    return (
      <div className="container">
        <p>To Do App</p>
        <AddTask addTask={this.addTask} />
        <ListTask data={this.state.data} deleteTask={this.deleteTask} handleTaskStatus={this.handleTaskStatus} />
      </div>
    );
  }
}

export default Home;
