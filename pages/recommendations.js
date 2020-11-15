import React from "react";
import DatasetCard from "../components/DatasetCard";
import { Empty } from "antd";
import { useSelector } from "react-redux";

export default function Recommendations() {
  const { recommendations, loading } = useSelector(({ datasets }) => ({
    recommendations: datasets.recommendations,
    loading: datasets.loading,
  }));

  React.useEffect(() => {
    //get Recommendations list
  });

  return loading ? (
    <Skeleton />
  ) : !recommendations.length ? (
    <Empty />
  ) : (
    <>
      {recommendations.map((dataset) => (
        <>
          <DatasetCard dataset={dataset} />
          <br />
        </>
      ))}
    </>
  );
}
