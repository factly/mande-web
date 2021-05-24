import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
  Paper,
  Chip,
} from "@material-ui/core";

import { createCartItem, deleteCartItem } from "../../actions/cartItems";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 350,
    minWidth: 300,
    maxWidth: 500,
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
    width: "100%",
    justifyContent: "flex-start",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  extraTags: {
    position: "relative",
  },
  hiddenTags: {
    position: "absolute",
    padding: 5,
    display: "flex",
    width: "auto",
    flexWrap: "wrap",
    flexDirection: "row",
    zIndex: 5,
    "& > *": {
      margin: theme.spacing(0.5),
    },
    right: 0,
  },
  media: {
    height: 200,
    width: "200",
  },
}));

const MAX_TAGS = 3;

export default function ProductCard({ id }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [showExtraTags, setShowExtraTags] = React.useState(false);

  const { product, currency, cartId, purchased } = useSelector(
    ({ products, currencies, cartItems }) => {
      const product = products.items[id];
      console.log({ satProd: products });
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
      <CardMedia
        className={classes.media}
        image={product.featured_medium?.url?.proxy}
        title="Paella dish"
      />
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2">
          {product.title}
        </Typography>
        <Typography variant="button">
          {currency.iso_code} {product.price}
        </Typography>
        <div className={classes.tags}>
          {product.tags.slice(0, MAX_TAGS).map((tag) => (
            <Chip
              key={tag.id}
              label={tag.title}
              variant="outlined"
              size="small"
            />
          ))}
          {product.tags.length > MAX_TAGS && (
            <div className={classes.extraTags}>
              <div
                onMouseEnter={() => setShowExtraTags(true)}
                onMouseLeave={() => setShowExtraTags(false)}
              >
                <Chip
                  label={"+" + product.tags.slice(MAX_TAGS).length}
                  variant="outlined"
                  size="small"
                />
              </div>
              {showExtraTags && (
                <Paper className={classes.hiddenTags}>
                  {product.tags.slice(MAX_TAGS).map((tag) => (
                    <Chip
                      key={tag.id}
                      label={tag.title}
                      variant="outlined"
                      size="small"
                    />
                  ))}
                </Paper>
              )}
            </div>
          )}
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
