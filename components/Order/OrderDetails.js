import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function OrderDetails({ id }) {
  const classes = useStyles();
  const { order, products, payment } = useSelector(
    ({ orders, products, payments, currencies }) => {
      const order = orders.items[id];
      const orderProducts = order.products.map((productId) => ({
        ...products.items[productId],
      }));
      orderProducts.forEach((product) => {
        product.currency = currencies.items[product?.currency_id];
        console.log(product);
      });
      const payment = payments.items[order.payment_id];
      return {
        order,
        products: orderProducts,
        payment,
      };
    }
  );

  return (
    <div>
      <Typography variant="h6" className={classes.title}>
        Products
      </Typography>
      {products.map((product) => (
        <ListItem key={order.id}>
          <ListItemText
            primary={product.title}
            secondary={`${product.currency?.iso_code} ${product.price}`}
          />
        </ListItem>
      ))}
    </div>
  );
}
