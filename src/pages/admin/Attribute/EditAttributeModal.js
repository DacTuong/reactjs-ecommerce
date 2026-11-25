import axios from "axios";
import React, { useEffect, useState } from "react";

const EditAttributeModal = ({ show, handleClose, idAttribute }) => {
  const [infoAttribute, setInfoAttribute] = useState({
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
        setInfoAttribute(res.data);
      })
      .catch((err) => console.log("Lỗi API:", err));
  }, [show, idAttribute]);

  useEffect(() => {
    if (!show || !idAttribute) return;

    axios
      .get(`http://localhost:8080/api/attribute/${idAttribute}`)
      .then((res) => {
        // console.log("Dữ liệu API:", res.data);
        setInfoAttribute(res.data);
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
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal-content-custom"
        onClick={(e) => e.stopPropagation()}
      >
        <h4>Chỉnh sửa thuộc tính :{idAttribute}</h4>

        <form>
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
                  <td>{infoAttribute.name_attribute}</td>

                  <td>{infoAttribute.input_type}</td>

                  <td>
                    <select
                      name="id_storage"
                      value={infoAttribute.id_storage || ""}
                      onChange={(e) =>
                        setInfoAttribute({
                          ...infoAttribute,
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

                  <td>{infoAttribute.is_filterable === 1 ? "Có" : "Không"}</td>

                  <td>{infoAttribute.is_variant === 1 ? "Có" : "Không"}</td>
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
