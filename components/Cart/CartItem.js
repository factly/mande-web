import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import { deleteCartItem } from "../../actions/cartItems";

export default function CartItem({ id }) {
  const dispatch = useDispatch();
  const { cartItem, product, currency } = useSelector(
    ({ cartItems, products, currencies }) => {
      const cartItem = cartItems.items[id];
      const product = products.items[cartItem?.product_id];
      const currency = currencies.items[product?.currency_id];
      return {
        cartItem,
        product,
        currency,
      };
    }
  );

  return (
    <ListItem key={cartItem.id}>
      <ListItemText
        primary={product.title}
        secondary={`${currency.iso_code} ${product.price}`}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => dispatch(deleteCartItem(cartItem.id))}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
