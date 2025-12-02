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
  const [product, setProduct] = useState({ category: "", details: {} });
  const handleChangeCategory = (e) => {
    const category = e.target.value;
    setProduct({
      ...product,
      category,
      details: {},
    });
  };
  const updateDetail = (key, value) => {
    setProduct({
      ...product,
      details: { ...product.details, [key]: value },
    });
  };
  const detailFields = CATEGORY_DETAIL_FIELDS[product.category] || [];
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
      <form>
        <div className="information-product">
          <h1>Thông tin sản phẩm</h1>
          <div className="form-groub">
            <label>Mã sản phẩm</label>

            <input
              type="email"
              id="product_code"
              value=""
              onChange=""
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

            <input type="text" id="product_name" className="" required />
          </div>
          <div className="form-groub">
            <label>Mã SKU</label>

            <input type="text" id="code_sku" className="" required />
          </div>
        </div>

        <div className="detail-product">
          <div className="phone">
            <h2>Nhập thông tin điện thoại</h2>
            {detailFields.map((field) => (
              <div key={field.key}>
                <lable>{field.label}</lable>
                <input
                  value={product.details[field.key] || ""}
                  onChange={(e) => updateDetail(field.key, e.target.value)}
                ></input>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
