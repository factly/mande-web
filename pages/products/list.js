import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductGrid } from "../../components/Product";
import { loadProducts } from "../../actions/products";

export default function ProductsList() {
  const dispatch = useDispatch();
  const { ids, loading } = useSelector(({ products }) => ({
    ids: products.ids,
    loading: products.loading,
  }));

  React.useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <ProductGrid loading={loading} ids={loading ? [null, null, null] : ids} />
  );
}
