import "../App.css";
import FormAddTask from "./FormAddTask";
import ListTask from "./ListTask";
import React from "react";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      data: [
        {
          id: 1,
          title: "Membuat Komponen",
          completed: true,
        },
        {
          id: 2,
          title: "Unit Testing",
          completed: false,
        },
        {
          id: 3,
          title: "Setup Development Environment",
          completed: true,
        },
        {
          id: 4,
          title: "Deploy ke server",
          completed: false,
        },
      ],
      isShow: true,
    };
  }
  handleTaskStatus(index) {
    const updatedData = [...this.state.data];
    updatedData[index].completed = !updatedData[index].completed;
    this.setState({
      data: updatedData,
    });
  }
  deleteTask = (id) => {
    const newListTask = this.state.data.filter((item) => item.id !== id);
    this.setState({
      data: newListTask,
    });
  };

  addTask = (newTask) => {
    const newList = { ...newTask };
    this.setState({ data: [...this.state.data, newList] });
  };

  render() {
    return (
      <div className="container">
        <p>To Do App</p>
        <FormAddTask />
        <div>
          {this.state.data.map((list, index) => {
            return <ListTask key={index} handleTaskStatus={() => this.handleTaskStatus(index)} completed={list.completed} title={list.title} id={list.id} />;
          })}
        </div>
      </div>
    );
  }
}
export default TodoApp;
