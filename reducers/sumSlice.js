import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const sumSlice = createSlice({
  name: "sumCounter",
  initialState: { sumData: 0 },
  reducers: {
    increment: (state) => {
      console.log("======state======", state.sumData);
      state.sumData += 1;
    },
    decrement: (state) => {
      state.sumData -= 1;
    },

    incrementByAmount: (state, action) => {
      state.sumData += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = sumSlice.actions;
export default sumSlice.reducer;
