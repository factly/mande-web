import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    minWidth: "80%",
    flex: 1,
    padding: 12,
    paddingTop: 6,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    alignSelf: "center",
    marginBottom: 40,
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
    overflow: "auto",
    textOverflow: "ellipsis",
  },
  actions: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 14,
  },
}));

export default function CatalogDetails({ id }) {
  const classes = useStyles();

  const catalog = useSelector(({ catalogs }) => catalogs.items[id]);

  return !catalog ? null : (
    <Paper className={classes.root}>
      <CardHeader className={classes.header} title={catalog.title} />
      <CardContent className={classes.content}>
        <Typography variant="body2" component="p" color="textSecondary">
          {catalog.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Paper>
  );
}
