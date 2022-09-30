import "../App.css";

const ListItem = ({ item, deleteTask, handleTaskStatus, index }) => {
  return (
    <div className="list">
      <div class="card m-1">
        <div class="card-body">
          <div className="d-flex flex-row justify-content-between">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                checked={item.completed}
                onClick={() => {
                  handleTaskStatus(index);
                }}
              />
              <label className="form-check-label " style={item.completed ? { textDecoration: "line-through", color: "grey", fontStyle: "italic" } : { textDecoration: "none" }} for="flexCheckDefault">
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
        </div>
      </div>
    </div>
  );
};
export default ListItem;
