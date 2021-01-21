import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ProductCard from "./ProductCard";
import SkeletonCard from "../Skeleton";
import LoginCard from "../Login";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function ProductGrid({ loading, ids = [] }) {
  const classes = useStyles();
  const user = useSelector(({ user }) => user);

  if (!user.id) {
    ids = [null, ...ids];
  }

  return (
    <div className={classes.root}>
      <Grid container wrap="wrap" alignItems="center" spacing={4}>
        {ids.map((id) => (
          <Grid key={id} item xs={12} md={6} lg={4}>
            {!id ? (
              <LoginCard />
            ) : loading ? (
              <SkeletonCard />
            ) : (
              <ProductCard id={id} />
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
