import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";

import AddIcon from "@material-ui/icons/Add";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    width: "100%",
    padding: 10,
  },
  item: {
    width: "80%",
    marginBottom: 10,
  },
  icon: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    cursor: "pointer",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
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
        <div className={classes.listItem}>
          <Typography> {plan.name}</Typography>
          <Link href={`/memberships/${membership.id}/users`}>
            <div className={classes.icon}>
              <AddIcon /> Add users
            </div>
          </Link>
        </div>
        <p>{plan.description}</p>
      </Paper>
    </ListItem>
  );
}
