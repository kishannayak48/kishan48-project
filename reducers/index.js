const { combineReducers } = require("@reduxjs/toolkit");
import numberSlice from "./numberSlice";
import sumSlice from "./sumSlice";

const rootReducer = combineReducers({
  sumCountRedu: sumSlice,
  NumberRedu: numberSlice,
});
export default rootReducer;
