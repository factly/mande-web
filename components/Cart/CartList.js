import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import SkeletonCard from "../Skeleton";
import CartItem from "./CartItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function CartList({ loading, ids = [] }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          Cart
        </Typography>
        <div className={classes.demo}>
          <List>
            {ids.map((id) =>
              loading ? <SkeletonCard /> : <CartItem id={id} key={id} />
            )}
          </List>
        </div>
      </Grid>
    </div>
  );
}
