import React from "react";
import { useSelector } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function OrderItem({ id }) {
  const { order, payment, currency } = useSelector(
    ({ orders, payments, currencies }) => {
      const order = orders.items[id];
      let payment, currency;
      if (order.payment_id) {
        payment = payments.items[order.payment_id];
        currency = currencies.items[payment.currency_id];
      }
      return {
        order,
        payment,
        currency,
      };
    }
  );

  return (
    <ListItem key={order.id}>
      <ListItemText
        primary={order.id}
        secondary={
          order.payment_id
            ? `${currency.iso_code} ${payment.amount}`
            : order.status
        }
      />
    </ListItem>
  );
}
