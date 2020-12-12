import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
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
    height: 50,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 14,
  },
}));

export default function SkeletonCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Skeleton className={classes.header} width="70%" />
      <Skeleton className={classes.header} width="100%" />
      <Skeleton className={classes.content} />
      <Skeleton className={classes.actions} width="30%" />
    </Paper>
  );
}
