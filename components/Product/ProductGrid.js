import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ProductCard from "./ProductCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

const products = [
  product,
  product,
  product,
  product,
  product,
  product,
  product,
  product,
];

export default function ProductGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container wrap="wrap" alignItems="center" spacing={4}>
        {products.map((value) => (
          <Grid key={value} item xs={12} md={6} lg={4}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
