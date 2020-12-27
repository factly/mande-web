import React from "react";
import { useSelector } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function OrderDetails({ id }) {
  const { order, product, payment, currency } = useSelector(
    ({ orders, products, payments }) => {
      const order = orders.items[id];
      const orderProducts = order.products.map(
        (productId) => products.items[productId]
      );
      const payment = payments.items[order.payment_id];
      const currency = currencies.items[product?.currency_id];
      return {
        order,
        products: orderProducts,
        payment,
        currency,
      };
    }
  );

  return (
    <ListItem key={order.id}>
      <ListItemText
        primary={product.title}
        secondary={`${currency.iso_code} ${product.price}`}
      />
    </ListItem>
  );
}
