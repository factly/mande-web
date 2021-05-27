import React from "react";
import * as csv from "csvtojson";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Papa from "papaparse";
import { readRemoteFile } from "react-papaparse";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
  },
}));

export default function DatasetCard({ id }) {
  const classes = useStyles();
  const [data, setData] = React.useState([]);

  const dataset = useSelector(({ datasets }) => datasets.items[id]);

  React.useEffect(() => {
    const fetchdata = async () => {
      readRemoteFile(dataset.sample_url, {
        complete: (results) => {
          console.log("Results:", results);
          setData(results.data);
        },
      });
      // const response = await fetch(dataset.sampleUrl);
      // let reader = response.body.getReader();
      // let decoder = new TextDecoder("utf-8");

      // const result = await reader.read();
      // console.log({ result });
      // const value = decoder.decode(result.value);
      // const results = Papa.parse(value, { header: true }); // object with { data, errors, meta }
      // const rows = results.data; // array of objects
      // console.log({ rows });
      // setData(value);
    };
    fetchdata();
    // csv({
    //   noheader: true,
    //   output: "csv",
    // })
    //   .fromStream()
    //   .subscribe(
    //     (json) => {
    //       return new Promise((resolve, reject) => {
    //         // long operation for each json e.g. transform / write into database.
    //         resolve(json);
    //       });
    //     },
    //     console.log,
    //     (data) => {
    //       console.log(data);
    //       setData(data);
    //     }
    //   );
  }, []);

  const [headerRow, ...bodyRows] = data;
  console.log({ headerRow, bodyRows });
  return !dataset ? null : (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headerRow?.map((cell) => (
              <TableCell component="th" scope="row">
                {cell}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bodyRows?.map((row, index) => (
            <TableRow key={index}>
              {Object.values(row).map((cell) => (
                <TableCell component="th" scope="row">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
