import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { CatalogGrid } from "../../components/Catalog";

export default function CatalogsList() {
  const { ids, loading } = useSelector(({ catalogs }) => ({
    ids: catalogs.ids,
    loading: catalogs.loading,
  }));

  React.useEffect(() => {
    //get catalogs list
  }, []);

  return (
    <CatalogGrid loading={loading} ids={loading ? [null, null, null] : ids} />
  );
}
