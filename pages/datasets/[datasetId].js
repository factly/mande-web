import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import { DatasetDetails } from "../../components/Dataset";
import { getDataset } from "../../actions/datasets";

export default function Dataset() {
  const router = useRouter();
  const dispatch = useDispatch();
  let { datasetId } = router.query;

  if (datasetId) datasetId = parseInt(datasetId, 10);
  else datasetId = 0;

  const { dataset, loading } = useSelector(({ datasets }) => {
    return {
      dataset: datasets.items[datasetId],
      loading: datasets.loading,
    };
  });

  React.useEffect(() => {
    if (!dataset) {
      dispatch(getDataset(datasetId));
    }
  }, [datasetId]);

  return loading ? (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <CircularProgress />
    </div>
  ) : (
    <>
      <DatasetDetails id={datasetId} />
    </>
  );
}
