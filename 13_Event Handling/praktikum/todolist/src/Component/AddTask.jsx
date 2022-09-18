import { Component } from "react";
import "../App.css";

class AddTask extends Component {
  state = {
    title: "",
    completed: "false",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const inputIsNotEmpty = this.state.title;
    if (inputIsNotEmpty) {
      const newData = {
        title: this.state.title,
      };

      this.props.addTask(newData);
      this.setState({
        title: "",
        completed: "false",
      });
    } else {
      alert("Task Harus Di Isi");
    }
  };

  render() {
    return (
      <div className="input-group">
        <input type="text" className="inputControl" placeholder="Add To Do ...." value={this.state.title} name="title" onChange={this.onChange} />
        <button className="btn-Submit" type="button" id="button-addon2" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default AddTask;
