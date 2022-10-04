import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Features/TaskSlice";
import "../App.css";

function AddTask(props) {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    title: "",
    completed: "false",
  });

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputIsNotEmpty = data.title;
    if (inputIsNotEmpty) {
      const newData = {
        title: data.title,
      };

      dispatch(addTask(newData));
      setData({
        title: "",
        completed: "false",
      });
    } else {
      alert("Task Harus Di Isi");
    }
  };
  return (
    <div className="input-group">
      <input type="text" className="inputControl" placeholder="Add To Do ...." value={data.title} name="title" onChange={onChange} />
      <button className="btn-Submit" type="button" id="button-addon2" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default AddTask;
