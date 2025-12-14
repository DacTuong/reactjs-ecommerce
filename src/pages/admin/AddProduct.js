import React, { useEffect, useState } from "react";
import GeneralInfo from "../../components/admin/product/GeneralInfo";
import DetailProduct from "../../components/admin/product/DetailProduct";
const brands = [
  { id: 1, idcate: 1, brand: "samsung" },
  { id: 2, idcate: 1, brand: "xiaomi" },
  { id: 3, idcate: 2, brand: "samssung" },
  { id: 4, idcate: 2, brand: "xiaomii" },
  { id: 5, idcate: 3, brand: "Spple" },
  { id: 6, idcate: 3, brand: "SPSP" },
  { id: 7, idcate: 4, brand: "Spple" },
];
const CATEGORY_FIELDS = [
  {
    id: 1,
    value: 1,
    name: "điện thoại",
  },
  {
    id: 2,
    value: 2,
    name: "Laptop",
  },
  {
    id: 3,
    value: 3,
    name: "Đồng hồ",
  },
  {
    id: 4,
    value: 4,
    name: "Máy tính bảng",
  },
];

const CATEGORY_DETAIL_FIELDS = {
  1: [
    { key: "screen", label: "Màn hình" },
    { key: "cpu", label: "CPU" },
    { key: "ram", label: "RAM" },
    { key: "storage", label: "Bộ nhớ" },
    { key: "battery", label: "Pin" },
    { key: "camera", label: "Camera" },
  ],
  2: [
    { key: "cpu", label: "CPU" },
    { key: "gpu", label: "GPU" },
    { key: "ram", label: "RAM" },
    { key: "storage", label: "Ổ cứng" },
    { key: "screen", label: "Màn hình" },
    { key: "battery", label: "Pin" },
  ],
  3: [
    { key: "screen", label: "Màn hình" },
    { key: "battery", label: "Pin" },
    { key: "storage", label: "Bộ nhớ" },
  ],
  4: [
    { key: "material", label: "Chất liệu" },
    { key: "compatibility", label: "Tương thích" },
  ],
};

const AddProduct = () => {
  const [product, setProduct] = useState({
    product_code: "",
    brand: "",
    category: 1,
    product_name: "",
    product_sku: "",
    details: {},
    variants: [
      {
        name_variant: "",
        colors: [
          {
            color_name: "",
            color_sku: "",
          },
        ],
      },
    ],
  });
  // phần xứ lý thay đổi nhập thông tin chi tiết theo loại sản phẩm
  const detailFields = CATEGORY_DETAIL_FIELDS[product.category] || [];
  const handleChangeCategory = (e) => {
    const category = Number(e.target.value);
    setProduct({
      ...product,
      brand: "",
      category: category,
      details: {},
    });
  };

  // Phần xữ lý thay đổi thương hiệu theo loại sản phẩm
  const [filteredBrands, setFilteredBrands] = useState([]);
  useEffect(() => {
    const results = brands.filter((brand) => brand.idcate === product.category);
    setFilteredBrands(results);
  }, [product.category]);

  //Phần xữ lý thêm variant
  const addVariant = () => {
    setProduct({
      ...product,
      variants: [
        ...product.variants,
        { name_variant: "", colors: [{ color_name: "", color_sku: "" }] },
      ],
    });
  };

  //Phần xữ lý cập nhất lại thông tin của variant
  const updateVariant = (index, value) => {
    const newVariants = [...product.variants];
    newVariants[index].name_variant = value;
    setProduct({
      ...product,
      variants: newVariants,
    });
  };
  //Phần xữ lý thêm color variant
  const addColor = (varianIndex) => {
    const newColor = [...product.variants];
    newColor[varianIndex].colors.push({
      color_name: "",
      color_sku: "",
    });
    setProduct({
      ...product,
      variants: newColor,
    });
  };
  // Phần xữ lý lấy tất cả các thông tin của sản phẩm
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
          filteredBrands={filteredBrands}
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
          <button onClick={addVariant}>Thêm biến thể</button>
          {product.variants.map((variant, vIndex) => (
            <div key={vIndex} className="variant-box">
              <label>Tên biến thể</label>
              <input
                value={variant.name_variant}
                onChange={(e) => updateVariant(vIndex, e.target.value)}
              />

              <button type="button" onClick={() => addColor(vIndex)}>
                Thêm màu mới
              </button>
              {/* HIỂN THỊ DANH SÁCH MÀU */}
              {variant.colors.map((color, cIndex) => (
                <div className="flex-row">
                  <div className="form-groub">
                    <label>Thêm</label>
                    <input></input>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div>
          <button type="submit">Lưu sản phẩm</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
