import React, { useState } from "react";
import GeneralInfo from "../../components/admin/product/GeneralInfo";
import DetailProduct from "../../components/admin/product/DetailProduct";
const CATEGORY_FIELDS = [
  {
    id: 1,
    value: "phone",
    name: "điện thoại",
  },
  {
    id: 2,
    value: "laptop",
    name: "Laptop",
  },
  {
    id: 3,
    value: "watch",
    name: "Đồng hồ",
  },
  {
    id: 4,
    value: "tablet",
    name: "Máy tính bảng",
  },
];

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
    category: "phone",
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
  const handleChangeCategory = (e) => {
    const category = e.target.value;
    setProduct({
      ...product,
      category: category,
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
        <GeneralInfo
          product={product}
          setProduct={setProduct}
          categories={CATEGORY_FIELDS}
          handleChangeCategory={handleChangeCategory}
        />

        <div className="detail-product">
          <DetailProduct
            product={product}
            setProduct={setProduct}
            detailFields={detailFields}
          />
        </div>
        <div className="variant-product">
          <h3>Thêm biến thể sản phẩm</h3>
          <button>Thêm biến thể</button>
        </div>

        <div>
          <button type="submit">Lưu sản phẩm</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
