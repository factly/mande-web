import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  item: {
    widht: "80%",
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
    <Paper className={classes.paper} elevation={3}>
      <ListItem key={membership.id}>
        <ListItemText
          primary={`${plan.name}`}
          secondary={`Razorpay ID: ${membership.razorpay_order_id}`}
        />
      </ListItem>
    </Paper>
  );
}
