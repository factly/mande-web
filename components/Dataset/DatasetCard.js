import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { saveAs } from "file-saver";

import { getDatasetFormats } from "../../actions/datasets";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
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
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 14,
  },
  // ellipsis: {
  //   display: "-webkit-box",
  //   "-webkit-line-clamp": 6,
  //   "-webkit-box-orient": "vertical",
  //   overflow: "hidden",
  // },
  select: {
    width: 0,
  },
}));

export default function DatasetCard({ id }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [formats, setFormats] = React.useState([]);

  const showFormatDialog = () => {
    setOpen(true);
  };
  const hideFormatDialog = () => {
    setOpen(false);
  };

  const { user, dataset } = useSelector(({ user, datasets }) => ({
    user,
    dataset: datasets.items[id],
  }));

  const handleDownload = async () => {
    if (!user.id) {
      window.location = `${process.env.NEXT_PUBLIC_KAVACH_LOGIN_URL}?return_to=${window.location}`;
      return;
    }
    const formats = await dispatch(getDatasetFormats(dataset.id));
    setFormats(formats);
    showFormatDialog();
  };

  const onDownloadFormat = (event) => {
    const formatId = event.target.value;
    if (!formatId) return;

    const url = formats.find((item) => item.id === formatId)?.url;
    saveAs(url, url.split("/").pop());
  };

  return !dataset ? null : (
    <>
      <Paper className={classes.root}>
        <CardHeader className={classes.header} title={dataset.title} />
        <CardContent className={classes.content}>
          {/* <Typography variant="body2" component="p" color="textSecondary">
            <div
              dangerouslySetInnerHTML={{ __html: dataset.description }}
              style={{ whiteSpace: "pre-wrap" }}
            />
          </Typography> */}
          {/* <Typography variant="body2" component="p" color="textSecondary">
          {dataset.contact_name} {dataset.contact_email}
        </Typography> */}
          <Typography variant="body2" component="p" color="textSecondary">
            Sectors: {dataset.sectors}
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            Organisation: {dataset.organisation}
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            Source: {dataset.source}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          {user.id && (
            <>
              <Button size="small" color="primary" onClick={handleDownload}>
                Download
              </Button>
              {open && (
                <Select
                  className={classes.select}
                  open={open}
                  onClose={hideFormatDialog}
                  onChange={onDownloadFormat}
                >
                  {formats && formats.length ? (
                    formats.map((format) => (
                      <MenuItem value={format.id}>
                        {format.format.name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="" disabled>
                      Dataset has no formats
                    </MenuItem>
                  )}
                </Select>
              )}
            </>
          )}
          <Button size="small" color="primary">
            {user.id ? (
              <Link href={`/datasets/${dataset.id}`}>More Info</Link>
            ) : (
              <a
                href={`${process.env.NEXT_PUBLIC_KAVACH_LOGIN_URL}?return_to=${window.location}`}
              >
                More Info
              </a>
            )}
          </Button>
        </CardActions>
      </Paper>
      {/* <FormatDialog
        open={open}
        formats={formats}
        onSelect={onDownloadFormat}
        handleClose={hideFormatDialog}
      /> */}
    </>
  );
}
