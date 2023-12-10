import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
      console.log(state.value);
    },
    removeToken: (state) => {
      state.value = null;
    },
  },
});
export const { setToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
