import { ADD_CURRENCY, ADD_CURRENCIES } from "../constants/currencies";
import { buildObjectOfItems } from "../utils/objects";

export const addCurrency = (currency) => {
  return {
    type: ADD_CURRENCY,
    payload: { currency },
  };
};

export const addCurrencies = (currencies) => {
  return {
    type: ADD_CURRENCIES,
    payload: {
      currencies: buildObjectOfItems(currencies),
    },
  };
};
