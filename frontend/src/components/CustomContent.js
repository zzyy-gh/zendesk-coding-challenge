import React, { useState } from "react";
import CustomTable from "./CustomTable";
import CustomModal from "./CustomModal";

const CustomContent = ({ data }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalData, setModalData] = useState(null);

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
