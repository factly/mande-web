import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { DatasetGrid } from "../../components/Dataset";
import { ProductDetails } from "../../components/Product";
import { getProduct } from "../../actions/products";

export default function ProductList() {
  const dispatch = useDispatch();
  const router = useRouter();
  let { productId } = router.query;
  if (productId) productId = parseInt(productId, 10);
  else productId = 0;

  const { datasetIds, loading, product } = useSelector(({ products }) => {
    return {
      product: products.items[productId],
      datasetIds: products.items[productId]?.datasets,
      loading: products.loading,
    };
  });

  React.useEffect(() => {
    if (!product) {
      dispatch(getProduct(productId));
    }
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
