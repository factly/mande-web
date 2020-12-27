import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";

import { ProductGrid } from "../../components/Product";
import { CatalogDetails } from "../../components/Catalog";

export default function ProductsList() {
  const router = useRouter();
  let { catalogId } = router.query;
  catalogId = Number(catalogId);

  const { productIds, loading } = useSelector(({ catalogs }) => {
    return {
      productIds: catalogs.items[catalogId]?.products,
      loading: catalogs.loading,
    };
  });

  React.useEffect(() => {
    //get catalog by id
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
