import { combineReducers } from "redux";

import datasetsReducer from "./datasets";

export default combineReducers({
  datasets: datasetsReducer,
});
