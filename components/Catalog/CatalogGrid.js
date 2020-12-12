import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CatalogCard from "./CatalogCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const catalog = {
  id: 1,
  created_at: "2020-12-01T12:32:19.142438Z",
  updated_at: "2020-12-02T18:56:49.636232Z",
  deleted_at: null,
  title: "Crime in India",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  featured_medium_id: null,
  featured_medium: null,
  published_date: "2020-12-03T12:32:16Z",
  plans: null,
  products: [
    {
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
          title: "c",
          slug: "pc",
          products: null,
          datasets: null,
        },
      ],
      datasets: [],
      orders: null,
    },
  ],
};

const catalogs = [
  catalog,
  catalog,
  catalog,
  catalog,
  catalog,
  catalog,
  catalog,
  catalog,
];

export default function CatalogGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container wrap="wrap" alignItems="center" spacing={4}>
        {catalogs.map((value) => (
          <Grid key={value} item xs={12} md={6} lg={4}>
            <CatalogCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
