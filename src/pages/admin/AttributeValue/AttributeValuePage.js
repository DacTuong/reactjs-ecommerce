import React, { useEffect, useState } from "react";
import AddAttributeValueModal from "../../../components/admin/modals/AddAttributeValueModal";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const AttributeValuePage = () => {
  const { idGroup, idAttribute } = useParams();
  const [showAddValue, setShowAddValue] = useState(false);
  const [nameGroup, setNameGroup] = useState("");

  // console.log(idGroup);
  // console.log(idAttribute);
  // console.count("AttributeValuePage render");
  const [attributeValues, setAttributeValues] = useState({
    attribute_id: Number(idAttribute),
    value_attributes: [""],
  });

  const handleClosePopup = () => {
    setShowAddValue(false);
    setAttributeValues({
      attribute_id: Number(idAttribute),
      values_attributes: [""],
    });
  };

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8080/api/group-attributes/${idGroup}/info`)
  //     .then((res) => setNameGroup(res.data.name_group))
  //     .catch((err) => console.log(err));
  // }, [idGroup]);

  return (
    <div>
      <div className="breadcrum">
        <Link to="/admin">Trang chủ</Link>
        ||
        <Link>Tên nhóm:</Link>
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
