// *** Content of CustomTable for list of tickets and CustomModal for an individual ticket ***

import React, { useState } from "react";
import CustomTable from "./CustomTable";
import CustomModal from "./CustomModal";
import { Spin } from "antd";

export default function CustomContent({ data, error, loading }) {
  const [modalVisibility, setModalVisibility] = useState(false); // to control the visibility of the modal
  const [modalData, setModalData] = useState(null); // to store the data of the clicked table row

  return (
    <div data-testid="custom-content">
      {loading ? (
        <Spin data-testid="spinner" />
      ) : error ? (
        <p data-testid="err-msg">{error}</p>
      ) : (
        <CustomTable
          data={data}
          setModalData={setModalData}
          setModalVisibility={setModalVisibility}
        />
      )}
      {modalVisibility && (
        <CustomModal
          data={modalData}
          visibility={modalVisibility}
          setModalVisibility={setModalVisibility}
        />
      )}
    </div>
  );
}
