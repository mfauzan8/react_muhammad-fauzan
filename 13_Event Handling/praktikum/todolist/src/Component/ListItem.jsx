import "../App.css";

const ListItem = ({ item, deleteTask, handleTaskStatus, completed }) => {
  if (completed === true) {
    return (
      <div>
        <div className="list">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onClick={() => {
                handleTaskStatus(item.id);
              }}
              checked
            />
            <label className="form-check-label complete" for="flexCheckDefault">
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
  }
  return (
    <div>
      <div className="list">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onClick={() => {
              handleTaskStatus(item.id);
            }}
          />
          <label className="form-check-label" for="flexCheckDefault">
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
