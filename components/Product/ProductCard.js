import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

import { createCartItem, deleteCartItem } from "../../actions/cartItems";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    minWidth: 300,
    maxWidth: 400,
    flex: 1,
    padding: 12,
    paddingTop: 6,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  content: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  actions: {
    display: "flex",
    height: 50,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  tags: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function ProductCard({ id }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { product, currency, cartId, purchased } = useSelector(
    ({ products, currencies, cartItems }) => {
      const product = products.items[id];
      return {
        product,
        currency: currencies.items[product.currency_id],
        cartId: cartItems.productCartMap[id],
        purchased: products.purchasedIds.includes(id),
      };
    }
  );

  const productInCart = !!cartId;

  const addCartItem = () => {
    dispatch(createCartItem({ product_id: product.id, status: "cart" }));
  };

  const removeCartItem = () => {
    dispatch(deleteCartItem(cartId));
  };

  return !product ? null : (
    <Paper className={classes.root}>
      <CardHeader
        className={classes.header}
        title={product.title}
        subheader={
          <Typography variant="button">
            {currency.iso_code} {product.price}
          </Typography>
        }
      />
      <CardContent className={classes.content}>
        <div className={classes.tags}>
          {product.tags.map((tag) => (
            <Chip
              key={tag.id}
              label={tag.title}
              variant="outlined"
              size="small"
            />
          ))}
        </div>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
        ></Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small" color="primary">
          <Link href={`/products/${product.id}`}>Show Datasets</Link>
        </Button>
        {!purchased && (
          <Button
            size="small"
            color="primary"
            onClick={productInCart ? removeCartItem : addCartItem}
          >
            {productInCart ? "Remove from Cart" : "Add to Cart"}
          </Button>
        )}
      </CardActions>
    </Paper>
  );
}
