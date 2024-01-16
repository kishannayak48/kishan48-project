const { combineReducers } = require("@reduxjs/toolkit");
import numberSlice from "./numberSlice";
import sumSlice from "./sumSlice";
import usersSlice from "./usersSlice";

const rootReducer = combineReducers({
  sumCountRedu: sumSlice,
  numberRedu: numberSlice,
  users: usersSlice,
});
export default rootReducer;
