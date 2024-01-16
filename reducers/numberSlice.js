import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "sumCounter",
  initialState: { numData: 1000 },
  reducers: {
    increment: (state) => {
      console.log("======state======", state);
    },
    
  },
}); 

export const { increment1, decrement1 } = numberSlice.actions;
export default numberSlice.reducer;
