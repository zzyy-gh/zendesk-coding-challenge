// table to display list of tickets
import React from "react";
import { Table } from "antd";

const CustomTable = ({ data, setModalData, setModalVisibility }) => {
  var entries = [];

  // add data to entries if it is not null
  if (data) {
    data.forEach(function (iteration, index) {
      entries.push(...iteration["tickets"]);
    });
  }

  // columns of data to be displayed
  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Subject", dataIndex: "subject" },
    { title: "Assignee ID", dataIndex: "assignee_id" },
    { title: "Requester ID", dataIndex: "requester_id" },
    { title: "Priority", dataIndex: "priority" },
    { title: "Status", dataIndex: "status" },
    { title: "Due at", dataIndex: "due_at" },
  ];

  return (
    <Table
      pagination={{ pageSize: 25 }}
      dataSource={entries}
      columns={columns}
      scroll={{ x: 400 }}
      bordered
      onRow={(record) => {
        return {
          onClick: () => {
            setModalVisibility(true);
            setModalData(record);
          },
        };
      }}
    />
  );
};

export default CustomTable;
