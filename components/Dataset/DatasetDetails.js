import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardHeader,
  CardContent,
  Typography,
  Paper,
  Tab,
  Tabs,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";

import snakeToTitleCase from "../../utils/snakeToTitleCase";

const useStyles = makeStyles(() => ({
  root: {
    height: " 100%",
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
    width: "100%",
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
  table: {
    minWidth: 650,
    marginBottom: 10,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function DatasetDetails({ id }) {
  const router = useRouter();
  const classes = useStyles();

  const [sample, setSample] = useState({});

  const dataset = useSelector(({ datasets }) => datasets.items[id]);

  React.useEffect(() => {
    if (dataset)
      fetch(dataset["profiling_url"])
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setSample(data);
        })
        .catch((error) => {
          // handle your errors here
          console.error(error);
        });
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const rows = [
    "organisation",
    "source",
    "sectors",
    "source_link",
    "archive_link",
    "created_at",
    "updated_at",
    "frequency",
    "temporal_coverage",
    "granularity",
    "contact_email",
  ];

  const tableRows = [
    {
      key: "n_var",
      value: "Number of Columns",
    },
    {
      key: "n",
      value: "Number of Rows",
    },
    {
      key: "n_cells_missing",
      value: "Number of Missing Values",
    },
    {
      key: "p_cells_missing",
      value: "Proportion of Missing Values",
    },
    {
      key: "n_var",
      value: "Number of Columns",
    },
    {
      key: "n",
      value: "Number of Rows",
    },
  ];

  const columnsHeader = [
    {
      key: "n_distinct",
      value: "Number of Distinct Values",
    },
    {
      key: "p_distinct",
      value: "Proportion of Distinct Values",
    },
    {
      key: "is_unique",
      value: "Unique",
    },
    {
      key: "n_unique",
      value: "Number of Unique Values",
    },
    {
      key: "p_unique",
      value: "Proportion of Unique Values",
    },
    {
      key: "type",
      value: "Type",
    },
    {
      key: "count",
      value: "Count",
    },
  ];

  const columnTypes = {
    Categorical: "Text",
    Numeric: "Number",
    Distinct: "Number of Distinct Values",
    "Real number": "Number",
  };

  let sampleHeadRows = [];
  if (sample.sample)
    sampleHeadRows = Object.keys(sample.sample[0].data[0]).map((key) => key);

  return !dataset || !sample.analysis ? null : (
    <>
      <Button onClick={() => router.back()} variant="contained" color="primary">
        Back
      </Button>
      <br />
      <br />
      <Paper className={classes.root}>
        <CardHeader className={classes.header} title={dataset.title} />
        <CardContent className={classes.content}>
          <Typography variant="subtitle2" gutterBottom color="textSecondary">
            <div
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{ __html: dataset.description }}
            />
          </Typography>
          <br />

          <Paper square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Meta Data" />
              <Tab label="Overview" />
              <Tab label="Sample" />
            </Tabs>
          </Paper>
          <TabPanel value={value} index={0} style={{ width: "100%" }}>
            <Table className={classes.table} aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Fields</TableCell>
                  <TableCell align="left">Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((key) => (
                  <TableRow key={key}>
                    <TableCell align="left">{snakeToTitleCase(key)}</TableCell>
                    <TableCell align="left">{dataset[key]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabPanel>
          <TabPanel value={value} index={1} style={{ width: "100%" }}>
            <Table className={classes.table} aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Item</TableCell>
                  <TableCell align="left">Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableRows.map((row) => (
                  <TableRow key={row.key}>
                    <TableCell align="left">{row.value}</TableCell>
                    <TableCell align="left">{sample.table[row.key]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <br />
            <Typography variant="h4" gutterBottom>
              Columns
            </Typography>
            <Table className={classes.table} aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Name</TableCell>
                  {columnsHeader.map((each) => (
                    <TableCell align="left">{each.value}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(sample.variables).map((variable) => (
                  <TableRow key={variable}>
                    <TableCell align="left">{variable}</TableCell>
                    {columnsHeader.map((each) =>
                      each.key === "type" ? (
                        <TableCell align="left">
                          {columnTypes[sample.variables[variable][each.key]] ||
                            sample.variables[variable][each.key]}
                        </TableCell>
                      ) : (
                        <TableCell align="left">
                          {sample.variables[variable][each.key]}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabPanel>
          <TabPanel value={value} index={2} style={{ width: "100%" }}>
            <Typography variant="h4" gutterBottom>
              First rows
            </Typography>
            <Table className={classes.table} aria-label="a dense table">
              <TableHead>
                <TableRow>
                  {sampleHeadRows.map((each) => (
                    <TableCell align="left">{each}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {sample.sample[0].data.map((row, index) => (
                  <TableRow key={index}>
                    {sampleHeadRows.map((each) => (
                      <TableCell align="left">{row[each]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Typography variant="h4" gutterBottom>
              Last rows
            </Typography>
            <Table className={classes.table} aria-label="a dense table">
              <TableHead>
                <TableRow>
                  {sampleHeadRows.map((each) => (
                    <TableCell align="left">{each}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {sample.sample[1].data.map((row, index) => (
                  <TableRow key={index}>
                    {sampleHeadRows.map((each) => (
                      <TableCell align="left">{row[each]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabPanel>
        </CardContent>
      </Paper>
    </>
  );
}
