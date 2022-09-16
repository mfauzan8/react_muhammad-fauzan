import Header from "./component/Header";
import Task from "./component/Task";
import React from "react";
import { mockTask } from "../mocData";

class ToDoListPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        data: mockTask,
        isShow: true
      };
    }

    handleTaskStatus(index) {
        const updatedData = [...this.state.data];
        updatedData[index].completed = !updatedData[index].completed;
        this.setState({
          data: updatedData
        });
      }
    
      render() {
        return (
            <>
            <Header/>
          <div>
            {
              this.state.data.map((list, idx) => {
                return <Task key={idx}
                        handleTaskStatus={() => this.handleTaskStatus(idx)}
                             completed={list.completed}
                             title={list.title}/>;
              })
            }
          </div>
          </>
        );
      }
    }
export default ToDoListPage;