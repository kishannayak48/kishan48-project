import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "sumCounter",
  initialState: { numData: 0 },
  reducers: {
    increment: (state) => {
      console.log("======state======", state.numData);
    },
  },
});

export const { increment } = numberSlice.actions;
export default numberSlice.reducer;
