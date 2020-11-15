import React from "react";
import DatasetCard from "../DatasetCard";
import { Empty, Row, Col } from "antd";
import { useSelector } from "react-redux";
import ViewMore from "../ViewMore";

import { dataset } from "../../constants/datasets";

const MAX_TO_SHOW = 3;

export default function FavouritesRow() {
  const { favourites, loading } = useSelector(({ datasets }) => ({
    favourites: datasets.favourites,
    loading: datasets.loading,
  }));

  React.useEffect(() => {
    //get Favourites list
  });

  return (
    <>
      <Row gutter={16}>
        {favourites.slice(0, 3).map((dataset) => (
          <Col span={6}>
            <DatasetCard dataset={dataset} />
          </Col>
        ))}
        {favourites.length > MAX_TO_SHOW && (
          <Col span={6}>
            <ViewMore link="favourites" />
          </Col>
        )}
      </Row>
    </>
  );
}
