import React, { useEffect, useState } from "react";
import DetailProduct from "../../../components/admin/products/DetailProduct";
import GeneralInfo from "../../../components/admin/products/GeneralInfo";

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
    newColor[varianIndex] = {
      ...newColor[varianIndex],
      colors: [
        ...newColor[varianIndex].colors,
        {
          color_name: "",
          color_sku: "",
        },
      ],
    };
    setProduct({
      ...product,
      variants: newColor,
    });
  };
  // xữ lý phần xóa từng cái trong varian
  const removeVariant = (varianIndex) => {
    // Nếu chỉ còn 1 biến thể thì không cho xóa
    if (product.variants.length === 1) {
      alert("Phải có ít nhất 1 biến thể sản phẩm");
      return;
    }
    const newVariants = product.variants.filter(
      (_, index) => index !== varianIndex
    );
    setProduct({
      ...product,
      variants: newVariants,
    });
  };
  const removeColor = (variantIndex, cIndex) => {
    const newVariants = [...product.variants];
    newVariants[variantIndex] = {
      ...newVariants[variantIndex],
      colors: newVariants[variantIndex].colors.filter(
        (_, index) => index !== cIndex
      ),
    };
    setProduct({
      ...product,
      variants: newVariants,
    });
  };
  // Phần xữ lý cập nhật và nhận value của variant color
  const updateColor = (variantIndex, colorIndex, key, value) => {
    const updateColor = [...product.variants];
    updateColor[variantIndex].colors[colorIndex][key] = value;
    setProduct({
      ...product,
      variants: updateColor,
    });
  };
  // Phần thay đổi tab trên trang mặc định là general
  const [tab, setTab] = useState("general");

  // Phần xữ lý lấy tất cả các thông tin của sản phẩm
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("DỮ LIỆU SẢN PHẨM:", product);
  };

  return (
    <div>
      <h1>Trang thêm sản phẩm</h1>
      <div className="tab-button">
        <button onClick={() => setTab("general")}>
          <b>Thông tin chung</b>
        </button>
        <button onClick={() => setTab("detail")}>
          <b>Thông tin chi tiết</b>
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {/* thay đổi tab general trên trang add product */}
        {tab === "general" && (
          <GeneralInfo
            product={product}
            filteredBrands={filteredBrands}
            setProduct={setProduct}
            categories={CATEGORY_FIELDS}
            handleChangeCategory={handleChangeCategory}
          />
        )}
        {/* thay đổi tab detail trên trang add product */}
        {tab === "detail" && (
          <div className="detail-product">
            <DetailProduct
              product={product}
              setProduct={setProduct}
              detailFields={detailFields}
            />
          </div>
        )}
        <div className="variant-product">
          <h3>Thêm biến thể sản phẩm</h3>
          <button onClick={addVariant} type="button">
            Thêm biến thể
          </button>
          {product.variants.map((variant, vIndex) => (
            <div key={vIndex} className="variant-box">
              <div className="flex-row">
                <b>Biến thể số {vIndex + 1}</b>
                <button type="button" onClick={() => removeVariant(vIndex)}>
                  Xóa biến thể
                </button>
              </div>
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
                <div className="" key={cIndex}>
                  <h3>Màu sắc số {cIndex + 1}</h3>
                  <div className="flex-row">
                    <div className="form-groub">
                      <div className="flex-row">
                        <label>Tên màu sắc</label>
                        <button
                          type="button"
                          onClick={() => removeColor(vIndex, cIndex)}
                        >
                          Xóa
                        </button>
                      </div>
                      <input
                        value={color.color_name}
                        onChange={(e) =>
                          updateColor(
                            vIndex,
                            cIndex,
                            "color_name",
                            e.target.value
                          )
                        }
                      ></input>
                    </div>
                    <div className="form-groub">
                      <label>Mã SKU</label>
                      <input
                        value={color.color_sku}
                        onChange={(e) =>
                          updateColor(
                            vIndex,
                            cIndex,
                            "color_sku",
                            e.target.value
                          )
                        }
                      ></input>
                    </div>
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
