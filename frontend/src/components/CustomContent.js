// *** Content of CustomTable for list of tickets and CustomModal for an individual ticket ***

import React, { useState } from "react";
import CustomTable from "./CustomTable";
import CustomModal from "./CustomModal";

const CustomContent = ({ data }) => {
  const [modalVisibility, setModalVisibility] = useState(false); // to control the visibility of the modal
  const [modalData, setModalData] = useState(null); // to store the data of the clicked table row

  return (
    <>
      <CustomTable
        data={data}
        setModalData={setModalData}
        setModalVisibility={setModalVisibility}
      />
      {modalVisibility && (
        <CustomModal
          data={modalData}
          visibility={modalVisibility}
          setModalVisibility={setModalVisibility}
        />
      )}
    </>
  );
};

export default CustomContent;
