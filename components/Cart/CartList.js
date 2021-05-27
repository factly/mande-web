import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import SkeletonCard from "../Skeleton";
import CartItem from "./CartItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CartList({ loading, ids = [] }) {
  const classes = useStyles();

  return loading ? (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <CircularProgress />
    </div>
  ) : (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
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
