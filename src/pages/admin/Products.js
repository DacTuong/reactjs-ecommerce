import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <div>
        <Link to="new-product">Thêm sản phẩm mới</Link>
      </div>
      <div>
        <h3>Danh sách sản phẩm</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Loại</th>
              <th>Hãng</th>
              <th>Trạng thái</th>
              <th>Quản lý</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>mã</td>
              <td>hình ảnh</td>
              <td>tên</td>
              <td>giá</td>
              <td>số lượng</td>
              <td>loại</td>
              <td>Trạng thái</td>
              <td>Xem</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
