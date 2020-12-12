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
    width: "100%",
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

export default function DatasetCard({ id }) {
  const classes = useStyles();

  const dataset = useSelector(({ datasets }) => datasets.items[id]);

  return !dataset ? null : (
    <Paper className={classes.root}>
      <CardHeader className={classes.header} title={dataset.title} />
      <CardContent className={classes.content}>
        <Typography variant="body2" component="p" color="textSecondary">
          {dataset.description}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {dataset.contact_name} {dataset.contact_email}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {dataset.license}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {dataset.source}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small" color="primary">
          View Sample
        </Button>
      </CardActions>
    </Paper>
  );
}
