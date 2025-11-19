import React from "react";

const AddProduct = () => {
  return (
    <div>
      <h1>Thêm sản phẩm mới</h1>
      <form>
        <label>Mã sản phẩm</label>
        <input
          type="email"
          id="product_code"
          value=""
          onChange=""
          className=""
          required
        />
        <label>Thương hiệu</label>
        <select>
          <option></option>
        </select>
        <label>Loại sản phẩm</label>
        <select>
          <option></option>
        </select>
        <label>Tên sản phẩm</label>
        <input
          type="text"
          id="product_name"
          value=""
          onChange=""
          className=""
          required
        />
        <label></label>
        <input
          type="text"
          id="product_name"
          value=""
          onChange=""
          className=""
          required
        />
      </form>
    </div>
  );
};

export default AddProduct;
