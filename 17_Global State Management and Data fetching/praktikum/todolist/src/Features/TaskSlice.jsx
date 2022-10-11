import { createSlice } from "@reduxjs/toolkit";
import { client } from "../Api";

export const TaskSlice = createSlice({
  name: "tasklist",
  initialState: {
    task: [],
  },
  reducers: {
    setTask: (state, action) => {
      state.task = action.payload;
    },
    deleteTask: (state, action) => {
      client.delete(`${action.payload}`);
      state.task = state.task.filter((item) => {
        return item.id !== action.payload;
      });
    },
    addTask: (state, action) => {
      const newTask = {
        ...action.payload,
      };
      client.post("/", newTask);
      state.task = [...state.task, newTask];
    },
    handleTaskStatus: (state, action) => {
      let findData = [...state.task].find(({ id }) => id === action.payload);
      client.put(`${action.payload}`, {
        id: action.payload,
        title: findData.title,
        completed: !findData.completed,
      });
      findData.completed = !findData.completed;
    },
  },
});

export const { setTask, deleteTask, addTask, handleTaskStatus } = TaskSlice.actions;
export default TaskSlice.reducer;
