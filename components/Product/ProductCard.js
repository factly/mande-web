import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

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
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "flex-end",
    // marginTop: "auto",
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

const product = {
  id: 1,
  created_at: "2020-12-01T12:05:32.247044Z",
  updated_at: "2020-12-01T12:29:27.057926Z",
  deleted_at: null,
  title: "Checking",
  slug: "cking",
  price: 1999,
  status: "Show",
  featured_medium_id: null,
  featured_medium: null,
  currency_id: 1,
  currency: {
    id: 1,
    created_at: "2020-11-30T17:23:32.631661Z",
    updated_at: "2020-11-30T17:23:32.631661Z",
    deleted_at: null,
    iso_code: "INR",
    name: "Indian Rupee",
  },
  catalogs: null,
  tags: [
    {
      id: 1,
      created_at: "2020-11-30T17:23:14.387705Z",
      updated_at: "2020-11-30T17:23:20.400146Z",
      deleted_at: null,
      title: "checking",
      slug: "pc",
      products: null,
      datasets: null,
    },
    {
      id: 2,
      created_at: "2020-11-30T17:23:14.387705Z",
      updated_at: "2020-11-30T17:23:20.400146Z",
      deleted_at: null,
      title: "another",
      slug: "pc",
      products: null,
      datasets: null,
    },
  ],
  datasets: [],
  orders: null,
};

export default function ProductCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <CardHeader
        className={classes.header}
        title={product.title}
        subheader={
          <Typography variant="button">
            {product.currency.iso_code} {product.price}
          </Typography>
        }
      />
      <CardContent className={classes.content}>
        <div className={classes.tags}>
          {product.tags.map((tag) => (
            <Chip label={tag.title} variant="outlined" size="small" />
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
          Show Datasets
        </Button>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Paper>
  );
}
