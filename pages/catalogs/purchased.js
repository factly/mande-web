import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { CatalogGrid } from "../../components/Catalog";
import { loadPurchasedCatalogs } from "../../actions/catalogs";

export default function CatalogsList() {
  const dispatch = useDispatch();
  const { ids, loading } = useSelector(({ catalogs }) => ({
    ids: catalogs.purchasedIds,
    loading: catalogs.loading,
  }));

  React.useEffect(() => {
    dispatch(loadPurchasedCatalogs());
  }, []);

  return loading ? (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <CircularProgress />
    </div>
  ) : (
    <>
      <Typography variant="h6">Catalogs</Typography>
      <CatalogGrid
        loading={loading}
        ids={loading ? [null, null, null] : ids}
        purchased={true}
      />
    </>
  );
}
