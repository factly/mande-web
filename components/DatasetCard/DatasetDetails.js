import { Descriptions } from "antd";

const DatasetDetails = ({ dataset }) => {
  return (
    <Descriptions layout="horizontal" column={1}>
      <Descriptions.Item label="Contact email">
        {dataset.contact_email}
      </Descriptions.Item>
      <Descriptions.Item label="Contact name">
        {dataset.contact_name}
      </Descriptions.Item>
      <Descriptions.Item label="License">{dataset.license}</Descriptions.Item>
      <Descriptions.Item label="Source">{dataset.source}</Descriptions.Item>
    </Descriptions>
  );
};

export default DatasetDetails;
