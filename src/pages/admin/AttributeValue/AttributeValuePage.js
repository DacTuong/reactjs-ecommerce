import React, { useState } from "react";
import AddAttributeValueModal from "../../../components/admin/modals/AddAttributeValueModal";
import { Link, useParams } from "react-router-dom";
const AttributeValuePage = () => {
  const { idGroup, idAttribute } = useParams;
  const [showAddValue, setShowAddValue] = useState(false);
  const [attributeValues, setAttributeValues] = useState([
    {
      value_attribute: "",
    },
  ]);

  const handleClosePopup = () => {
    setShowAddValue(false);
    setAttributeValues([
      {
        value_attribute: "",
      },
    ]);
  };

  return (
    <div>
      <div className="breadcrum">
        <Link to="/admin">Trang chủ</Link>
        ||
        <Link>Tên nhóm</Link>
        || <Link>Tên thuộc tính</Link>
      </div>
      <button className="btn btn-primary" onClick={() => setShowAddValue(true)}>
        Thêm giá trị mới
      </button>
      <div>
        <AddAttributeValueModal
          show={showAddValue}
          idGroup={idGroup}
          idAttribute={idAttribute}
          handleClose={() => handleClosePopup()}
          attributeValues={attributeValues}
          setAttributeValues={setAttributeValues}
        ></AddAttributeValueModal>
      </div>
    </div>
  );
};

export default AttributeValuePage;
