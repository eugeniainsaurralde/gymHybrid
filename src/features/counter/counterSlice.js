import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    changeByAmount: (state, actions) => {
      state.value = actions.payload;
    },
  },
});
export const { increment, decrement, changeByAmount } = counterSlice.actions;
export default counterSlice.reducer;
