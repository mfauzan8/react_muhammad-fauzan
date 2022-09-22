import "../App.css";

const ListItem = ({ item, deleteTask, handleTaskStatus, completed, index }) => {

    return (
      <div>
        <div className="list">
          <div className="form-check" >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              checked={item.completed}
              onClick={() => {
                handleTaskStatus(index);
              }}/>
            <label className="form-check-label " style={completed ? {textDecoration: "line-through", color:"grey", fontStyle: "italic"} : {textDecoration:"none"}}   for="flexCheckDefault">
              {item.title}
            </label>
          </div>
          <button
            className="btnHapus"
            onClick={() => {
              deleteTask(item.id);
            }}
          >
            Hapus
          </button>
        </div>
        <hr />
      </div>
    );
};
export default ListItem;
