import { combineReducers } from "redux";

import cartItems from "./cartItems";
import catalogs from "./catalogs";
import currencies from "./currencies";
import datasets from "./datasets";
import memberships from "./memberships";
import payments from "./payments";
import plans from "./plans";
import products from "./products";

export default combineReducers({
  cartItems,
  catalogs,
  currencies,
  datasets,
  memberships,
  payments,
  plans,
  products,
});
