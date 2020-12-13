import React from "react";
import { useSelector } from "react-redux";

import { ProductGrid } from "../../components/Product";

export default function ProductsList() {
  const { ids, loading } = useSelector(({ products }) => ({
    ids: products.ids,
    loading: products.loading,
  }));

  React.useEffect(() => {
    //get products list
  }, []);

  return (
    <ProductGrid loading={loading} ids={loading ? [null, null, null] : ids} />
  );
}
