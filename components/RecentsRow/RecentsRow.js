import React from "react";
import DatasetCard from "../DatasetCard";
import { Empty, Row, Col, Button } from "antd";
import { useSelector } from "react-redux";
import ViewMore from "../ViewMore";

import { dataset } from "../../constants/datasets";

const MAX_TO_SHOW = 3;

export default function RecentsRow() {
  const { recents, loading } = useSelector(({ datasets }) => ({
    recents: datasets.recents,
    loading: datasets.loading,
  }));

  React.useEffect(() => {
    //get Recents list
  });

  return (
    <>
      <Row gutter={16}>
        {recents.slice(0, 3).map((dataset) => (
          <Col span={6}>
            <DatasetCard dataset={dataset} />
          </Col>
        ))}
        {/* {recents.length > MAX_TO_SHOW && ( */}
        <Col
          span={6}
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Button>View More</Button>
        </Col>
        {/* )} */}
      </Row>
    </>
  );
}
