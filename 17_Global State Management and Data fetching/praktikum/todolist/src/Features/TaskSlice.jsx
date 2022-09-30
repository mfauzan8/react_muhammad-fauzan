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
    // handleTaskStatus: (state, action) =>{
    //     const updateData = [...state.task];
    //     updateData[index].completed = !updateData[index].completed;
    //     setData(updateData);
    // }
  },
});

export const { deleteTask, addTask } = TaskSlice.actions;
export default TaskSlice.reducer;
