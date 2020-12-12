import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Empty } from "antd";

import { dataset } from "../constants/datasets";
import DatasetCard from "../components/DatasetCard";

export default function Recents() {
  const { recents, loading } = useSelector(({ datasets }) => ({
    recents: datasets.recents,
    loading: datasets.loading,
  }));

  React.useEffect(() => {
    //get Recents list
  }, []);

  return loading ? (
    <Skeleton />
  ) : !recents.length ? (
    <Empty />
  ) : (
    <Row gutter={16}>
      {recents.map((dataset) => (
        <Col className="gutter-row" span={6}>
          <DatasetCard dataset={dataset} />
        </Col>
      ))}
    </Row>
  );
}
