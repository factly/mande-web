import React from "react";
import DatasetCard from "../DatasetCard";
import { Empty, Row, Col } from "antd";
import { useSelector } from "react-redux";
// import ViewMore from "../ViewMore";

// import { dataset } from "../../constants/datasets";

const MAX_TO_SHOW = 3;
export default function RecommendationsRow() {
  const { recommendations, loading } = useSelector(({ datasets }) => ({
    recommendations: datasets.recommendations,
    loading: datasets.loading,
  }));

  React.useEffect(() => {
    //get Recommendations list
  });

  return (
    <>
      <Row gutter={16}>
        {recommendations.slice(0, MAX_TO_SHOW).map((dataset) => (
          <Col span={6}>
            <DatasetCard dataset={dataset} />
          </Col>
        ))}
        {/* {recommendations.length > MAX_TO_SHOW && (
          <Col span={8}>
            <ViewMore link="recommendations" />
          </Col>
        )} */}
      </Row>
    </>
  );
}
