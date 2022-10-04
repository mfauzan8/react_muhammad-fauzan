import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { mockTask } from "../mocData";

const valueData = mockTask;
export const TaskSlice = createSlice({
  name: "tasklist",
  initialState: {
    task: valueData,
  },
  reducers: {
    deleteTask: (state, action) => {
      state.task = state.task.filter((item) => {
        return item.id !== action.payload;
      });
    },
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        ...action.payload,
      };
      state.task = [...state.task, newTask];
    },
    handleTaskStatus: (state, action) => {
      const id = action.payload;
      state.task[id].completed = !action.payload;
    },
  },
});

export const { deleteTask, addTask, handleTaskStatus } = TaskSlice.actions;
export default TaskSlice.reducer;
