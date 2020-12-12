import Link from "next/link";
import { Card } from "antd";

const ViewMore = ({ link }) => {
  return (
    <Link href={link}>
      <Card
        hoverable
        style={{
          minHeight: 425,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a href="#">
          <h2>View More</h2>
        </a>
      </Card>
    </Link>
  );
};

export default ViewMore;
