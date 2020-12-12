import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  actions: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 14,
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

export default function CatalogCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <CardHeader className={classes.header} title={catalog.title} />
      <CardContent className={classes.content}>
        <Typography nowrap variant="body2" component="p" color="textSecondary">
          {catalog.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small" color="primary">
          Show Products
        </Button>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Paper>
  );
}
