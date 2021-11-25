// modal to display an individual ticket
import { Descriptions, Modal } from "antd";
import React from "react";

const CustomModal = ({ data, visibility, setModalVisibility }) => {
  return (
    <Modal
      visible={visibility}
      footer={false}
      onCancel={() => setModalVisibility(false)}
      width={800}
    >
      <Descriptions title={"ID: " + data.id} bordered column={1}>
        <Descriptions.Item label="Subject">{data.subject}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {data.description}
        </Descriptions.Item>
        <Descriptions.Item label="Assignee ID">
          {data.assignee_id}
        </Descriptions.Item>
        <Descriptions.Item label="Requester ID">
          {data.requester_id}
        </Descriptions.Item>
        <Descriptions.Item label="Priority">{data.priority}</Descriptions.Item>
        <Descriptions.Item label="Status">{data.status}</Descriptions.Item>
        <Descriptions.Item label="Due at">{data.due_at}</Descriptions.Item>
        <Descriptions.Item label="Created at">
          {data.created_at}
        </Descriptions.Item>
        <Descriptions.Item label="Updated at">
          {data.updated_at}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default CustomModal;
