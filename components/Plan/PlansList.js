import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import SkeletonCard from "../Skeleton";
import PlanItem from "./PlanItem";
import { loadPlans } from "../../actions/plans";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: 10,
  },
  demo: {
    padding: 10,
    paddingLeft: 20,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function PlansList() {
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadPlans());
  }, []);

  const { loading, ids = [] } = useSelector(({ plans }) => ({
    loading: plans.loading,
    ids: plans.ids,
  }));

  return loading ? (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <CircularProgress />
    </div>
  ) : (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.title}>
          Plans
        </Typography>
        <div className={classes.demo}>
          <List>
            {ids.map((id) =>
              loading ? <SkeletonCard /> : <PlanItem id={id} key={id} />
            )}
          </List>
        </div>
      </Grid>
    </div>
  );
}
