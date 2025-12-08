import React, { useState } from "react";
const CATEGORY_DETAIL_FIELDS = {
  phone: [
    { key: "screen", label: "Màn hình" },
    { key: "cpu", label: "CPU" },
    { key: "ram", label: "RAM" },
    { key: "storage", label: "Bộ nhớ" },
    { key: "battery", label: "Pin" },
    { key: "camera", label: "Camera" },
  ],
  laptop: [
    { key: "cpu", label: "CPU" },
    { key: "gpu", label: "GPU" },
    { key: "ram", label: "RAM" },
    { key: "storage", label: "Ổ cứng" },
    { key: "screen", label: "Màn hình" },
    { key: "battery", label: "Pin" },
  ],
  tablet: [
    { key: "screen", label: "Màn hình" },
    { key: "battery", label: "Pin" },
    { key: "storage", label: "Bộ nhớ" },
  ],
  accessory: [
    { key: "material", label: "Chất liệu" },
    { key: "compatibility", label: "Tương thích" },
  ],
};

const AddProduct = () => {
  const [product, setProduct] = useState({
    product_code: "",
    brand: "",
    category: "",
    product_name: "",
    product_sku: "",
    details: {},
    variants: [
      {
        name_variant: "",
        colors: {
          color_name: "",
          color_sku: "",
        },
      },
    ],
  });
  const updateField = (key, value) => {
    setProduct({ ...product, [key]: value });
  };
  const updateDetail = (key, value) => {
    setProduct({
      ...product,
      details: { ...product.details, [key]: value },
    });
  };
  const handleChangeCategory = (e) => {
    const category = e.target.value;
    setProduct({
      ...product,
      category,
      details: {},
    });
  };
  const detailFields = CATEGORY_DETAIL_FIELDS[product.category] || [];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("DỮ LIỆU SẢN PHẨM:", product);
  };
  return (
    <div>
      <h1>Trang thêm sản phẩm</h1>
      <div className="tab-button">
        <button>
          <b>Thông tin chung</b>
        </button>
        <button>
          <b>Thông tin chi tiết</b>
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="information-product">
          <h1>Thông tin sản phẩm</h1>
          <div className="form-groub">
            <label>Mã sản phẩm</label>

            <input
              type="text"
              id="product_code"
              value={product.product_code}
              onChange={(e) => updateField("product_code", e.target.value)}
              className=""
              required
            />
          </div>
          <div className="flex-row">
            <div className="form-groub">
              <label>Thương hiệu</label>

              <select>
                <option>Samsung</option>
                <option>Apple</option>
              </select>
            </div>
            <div className="form-groub">
              <label>Loại sản phẩm</label>

              <select value={product.category} onChange={handleChangeCategory}>
                <option value="">-- Chọn danh mục --</option>
                <option value="phone">Điện thoại</option>
                <option value="laptop">Laptop</option>
                <option value="tablet">Tablet</option>
                <option value="accessory">Phụ kiện</option>
              </select>
            </div>
          </div>
          <div className="form-groub">
            <label>Tên sản phẩm</label>
            <input
              type="text"
              id="product_name"
              value={product.product_name}
              onChange={(e) => updateField("product_name", e.target.value)}
              className=""
              required
            />
          </div>
          <div className="form-groub">
            <label>Mã SKU</label>
            <input
              type="text"
              id="code_sku"
              value={product.product_sku}
              onChange={(e) => updateField("product_sku", e.target.value)}
              className=""
              required
            />
          </div>
        </div>
        <div className="detail-product">
          <div className="phone">
            <h2>Nhập thông tin điện thoại</h2>
            {detailFields.map((field) => (
              <div key={field.key} className="form-groub">
                <label>{field.label}</label>
                <input
                  value={product.details[field.key] || ""}
                  onChange={(e) => updateDetail(field.key, e.target.value)}
                ></input>
              </div>
            ))}
          </div>
        </div>
        <div className="variant-product">
          <h3>Thêm biến thể sản phẩm</h3>
          <button>Thêm biến thể</button>
          <div>
            <b>Biến thể</b>
            <div className="form-groub">
              <label>Tên biến thể</label>
              <input />
              <button>Thêm màu mới</button>
              <div className="flex-row">
                <div className="form-groub">
                  <label>Tên màu sắc</label>
                  <input />
                </div>
                <div className="form-groub">
                  <label>Mã màu sắc</label>
                  <input />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button type="submit">Lưu sản phẩm</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
