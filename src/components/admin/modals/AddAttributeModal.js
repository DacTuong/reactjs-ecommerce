import axios from "axios";
import React, { useEffect, useState } from "react";

const AddNewAttribute = ({ show, handleClose, idGroup, onSuccess }) => {
  const [nameGroup, setNameGroup] = useState("");
  const [attributes, setAttributes] = useState([
    {
      name_attribute: "",
      data_type: "",
      is_filter: 0,
    },
  ]);

  const handleAddRowAttribute = () => {
    setAttributes([
      ...attributes,
      {
        name_attribute: "",
        data_type: "",
        is_filter: 0,
      },
    ]);
  };

  const hanldeChangeAttribute = (attributeIdx, value) => {
    const newNameAttribute = [...attributes];
    newNameAttribute[attributeIdx].name_attribute = value;
    setAttributes(newNameAttribute);
  };

  const handleChangeDataType = (attributeIdx, value) => {
    const changeDataType = [...attributes];
    changeDataType[attributeIdx].data_type = value;
    setAttributes(changeDataType);
  };

  const handleIsFilter = (attributeIdx, value) => {
    const isFilter = [...attributes];
    isFilter[attributeIdx].is_filter = value;
    setAttributes(isFilter);
  };
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

    for (let i = 0; i < attributes.length; i++) {
      const attr = attributes[i];
      if (!attr.name_attribute.trim()) {
        alert(`Dòng ${i + 1} : Vui lòng nhập tên thuộc tính`);
        return;
      }
      if (!attr.data_type.trim()) {
        alert(`Dòng ${i + 1} : Vui lòng chọn loại dữ liệu`);
        return;
      }
    }
    const payload = {
      attributes: attributes,
    };
    console.log(payload);

    try {
      await axios.post(
        `http://localhost:8080/api/group-attributes/${idGroup}/attributes`,
        attributes,
      );
      alert("Lưu  thành công");
    } catch (error) {
      console.error(error.response?.data);
      alert(error.response?.data || "Có lỗi xảy ra");
    }
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
            <button type="button" onClick={() => handleAddRowAttribute()}>
              Thêm thuộc tính
            </button>

            <table className="attribute-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên thuộc tính</th>
                  <th>Loại dữ liệu</th>
                  <th>Lọc</th>
                  <th>Hành động</th>
                </tr>
              </thead>

              <tbody>
                {attributes.map((attribute, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>

                    <td>
                      <input
                        placeholder="Nhập tên..."
                        value={attribute.name_attribute || ""}
                        onChange={(e) =>
                          hanldeChangeAttribute(index, e.target.value)
                        }
                      />
                    </td>

                    <td>
                      <select
                        value={attribute.data_type || ""}
                        onChange={(e) =>
                          handleChangeDataType(
                            index,

                            e.target.value,
                          )
                        }
                      >
                        <option value="">Chọn</option>
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="check-box">Checkbox</option>
                      </select>
                    </td>

                    <td>
                      <input
                        type="checkbox"
                        checked={attribute.is_filter === 1}
                        onChange={(e) =>
                          handleIsFilter(index, e.target.checked ? 1 : 0)
                        }
                      />
                    </td>

                    <td>
                      <button
                        type="button"
                        className="btn-delete"
                        onClick={() => removeAttribute(index)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button type="submit">Lưu dữ liệu</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewAttribute;
