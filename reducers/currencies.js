import produce from "immer";
import { ADD_CURRENCY, ADD_CURRENCIES } from "../constants/currencies";

const initialState = {
  loading: true,
  ids: [],
  req: [],
  items: {},
  total: 0,
};

const currenciesReducer = produce((draft, action = {}) => {
  switch (action.type) {
    case ADD_CURRENCY: {
      const { currency } = action.payload;
      draft.items[currency.id] = currency;
      return;
    }
    case ADD_CURRENCIES: {
      const { currencies } = action.payload;
      Object.assign(draft.items, currencies);
      return;
    }
  }
}, initialState);

export default currenciesReducer;
