import { combineReducers } from "redux";

import cartItems from "./cartItems";
import catalogs from "./catalogs";
import currencies from "./currencies";
import datasets from "./datasets";
import memberships from "./memberships";
import orders from "./orders";
import payments from "./payments";
import plans from "./plans";
import products from "./products";
import user from "./user";

export default combineReducers({
  cartItems,
  catalogs,
  currencies,
  datasets,
  memberships,
  orders,
  payments,
  plans,
  products,
  user,
});
