import produce from "immer";
import {
  ADD_CARTITEMS,
  SET_CARTITEM_LOADING,
  SET_CARTITEM_REQUEST,
  SET_CARTITEM_IDS,
  RESET_CARTITEM,
} from "../constants/cartItems";

const initialState = {
  loading: false,
  ids: [],
  productCartMap: {},
  req: [],
  items: {},
  total: 0,
};

const cartItemsReducer = produce((draft, action = {}) => {
  switch (action.type) {
    case SET_CARTITEM_LOADING:
      draft.loading = action.payload.loading;
      return;
    case ADD_CARTITEMS: {
      const { cartItems, productCartMap } = action.payload;
      Object.assign(draft.items, cartItems);
      draft.productCartMap = productCartMap;
      return;
    }
    case SET_CARTITEM_IDS:
      draft.ids = action.payload.ids;
      return;
    case SET_CARTITEM_REQUEST: {
      const { req, total } = action.payload;
      draft.req.push(req);
      draft.total = total;
      return;
    }
    case RESET_CARTITEM:
      return initialState;
  }
}, initialState);

export default cartItemsReducer;
