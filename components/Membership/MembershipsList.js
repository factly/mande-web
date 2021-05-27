import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import SkeletonCard from "../Skeleton";
import MembershipItem from "./MembershipItem";
import { loadMemberships } from "../../actions/memberships";

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

export default function MembershipsList() {
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadMemberships());
  }, []);

  const { loading, ids = [] } = useSelector(({ memberships }) => ({
    loading: memberships.loading,
    ids: memberships.ids,
  }));

  return loading ? (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <CircularProgress />
    </div>
  ) : (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.title}>
          Memberships
        </Typography>
        <div className={classes.demo}>
          <List>
            {ids.map((id) =>
              loading ? <SkeletonCard /> : <MembershipItem id={id} key={id} />
            )}
          </List>
        </div>
      </Grid>
    </div>
  );
}
