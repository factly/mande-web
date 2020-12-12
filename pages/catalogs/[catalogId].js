import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

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
      <CatalogDetails id={catalogId} />
      <ProductGrid
        loading={loading}
        ids={loading ? [null, null, null] : productIds}
      />
    </>
  );
}
