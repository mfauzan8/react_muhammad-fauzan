import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTask, deleteTask, handleTaskStatus } from "../Features/TaskSlice";
import { getTask } from "../Api";

const ListTask = () => {
  const task = useSelector((state) => state.tasklist.task);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTask()
      .then((res) => {
        dispatch(setTask(res));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoading]);

  return (
    <div className="list">
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        task.map((item) => (
          <div className="card m-1" key={item.id}>
            <div className="card-body">
              <div className="d-flex flex-row justify-content-between">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    defaultChecked={item.completed}
                    onClick={() => {
                      dispatch(handleTaskStatus(item.id));
                    }}
                  />
                  <label className="form-check-label " style={item.completed ? { textDecoration: "line-through", color: "grey", fontStyle: "italic" } : { textDecoration: "none" }}>
                    {item.title}
                  </label>
                </div>
                <button
                  className="btnHapus"
                  onClick={() => {
                    dispatch(deleteTask(item.id));
                  }}
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default ListTask;
