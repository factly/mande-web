import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import { getCatalog } from "../../actions/catalogs";
import { Chip } from "@material-ui/core";

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
    height: 50,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 14,
  },
  tags: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function CatalogDetails({ id }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  React.useEffect(() => {
    dispatch(getCatalog(id));
  }, []);

  const catalog = useSelector(({ catalogs }) => ({
    ...catalogs.items[id],
    tags: [
      { id: 1, title: "Tag 1" },
      { id: 2, title: "Tag 2" },
      { id: 3, title: "Tag 3" },
      { id: 4, title: "Tag 4" },
      { id: 5, title: "Tag 5" },
    ],
  }));

  return !catalog ? null : (
    <Paper className={classes.root}>
      <CardHeader className={classes.header} title={catalog.title} />
      <CardContent className={classes.content}>
        <Typography variant="body2" component="p" color="textSecondary">
          {catalog.description}
        </Typography>
        <div className={classes.tags}>
          {catalog.tags.map((tag) => (
            <Chip
              key={tag.id}
              label={tag.title}
              variant="outlined"
              size="small"
            />
          ))}
        </div>
      </CardContent>
      <CardActions className={classes.actions}>
        {/* <Button size="small" color="primary">
          Add to Cart
        </Button> */}
      </CardActions>
    </Paper>
  );
}
