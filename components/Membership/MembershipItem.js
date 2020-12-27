import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  paper: {
    width: "100%",
    padding: 10,
  },
  item: {
    width: "80%",
    marginBottom: 10,
  },
});

export default function MembershipItem({ id }) {
  const classes = useStyles();

  const { membership, plan } = useSelector(({ memberships, plans }) => {
    const membership = memberships.items[id];
    const plan = plans.items[membership.plan_id];
    return {
      membership,
      plan,
    };
  });

  return (
    <ListItem key={membership.id} className={classes.item}>
      <Paper className={classes.paper} elevation={3}>
        <ListItemText
          primary={`${plan.name}`}
          secondary={`Razorpay ID: ${membership.razorpay_order_id}`}
        />
      </Paper>
    </ListItem>
  );
}
