import React from "react";
import DatasetCard from "../components/DatasetCard";
import { Empty, Row, Col } from "antd";
import { useSelector } from "react-redux";

import { dataset } from "../constants/datasets";

export default function Favourites() {
  const { favourites, loading } = useSelector(({ datasets }) => ({
    favourites: datasets.favourites,
    loading: datasets.loading,
  }));

  React.useEffect(() => {
    // GET favourites/list
  });

  return loading ? (
    <Skeleton />
  ) : !favourites.length ? (
    <Empty />
  ) : (
    <Row gutter={16}>
      {favourites.map((dataset) => (
        <Col span={6}>
          <DatasetCard dataset={dataset} />
        </Col>
      ))}
    </Row>
  );
}
