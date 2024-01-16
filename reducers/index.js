const { combineReducers } = require("@reduxjs/toolkit");
import numberSlice from "./numberSlice";
import sumSlice from "./sumSlice";

const rootReducer = combineReducers({
  sumCountRedu: sumSlice,
  numberRedu: numberSlice,
});
export default rootReducer;
