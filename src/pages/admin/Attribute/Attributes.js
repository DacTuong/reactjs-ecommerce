import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddAttributeModal from "../../../components/admin/modals/AddAttributeModal";
const Attributes = () => {
  const [attributes, setAttributes] = useState([]);
  const [nameGroup, setNameGroup] = useState("");
  const { idGroup } = useParams();

  const [showAddAttribute, setShowAddAttribute] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/groups/${idGroup}/attributes`)
      .then((res) => setAttributes(res.data))
      .catch((err) => console.log(err));
  }, [idGroup]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/group-attributes/${idGroup}/attributes`)
      .then((res) => setNameGroup(res.data.name_group))
      .catch((err) => console.log(err));
  }, [idGroup]);
  return (
    <div>
      <div className="breadcrum">
        <Link to="/admin">Trang chủ</Link>
        ||{" "}
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
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên Thuộc tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {attributes.map((attribute) => (
            <tr>
              <td></td>
              <td>{attribute.name_attribute}</td>
              <td>
                <button>Sửa</button> | <button>Xoá</button> |
                <button>Quản lý giá trị thuộc tính</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attributes;
