import { combineReducers } from "redux";

import cartItems from "./cartItems";
import catalogs from "./catalogs";
import currencies from "./currencies";
import datasets from "./datasets";
import memberships from "./memberships";
import membershipUsers from "./membershipUsers";
import orders from "./orders";
import payments from "./payments";
import plans from "./plans";
import products from "./products";
import user from "./user";
import members from "./members";
import organisations from "./organisations";

export default combineReducers({
  cartItems,
  catalogs,
  currencies,
  datasets,
  members,
  memberships,
  membershipUsers,
  organisations,
  orders,
  payments,
  plans,
  products,
  user,
});
