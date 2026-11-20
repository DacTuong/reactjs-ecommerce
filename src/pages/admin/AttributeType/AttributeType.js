import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddAttributeTypeModal from "./AddAttributeTypeModal";

const AttributeType = () => {
  const [showAddAttributeType, setShowAddAttributeType] = useState(false);
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
            <tr>
              <th>1</th>
              <th>NORMAL</th>
              <th>Bình thường</th>
              <th>
                <button>Sửa</button> || <button>Xóa</button>
              </th>
            </tr>
            <tr>
              <th>1</th>
              <th>NORMAL</th>
              <th>Bình thường</th>
              <th>
                <button>Sửa</button> || <button>Xóa</button>
              </th>
            </tr>
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
