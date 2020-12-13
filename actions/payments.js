import { ADD_PAYMENTS } from "../constants/payments";
import { addCurrencies } from "./currencies";
import { getValues, deleteKeys, buildObjectOfItems } from "../utils/objects";

export const addPayments = (payments) => (dispatch) => {
  const currencies = getValues(payments, "currency");
  dispatch(addCurrencies(currencies));

  dispatch({
    type: ADD_PAYMENTS,
    payload: {
      payments: buildObjectOfItems(deleteKeys(payments, ["currency"])),
    },
  });
};
