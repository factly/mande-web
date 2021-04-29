import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { CatalogGrid } from "../../components/Catalog";
import { loadCatalogs } from "../../actions/catalogs";
import Pagination from "@material-ui/lab/Pagination";

export default function CatalogsList() {
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
  });
  const { ids, loading, total } = useSelector(({ catalogs }) => ({
    ids: catalogs.ids,
    loading: catalogs.loading,
    total: catalogs.total,
  }));

  React.useEffect(() => {
    dispatch(loadCatalogs(pagination));
  }, [pagination, dispatch]);

  return loading ? (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <CircularProgress />
    </div>
  ) : (
    <>
      <Typography variant="h6">Catalogs</Typography>
      <CatalogGrid loading={loading} ids={loading ? [null, null, null] : ids} />
      {total > 0 ? (
        <Pagination
          style={{ margin: 10 }}
          count={Math.ceil(total / pagination.limit)}
          variant="outlined"
          shape="rounded"
          page={pagination.page}
          onChange={(event, page) => setPagination({ ...pagination, page })}
        />
      ) : null}
    </>
  );
}
