import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CatalogGrid } from "../../components/Catalog";
import { loadCatalogs } from "../../actions/catalogs";

export default function CatalogsList() {
  const dispatch = useDispatch();
  const { ids, loading } = useSelector(({ catalogs }) => ({
    ids: catalogs.ids,
    loading: catalogs.loading,
  }));

  React.useEffect(() => {
    dispatch(loadCatalogs());
  }, []);

  return (
    <CatalogGrid loading={loading} ids={loading ? [null, null, null] : ids} />
  );
}
