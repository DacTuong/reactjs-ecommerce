import React from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  return (
    <div>
      <div>
        <Link to="/admin/add-brand">Thêm thương hiệu mới</Link>
      </div>
      <div>
        <h3>Danh sách thương hiệu</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Tên thương hiệu</th>
              <th>Slug thương hiệu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Tên thương hiệu</td>
              <td>Slug thương hiệu</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Brands;
