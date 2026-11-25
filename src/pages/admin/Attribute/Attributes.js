import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddAttributeModal from "./AddAttributeModal";
import EditAttributeModal from "./EditAttributeModal";
const Attributes = () => {
  const [attributes, setAttributes] = useState([]);
  const [nameGroup, setNameGroup] = useState("");

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
  // Lấy Tên nhóm attribute
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/group-attributes/${idGroup}/info`)
      .then((res) => setNameGroup(res.data.name_group))
      .catch((err) => console.log(err));
  }, [idGroup]);

  // Lấy danh sách các attributes
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/attribute/group/${idGroup}`)
      .then((res) => setAttributes(res.data))
      .catch((err) => console.log(err));
  }, [idGroup]);

  return (
    <div>
      <div className="breadcrum">
        <Link to="/admin">Trang chủ</Link>
        ||
        <Link to={`/admin/group-attributes/${idGroup}/attributes`}>
          {nameGroup}
        </Link>
      </div>
      <div>Danh sách thuộc tính</div>
      <div>
        <AddAttributeModal
          show={showAddAttribute}
          handleClose={() => setShowAddAttribute(false)}
          idGroup={idGroup}
        ></AddAttributeModal>
        <button
          className="btn btn-primary"
          onClick={() => setShowAddAttribute(true)}
        >
          + Thêm thuộc tính
        </button>
      </div>

      <div>
        <EditAttributeModal
          show={showEditAttribute}
          handleClose={() => handleCloseEdit()}
          idAttribute={idAttribute}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên Thuộc tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {attributes.map((attribute, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{attribute.name_attribute}</td>
              <td>
                <button
                  onClick={() => handleEditAttribute(attribute.id_attribute)}
                >
                  Sửa
                </button>{" "}
                | <button>Xoá</button> |
                <Link
                  to={`/admin/group-attributes/${idGroup}/attributes/${attribute.id_attribute}/values`}
                >
                  Quản lý giá trị thuộc tính
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attributes;
