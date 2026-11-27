import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddAttributeModal from "./AddAttributeModal";
import EditAttributeModal from "./EditAttributeModal";

const Attributes = () => {
  const [attributes, setAttributes] = useState([]);

  // Thông tin nhóm thuộc tính
  const [nameGroup, setNameGroup] = useState("");

  // Thông tin danh mục
  const [idCategory, setIdCategory] = useState("");
  const [nameCategory, setNameCategory] = useState("");

  const { idGroup } = useParams();

  const [idAttribute, setIdAttribute] = useState("");

  const [showAddAttribute, setShowAddAttribute] = useState(false);
  const [showEditAttribute, setShowEditAttribute] = useState(false);

  // Xử lý khi nhấn nút sửa
  const handleEditAttribute = (id) => {
    setIdAttribute(id);
    setShowEditAttribute(true);
  };

  // Đóng modal sửa
  const handleCloseEdit = () => {
    setIdAttribute("");
    setShowEditAttribute(false);
  };

  // Lấy thông tin nhóm thuộc tính và danh mục
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/group-attributes/${idGroup}/info`)
      .then((res) => {
        setNameGroup(res.data.name_group);
        setIdCategory(res.data.id_category);
        setNameCategory(res.data.name_category);
      })
      .catch((err) => console.log(err));
  }, [idGroup]);

  // Lấy danh sách các thuộc tính
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/attribute/group/${idGroup}`)
      .then((res) => setAttributes(res.data))
      .catch((err) => console.log(err));
  }, [idGroup]);

  return (
    <div className="attribute-page">
      {/* Khung thông tin đầu trang */}
      <div className="attribute-header">
        {/* Breadcrumb cấp 1 */}
        <div className="attribute-breadcrumb">
          <Link to="/admin">Trang chủ</Link>
          {" / "}
          <Link to="/admin/group-attributes">Quản lý nhóm thuộc tính</Link>
        </div>

        {/* Breadcrumb cấp 2 */}
        <div className="attribute-category">
          <span>{nameCategory}</span>
          <span className="breadcrumb-arrow">›</span>
          <strong>{nameGroup}</strong>
        </div>

        {/* Tiêu đề */}
        <h3>Danh sách thuộc tính</h3>

        {/* Số lượng thuộc tính */}
        <span className="attribute-count">{attributes.length} thuộc tính</span>
      </div>

      {/* Khu vực thao tác */}
      <div className="attribute-actions">
        <AddAttributeModal
          show={showAddAttribute}
          handleClose={() => setShowAddAttribute(false)}
          idGroup={idGroup}
          idCategory={idCategory}
          nameGroup={nameGroup}
          nameCategory={nameCategory}
        />

        <button
          className="btn btn-primary"
          onClick={() => setShowAddAttribute(true)}
        >
          + Thêm thuộc tính
        </button>
      </div>

      {/* Modal sửa */}
      <EditAttributeModal
        show={showEditAttribute}
        handleClose={handleCloseEdit}
        idAttribute={idAttribute}
      />

      {/* Bảng danh sách */}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên thuộc tính</th>
            <th>Hành động</th>
          </tr>
        </thead>

        <tbody>
          {attributes.length > 0 ? (
            attributes.map((attribute, index) => (
              <tr key={attribute.id_attribute}>
                <td>{index + 1}</td>
                <td>{attribute.name_attribute}</td>
                <td>
                  <button
                    onClick={() => handleEditAttribute(attribute.id_attribute)}
                  >
                    Sửa
                  </button>

                  {" | "}

                  <button>Xoá</button>

                  {" | "}

                  <Link
                    to={`/admin/group-attributes/${idGroup}/attributes/${attribute.id_attribute}/values`}
                  >
                    Quản lý giá trị thuộc tính
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Chưa có thuộc tính nào.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Attributes;
