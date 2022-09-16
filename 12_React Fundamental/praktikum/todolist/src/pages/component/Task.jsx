import '../../App.css';
import React from "react";

class Task extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.completed) {
                return  <button className='taskFalse' onClick={this.props.handleTaskStatus}> 
                            {this.props.title}
                        </button>
            }
            return      <button className='task' onClick={this.props.handleTaskStatus}>
                            {this.props.title}
                            </button>
        }
  }

export default Task;
