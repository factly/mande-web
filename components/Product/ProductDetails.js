import React from "react";
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
import { getProduct } from "../../actions/products";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    minWidth: "80%",
    flex: 1,
    padding: 12,
    paddingTop: 6,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    alignSelf: "center",
    marginBottom: 40,
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
    height: 50,
    display: "flex",
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

export default function ProductDetails({ id }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { product, currency, cartId, purchased } = useSelector(
    ({ products, currencies, cartItems }) => {
      const product = products.items[id];
      return {
        loading: products.loading,
        product,
        currency: product && currencies.items[product.currency_id],
        cartId: product && cartItems.productCartMap[id],
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
        <Typography variant="body2" component="p" color="textSecondary">
          {product.description}
        </Typography>
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
        {/* {!purchased && (
          <Button
            size="small"
            color="primary"
            onClick={productInCart ? removeCartItem : addCartItem}
          >
            {productInCart ? "Remove from Cart" : "Add to Cart"}
          </Button>
        )} */}
      </CardActions>
    </Paper>
  );
}
