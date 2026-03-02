import axios from "axios";
import React, { useEffect, useState } from "react";

const Attributes = () => {
  const [attributes, setAttributes] = useState([]);

  return (
    <div>
      <div>Danh sách thuộc tính</div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên loại sản phẩm</th>
            <th>Tên Nhóm thuộc tính</th>
            <th>Tên Thuộc tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button>Sửa</button> | <button>Xoá</button> |
              <button>Quản lý</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Attributes;
