import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  counterValue: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increment(state) {
      state.counterValue += 1;
    },
    decrement(state) {
      state.counterValue -= 1;
    },
    reset(state) {
      state.counterValue = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
