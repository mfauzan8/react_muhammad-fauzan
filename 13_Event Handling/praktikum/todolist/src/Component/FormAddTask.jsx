import "../App.css";
function FormAddTask() {
  return (
    <div className="input-group">
      <input type="text" className="inputControl" placeholder="Add To Do ...." />
      <button className="btn-Submit" type="button" id="button-addon2">
        Submit
      </button>
    </div>
  );
}
export default FormAddTask;
