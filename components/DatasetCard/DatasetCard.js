import { Card } from "antd";
import DatasetDetails from "./DatasetDetails";
import Link from "next/link";

const DatasetCard = ({ dataset }) => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        hoverable
        title={<Link href={`/datasets/${dataset.id}`}>{dataset.title}</Link>}
        bordered={false}
        cover={
          <img
            className="photo"
            // alt={dataset.featured_media?.alt_text || "No image added"}
            // src={dataset.featured_media?.url}
            src={"sample.png"}
          />
        }
      >
        <DatasetDetails dataset={dataset} />
      </Card>
    </div>
  );
};

export default DatasetCard;
