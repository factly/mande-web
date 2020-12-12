import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ProductCard from "./ProductCard";
import SkeletonCard from "../Skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ProductGrid({ loading, ids = [] }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container wrap="wrap" alignItems="center" spacing={4}>
        {ids.map((id) => (
          <Grid key={id} item xs={12} md={6} lg={4}>
            {loading ? <SkeletonCard /> : <ProductCard id={id} />}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
