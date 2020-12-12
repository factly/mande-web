import { combineReducers } from "redux";

import catalogs from "./catalogs";
import datasets from "./datasets";
import products from "./products";

export default combineReducers({
  catalogs,
  datasets,
  products,
});
