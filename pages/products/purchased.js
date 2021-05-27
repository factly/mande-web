import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { ProductGrid } from "../../components/Product";
import { loadPurchasedProducts } from "../../actions/products";

export default function ProductsList() {
  const dispatch = useDispatch();
  const { ids, loading } = useSelector(({ products }) => ({
    ids: products.purchasedIds,
    loading: products.loading,
  }));

  React.useEffect(() => {
    dispatch(loadPurchasedProducts());
  }, []);

  return loading ? (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <CircularProgress />
    </div>
  ) : (
    <>
      <Typography variant="h6">Products</Typography>
      <ProductGrid
        loading={loading}
        ids={loading ? [null, null, null] : ids}
        purchased={true}
      />
    </>
  );
}
