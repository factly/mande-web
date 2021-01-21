import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { DatasetSample } from "../../components/Dataset";

export default function Dataset() {
  const router = useRouter();
  let { datasetId } = router.query;
  datasetId = Number(datasetId);

  const { dataset, loading } = useSelector(({ datasets }) => {
    return {
      dataset: datasets.items[datasetId],
      loading: datasets.loading,
    };
  });
  console.log({ dataset });

  React.useEffect(() => {
    //get dataset by id
  }, []);

  return loading ? (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <CircularProgress />
    </div>
  ) : (
    <>
      <Typography variant="h6">Dataset: {dataset.title}</Typography>
      <DatasetSample id={datasetId} />
    </>
  );
}
