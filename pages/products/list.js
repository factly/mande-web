import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from "@material-ui/lab/Pagination";

import { ProductGrid } from "../../components/Product";
import { loadProducts } from "../../actions/products";

export default function ProductsList({ isHome }) {
  const dispatch = useDispatch();

  const [pagination, setPagination] = useState({
    page: 1,
    limit: isHome ? 10 : 20,
  });
  const { ids, loading, total } = useSelector(({ products }) => ({
    ids: products.ids,
    loading: products.loading,
    total: products.total,
  }));

  React.useEffect(() => {
    dispatch(loadProducts(pagination));
  }, [pagination, dispatch]);

  return loading ? (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <CircularProgress />
    </div>
  ) : (
    <>
      <Typography variant="h6">Products</Typography>
      <ProductGrid loading={loading} ids={loading ? [null, null, null] : ids} />
      {!isHome ? (
        <Pagination
          style={{ margin: 10 }}
          count={Math.ceil(total / pagination.limit)}
          variant="outlined"
          shape="rounded"
          page={pagination.page}
          onChange={(event, page) => setPagination({ ...pagination, page })}
        />
      ) : null}
    </>
  );
}
