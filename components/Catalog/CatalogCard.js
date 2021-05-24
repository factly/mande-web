import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
  Paper,
  Chip,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 350,
    minWidth: 300,
    maxWidth: 500,
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
  ellipsis: {
    display: "-webkit-box",
    "-webkit-line-clamp": 6,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
  tags: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  extraTags: {
    position: "relative",
  },
  hiddenTags: {
    position: "absolute",
    padding: 5,
    display: "flex",
    width: "auto",
    flexWrap: "wrap",
    flexDirection: "row",
    zIndex: 5,
    "& > *": {
      margin: theme.spacing(0.5),
    },
    right: 0,
  },
  media: {
    height: 200,
    width: "100%",
  },
}));

const MAX_TAGS = 3;

export default function CatalogCard({ id }) {
  const classes = useStyles();
  const [showExtraTags, setShowExtraTags] = React.useState(false);

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
      <CardMedia
        className={classes.media}
        image="https://www.mckinsey.com/~/media/McKinsey/Industries/Chemicals/Our%20Insights/Successful%20agricultural%20transformations%20Six%20core%20elements%20of%20planning%20and%20delivery/Successful%20agricultural_1536x1536_400.jpg"
        title="Paella dish"
      />
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2">
          {catalog.title}
        </Typography>
        <div className={classes.tags}>
          {catalog.tags.slice(0, MAX_TAGS).map((tag) => (
            <Chip
              key={tag.id}
              label={tag.title}
              variant="outlined"
              size="small"
            />
          ))}
          {catalog.tags.length > MAX_TAGS && (
            <div className={classes.extraTags}>
              <div
                onMouseEnter={() => setShowExtraTags(true)}
                onMouseLeave={() => setShowExtraTags(false)}
              >
                <Chip
                  label={"+" + catalog.tags.slice(MAX_TAGS).length}
                  variant="outlined"
                  size="small"
                />
              </div>
              {showExtraTags && (
                <Paper className={classes.hiddenTags}>
                  {catalog.tags.slice(MAX_TAGS).map((tag) => (
                    <Chip
                      key={tag.id}
                      label={tag.title}
                      variant="outlined"
                      size="small"
                    />
                  ))}
                </Paper>
              )}
            </div>
          )}
        </div>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small" color="primary">
          <Link href={`/catalogs/${catalog.id}`}>Show Products</Link>
        </Button>
        {/* <Button size="small" color="primary">
          Add to Cart
        </Button> */}
      </CardActions>
    </Paper>
  );
}
