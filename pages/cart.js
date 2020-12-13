import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CartItemsList from "../components/Cart";
import { loadCartItems } from "../actions/cartItems";

export default function Cart() {
  const dispatch = useDispatch();
  const { ids, loading } = useSelector(({ cartItems }) => ({
    ids: cartItems.ids,
    loading: cartItems.loading,
  }));

  React.useEffect(() => {
    dispatch(loadCartItems());
  }, []);

  return (
    <div>
      <CartItemsList
        loading={loading}
        ids={loading ? [null, null, null] : ids}
      />
    </div>
  );
}
