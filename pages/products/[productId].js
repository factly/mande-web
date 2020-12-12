import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { DatasetGrid } from "../../components/Dataset";
import { ProductDetails } from "../../components/Product";

export default function ProductList() {
  const router = useRouter();
  let { productId } = router.query;
  productId = Number(productId);

  const { datasetIds, loading } = useSelector(({ products }) => {
    return {
      datasetIds: products.items[productId]?.datasets,
      loading: products.loading,
    };
  });

  React.useEffect(() => {
    //get Product by id
  }, []);

  return (
    <>
      <ProductDetails id={productId} />
      <DatasetGrid
        loading={loading}
        ids={loading ? [null, null, null] : datasetIds}
      />
    </>
  );
}
