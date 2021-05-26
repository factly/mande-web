import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";

import { ProductGrid } from "../../components/Product";
import { CatalogDetails } from "../../components/Catalog";
import { getCatalog } from "../../actions/catalogs";

export default function Catalog() {
  const router = useRouter();
  const dispatch = useDispatch();

  let { catalogId } = router.query;
  if (catalogId) catalogId = parseInt(catalogId, 10);
  else catalogId = 0;

  const { productIds, loading, catalog } = useSelector(({ catalogs }) => {
    return {
      catalog: catalogs.items[catalogId],
      productIds: catalogs.items[catalogId]?.products,
      loading: catalogs.loading,
    };
  });

  React.useEffect(() => {
    if (!catalog) {
      dispatch(getCatalog(catalogId));
    }
  }, []);

  return (
    <>
      <Typography variant="h6">Catalog</Typography>
      <CatalogDetails id={catalogId} />
      <Typography variant="h6">Products</Typography>
      <ProductGrid
        loading={loading}
        ids={loading ? [null, null, null] : productIds}
      />
    </>
  );
}
