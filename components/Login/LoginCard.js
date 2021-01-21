import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import { createCartItem, deleteCartItem } from "../../actions/cartItems";

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
  content: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  text: {
    marginBottom: 20,
  },
  login: {
    color: "white",
    width: "80%",
  },
  button: {
    width: "100%",
  },
}));

export default function LoginCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="h6" className={classes.text}>
          Sign In for best experience
        </Typography>
        <a
          href={`http://127.0.0.1:4455/.factly/kavach/web/auth/login?return_to=${window.location}`}
          className={classes.login}
        >
          <Button
            size="medium"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Login
          </Button>
        </a>
      </CardContent>
    </Paper>
  );
}
