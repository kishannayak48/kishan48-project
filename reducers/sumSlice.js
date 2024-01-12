import { createSlice } from "@reduxjs/toolkit";

const sumSlice = createSlice({
  name: "sumCounter",
  initialState: { sumData: 0 },
  reducers: {
    increment: (state) => {
      console.log("======state======", state.sumData);
      state.sumData += 1;
    },
  },
});

export const { increment } = sumSlice.actions;
export default sumSlice.reducer;
