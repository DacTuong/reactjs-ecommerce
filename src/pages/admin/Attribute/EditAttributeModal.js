import axios from "axios";
import React, { useEffect, useState } from "react";

const EditAttributeModal = ({ show, handleClose, idAttribute }) => {
  const [attribute, setAttribute] = useState({
    id_attribute: "",
    name_attribute: "",
    input_type: "",
    id_storage: "",
    is_filterable: "",
    is_variant: "",
  });

  const [attributeStorages, setAttributeStorages] = useState([
    {
      id_storage: "",
      storage_code: "",
      storage_name: "",
    },
  ]);
  useEffect(() => {
    if (!show || !idAttribute) return;

    axios
      .get(`http://localhost:8080/api/attribute/${idAttribute}`)
      .then((res) => {
        // console.log("Dữ liệu API:", res.data);
        setAttribute(res.data);
      })
      .catch((err) => console.log("Lỗi API:", err));
  }, [show, idAttribute]);

  useEffect(() => {
    if (!show) return;
    axios
      .get("http://localhost:8080/api/attribute-storage")
      .then((res) => {
        // console.log("Dữ liệu API:", res.data);
        setAttributeStorages(res.data);
      })
      .catch((err) => console.log("Lỗi API:", err));
  }, [show]);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!attribute.name_attribute.trim()) {
      alert(`Vui lòng nhập tên thuộc tính`);
      return;
    }
    if (!attribute.input_type) {
      alert(`Vui lòng chọn loại dữ liệu`);
      return;
    }
    if (!attribute.id_storage) {
      alert("Vui lòng chọn nguồn dữ liệu");
      return;
    }

    axios
      .put(`http://localhost:8080/api/attribute/${idAttribute}`, attribute)
      .then((res) => {
        setAttribute(res.data);
      })
      .catch((error) => {
        console.error(error.response?.data);
        alert(error.response?.data || "Có lỗi xảy ra");
      });
  };

  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal-content-custom"
        onClick={(e) => e.stopPropagation()}
      >
        <h4>Chỉnh sửa thuộc tính: {attribute.name_attribute}</h4>

        <form onSubmit={handleUpdate}>
          <div className="border-form">
            <table className="attribute-table">
              <thead>
                <tr>
                  <th>Tên thuộc tính</th>
                  <th>Loại dữ liệu</th>
                  <th>Nguồn dữ liệu</th>
                  <th>Lọc</th>
                  <th>Hành động</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <input
                      value={attribute.name_attribute || ""}
                      onChange={(e) =>
                        setAttribute({
                          ...attribute,
                          name_attribute: e.target.value,
                        })
                      }
                    />
                  </td>

                  <td>
                    <select
                      value={attribute.input_type || ""}
                      onChange={(e) =>
                        setAttribute({
                          ...attribute,
                          input_type: e.value,
                        })
                      }
                    >
                      <option value="">Chọn</option>
                      <option value="text">Text</option>
                      <option value="number">Number</option>
                      <option value="check-box">Checkbox</option>
                    </select>
                  </td>

                  <td>
                    <select
                      name="id_storage"
                      value={attribute.id_storage || ""}
                      onChange={(e) =>
                        setAttribute({
                          ...attribute,
                          id_storage: e.target.value,
                        })
                      }
                    >
                      <option value="">-- Chọn nguồn dữ liệu --</option>

                      {attributeStorages.map((attributeStorage, index) => (
                        <option
                          key={attributeStorage.id_storage}
                          value={attributeStorage.id_storage}
                        >
                          {attributeStorage.storage_name}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td>
                    <input
                      type="checkbox"
                      checked={attribute.is_filterable === 1}
                      onChange={(e) =>
                        setAttribute({
                          ...attribute,
                          is_filterable: e.target.checked ? 1 : 0,
                        })
                      }
                    />
                  </td>

                  <td>
                    <input
                      type="checkbox"
                      checked={attribute.is_variant === 1}
                      onChange={(e) =>
                        setAttribute({
                          ...attribute,
                          is_variant: e.target.checked ? 1 : 0,
                        })
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button type="submit">Lưu dữ liệu</button>

          <button type="button" onClick={handleClose}>
            Đóng
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAttributeModal;
