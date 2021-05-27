import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  paper: {
    width: "100%",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  item: {
    width: "80%",
    marginBottom: 10,
    padding: 0,
  },
  action: {
    right: "25px",
  },
});

export default function OrderItem({ id, onSelect, selectedOrderId }) {
  const classes = useStyles();

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
    <ListItem button key={order.id} className={classes.item} onClick={onSelect}>
      <Paper
        className={classes.paper}
        variant={selectedOrderId === id ? "outlined" : "elevation"}
        style={
          selectedOrderId === id
            ? { borderColor: "#155fa0", borderWidth: 2 }
            : {}
        }
        elevation={3}
      >
        <ListItemText
          primary={order.id}
          secondary={
            <>
              Status:{" "}
              {order.payment_id
                ? `${currency.iso_code} ${payment.amount}`
                : order.status}
            </>
          }
        />
        <ListItemSecondaryAction className={classes.action} onClick={onSelect}>
          <IconButton edge="end" aria-label="view">
            <ChevronRightRoundedIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </Paper>
    </ListItem>
  );
}
