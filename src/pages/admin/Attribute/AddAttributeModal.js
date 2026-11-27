import axios from "axios";
import React, { useEffect, useState } from "react";

const AddNewAttribute = ({
  show,
  handleClose,
  idGroup,
  nameGroup,
  idCategory,
  nameCategory,
  onSuccess,
}) => {
  const [attributeStorages, setAttributeStorages] = useState([
    {
      id_storage: "",
      storage_code: "",
      storage_name: "",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/attribute-storage")
      .then((res) => setAttributeStorages(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [attributes, setAttributes] = useState([
    {
      name_attribute: "",
      input_type: "",
      id_storage: "",
      is_filterable: 0,
      is_variant: 0,
    },
  ]);

  const handleAddRowAttribute = () => {
    setAttributes([
      ...attributes,
      {
        name_attribute: "",
        input_type: "",
        id_storage: "",
        is_filterable: 0,
        is_variant: 0,
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
    changeDataType[attributeIdx].input_type = value;
    setAttributes(changeDataType);
  };

  const handleChangeStorage = (attributeIdx, value) => {
    const changeStorage = [...attributes];
    changeStorage[attributeIdx].id_storage = value;
    setAttributes(changeStorage);
  };

  const handleIsFilter = (attributeIdx, value) => {
    const isFilter = [...attributes];
    isFilter[attributeIdx].is_filterable = value;
    setAttributes(isFilter);
  };

  const handleIsVariant = (attributeIdx, value) => {
    const isVariant = [...attributes];
    isVariant[attributeIdx].is_variant = value;
    setAttributes(isVariant);
  };
  const removeAttribute = (attributeIdx) => {
    if (attributes.length === 1) {
      alert("Phải có ít nhất 1 thuộc tính");
      return;
    }
    setAttributes(attributes.filter((_, aIdx) => aIdx !== attributeIdx));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let i = 0; i < attributes.length; i++) {
      const attr = attributes[i];
      if (!attr.name_attribute.trim()) {
        alert(`Dòng ${i + 1} : Vui lòng nhập tên thuộc tính`);
        return;
      }
      if (!attr.input_type.trim()) {
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
        `http://localhost:8080/api/attribute/group/${idGroup}`,
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
        <h5>Thêm mới thuộc tính</h5>
        {/* Thông tin hiển thị, không thuộc form */}
        <div className="attribute-context">
          <div className="context-row">
            <span>Danh mục</span>
            <strong>{nameCategory || "Chưa xác định"}</strong>
          </div>

          <div className="context-row">
            <span>Nhóm thuộc tính</span>
            <strong>{nameGroup || "Chưa xác định"}</strong>
          </div>
        </div>

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
                  <th>Phân loại thuộc tính</th>
                  <th>Loại dữ liệu</th>
                  <th>Lọc</th>
                  <th>Biến thể</th>
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
                        value={attribute.id_storage || ""}
                        onChange={(e) =>
                          handleChangeStorage(
                            index,

                            e.target.value,
                          )
                        }
                      >
                        <option value="">Chọn nguồn dữ liệu</option>
                        {attributeStorages.map((attributeStorage, i) => (
                          <option value={attributeStorage.id_storage} key={i}>
                            {attributeStorage.storage_name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        value={attribute.input_type || ""}
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
                        checked={attribute.is_filterable === 1}
                        onChange={(e) =>
                          handleIsFilter(index, e.target.checked ? 1 : 0)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={attribute.is_variant === 1}
                        onChange={(e) =>
                          handleIsVariant(index, e.target.checked ? 1 : 0)
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
