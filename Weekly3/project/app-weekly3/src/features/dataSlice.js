import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    users: [],
    cats: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setDataPublic: (state, action) => {
      state.cats = action.payload;
    },
  },
});

export const { setUsers, setDataPublic } = dataSlice.actions;
export default dataSlice.reducer;
