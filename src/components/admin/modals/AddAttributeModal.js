import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AddNewAttribute = ({ show, handleClose, idGroup, onSuccess }) => {
  const [group, setGroup] = useState(null);
  const [nameGroup, setNameGroup] = useState("");

  const [attributes, setAttributes] = useState([
    {
      name_attribute: "",
      data_type: "",
    },
  ]);

  const AddNewAttribute = () => {
    setAttributes([
      ...attributes,
      [
        {
          name_attribute: "",
          data_type: "",
        },
      ],
    ]);
  };

  // const hanldeChangeAttribute = (groupAttributeIdx, attributeIdx, value) => {
  //   setGroupAttributes((prev) =>
  //     prev.map((gItem, gaIdx) =>
  //       gaIdx === groupAttributeIdx
  //         ? {
  //             ...gItem,
  //             attributes: gItem.attributes.map((a, i) =>
  //               i === attributeIdx ? { ...a, name_attribute: value } : a,
  //             ),
  //           }
  //         : gItem,
  //     ),
  //   );
  // };

  // const handleChangeDataType = (groupAttributeIdx, attributeIdx, value) => {
  //   setGroupAttributes((prev) =>
  //     prev.map((gItem, gIdx) =>
  //       gIdx === groupAttributeIdx
  //         ? {
  //             ...gItem,
  //             attributes: gItem.attributes.map((d, i) =>
  //               i === attributeIdx ? { ...d, data_type: value } : d,
  //             ),
  //           }
  //         : gItem,
  //     ),
  //   );
  // };

  const removeAttribute = (attributeIdx) => {
    if (attributes.length === 1) {
      alert("Phải có ít nhất 1 thuộc tính");
      return;
    }
    setAttributes(attributes.filter((_, aIdx) => aIdx !== attributeIdx));
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/group-attributes/${idGroup}/attributes`)
      .then((res) => setNameGroup(res.data.name_group))
      .catch((err) => console.log(err));
  }, [idGroup]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      attributes: attributes,
    };
    console.log(payload);
  };
  // QUAN TRỌNG: Nếu show là false thì không hiển thị gì cả
  if (!show) return null;
  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal-content-custom"
        onClick={(e) => e.stopPropagation()}
      >
        <h4>Nhóm: {nameGroup}</h4>
        <h5>Thêm mới thuộc tính</h5>
        <form onSubmit={handleSubmit}>
          <div className="border-form">
            <button type="button" onClick={() => AddNewAttribute()}>
              Thêm thuộc tính
            </button>

            {attributes.map((attribute, indexAttribute) => (
              <div className="border-form" key={indexAttribute}>
                <div className="section-header">
                  <h5>Thuộc tính </h5>
                  <button
                    type="button"
                    onClick={() => removeAttribute(indexAttribute)}
                  >
                    Xóa
                  </button>
                </div>
                <div className="flex-row">
                  <div className="form-groub">
                    <label>Tên attribute</label>
                    <input placeholder="Nhập tên attribute" />
                  </div>
                  <div className="form-groub">
                    <label>Chọn loại input</label>
                    <select>
                      <option value="">==Chọn loại input==</option>
                      <option value="text">Text</option>
                      <option value="number">Number</option>
                      <option value="check-box">checkbox</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button type="submit">Lưu dữ liệu</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewAttribute;
