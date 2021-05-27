import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";

import SkeletonCard from "../Skeleton";
import OrderItem from "./OrderItem";
import { loadOrders } from "../../actions/orders";
import OrderDetails from "./OrderDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  grid: {
    flex: 1,
  },
  details: {
    flex: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function OrdersList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [orderId, setOrderId] = React.useState(null);

  React.useEffect(() => {
    dispatch(loadOrders());
  }, []);

  const { loading, ids = [] } = useSelector(({ orders }) => ({
    loading: orders.loading,
    ids: orders.ids,
  }));

  return loading ? (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <CircularProgress />
    </div>
  ) : (
    <div className={classes.root}>
      <div className={classes.grid}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.title}>
            Orders
          </Typography>
          <div className={classes.demo}>
            <List>
              {ids.map((id) =>
                loading ? (
                  <SkeletonCard />
                ) : (
                  <OrderItem
                    id={id}
                    key={id}
                    onSelect={() => setOrderId(id)}
                    selectedOrderId={orderId}
                  />
                )
              )}
            </List>
          </div>
        </Grid>
      </div>
      {orderId && (
        <Paper variant="outlined" className={classes.details}>
          <OrderDetails id={orderId} />
        </Paper>
      )}
    </div>
  );
}
