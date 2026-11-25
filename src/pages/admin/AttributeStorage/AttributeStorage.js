import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddAttributeTypeModal from "./AddAttributeStorageModal";
import axios from "axios";

const AttributeType = () => {
  const [showAddAttributeType, setShowAddAttributeType] = useState(false);

  const [attributeTypes, setAttributeTypes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/attribute-storage")
      .then((res) => setAttributeTypes(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="breadcrum">
        <Link to="/admin">Trang chủ</Link>
      </div>

      <div>
        <div>
          <h4>Danh sách thuộc loại dữ liệu</h4>
          <button
            className="btn btn-primary"
            onClick={() => setShowAddAttributeType(true)}
          >
            + Thêm thuộc tính
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã Thuộc tính</th>
              <th>Tên Thuộc tính</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {attributeTypes.map((data, index) => (
              <tr>
                <th>{index + 1}</th>
                <th>{data.storage_code}</th>
                <th>{data.storage_name}</th>
                <th>
                  <button>Sửa</button> || <button>Xóa</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <AddAttributeTypeModal
          show={showAddAttributeType}
          handleClose={() => setShowAddAttributeType(false)}
        ></AddAttributeTypeModal>
      </div>
    </div>
  );
};

export default AttributeType;
