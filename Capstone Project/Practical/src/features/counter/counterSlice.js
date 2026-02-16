import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    addByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
});

export const { increment, addByAmount } = counterSlice.actions;
export default counterSlice.reducer;
