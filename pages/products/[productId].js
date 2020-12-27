import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

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

  return loading ? (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <CircularProgress />
    </div>
  ) : (
    <>
      <Typography variant="h6">Product</Typography>
      <ProductDetails id={productId} />
      <Typography variant="h6">Datasets</Typography>
      <DatasetGrid
        loading={loading}
        ids={loading ? [null, null, null] : datasetIds}
      />
    </>
  );
}
