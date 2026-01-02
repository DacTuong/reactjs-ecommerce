import React, { useEffect, useState } from "react";
import DetailProduct from "../../../components/admin/products/DetailProduct";
import GeneralInfo from "../../../components/admin/products/GeneralInfo";
import VariantProduct from "../../../components/admin/products/VariantProduct";

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
    product_name_slug: "",
    details: {},
    variants: [
      {
        name_variant: "",
        colors: [
          {
            color_name: "",
            color_sku: "",
            galleries: [
              {
                path_image: "",
                is_main: "",
              },
            ],
            isAuto: true,
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
    setProduct((prev) => ({
      ...prev,
      variants: [
        ...prev.variants,
        {
          name_variant: "",
          colors: [
            {
              color_name: "",
              color_sku: prev.product_sku || "",
              isAuto: true,
            },
          ],
        },
      ],
    }));
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
          color_sku: product.product_sku || "",
          isAuto: true,
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
    const variant = product.variants[variantIndex];
    if (variant.colors.length === 1) {
      alert("Mỗi biến thể phải có ít nhất 1 màu");
      return;
    }
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

  // Hàm updateColor(varianIndex, colorIndex, key, value):

  //   Cập nhật product dựa trên state trước đó (prev)

  //   Tạo product mới:
  //     - Giữ nguyên toàn bộ dữ liệu cũ của product
  //     - Cập nhật lại danh sách variants

  //   Với mỗi variant trong variants:
  //     Nếu index của variant KHÔNG trùng varianIndex:
  //       → Giữ nguyên variant đó
  //     Ngược lại (đúng variant cần sửa):
  //       - Giữ nguyên dữ liệu cũ của variant
  //       - Cập nhật lại danh sách colors

  //       Với mỗi color trong colors:
  //         Nếu index của color KHÔNG trùng colorIndex:
  //           → Giữ nguyên color đó
  //         Ngược lại (đúng color cần sửa):
  //           - Giữ nguyên dữ liệu cũ của color
  //           - Cập nhật thuộc tính [key] = value
  //           - Nếu key là "color_sku":
  //               → đặt isAuto = false

  const updateColor = (varianIndex, colorIndex, key, value) => {
    setProduct((prev) => ({
      ...prev,
      variants: prev.variants.map((variant, vIdx) => {
        if (vIdx !== varianIndex) return variant;
        return {
          ...variant,
          colors: variant.colors.map((color, cIdx) => {
            if (cIdx !== colorIndex) return color;
            return {
              ...color,
              [key]: value,
              ...(key === "color_sku" && { isAuto: false }),
            };
          }),
        };
      }),
    }));
  };
  // Phần thay đổi tab trên trang mặc định là general
  const [tab, setTab] = useState("general");

  // xữ lý phần tự động điền sku cho color khi nhập sku product
  // cần học và tập xữ lý lại
  // HÀM handleChangeProductSku(sku):

  // Cập nhật state product bằng setProduct

  // Lấy product hiện tại (prev)

  // Tạo product mới:
  //   - Giữ nguyên tất cả thuộc tính cũ
  //   - Gán product_sku = sku mới

  //   - Duyệt qua toàn bộ danh sách variants
  //       Với mỗi variant:
  //         - Giữ nguyên thông tin variant
  //         - Duyệt qua toàn bộ colors của variant
  //             Với mỗi color:
  //               - NẾU color.isAuto == true
  //                   → tạo color mới
  //                      + giữ nguyên các field cũ
  //                      + gán color_sku = sku
  //               - NGƯỢC LẠI
  //                   → giữ nguyên color

  // Trả về product mới
  const handleChangeProductSku = (sku) => {
    setProduct((prev) => ({
      ...prev,
      product_sku: sku,
      variants: prev.variants.map((variant) => ({
        ...variant,
        colors: variant.colors.map((color) =>
          color.isAuto ? { ...color, color_sku: sku } : color
        ),
      })),
    }));
  };

  // Phần xữ lý name slug
  const toSlug = (str) => {
    return str
      .toLowerCase()
      .normalize("NFD") // bỏ dấu tiếng Việt
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };
  // cần làm lại
  const handleChangeProductName = (value) => {
    const slug = toSlug(value);

    setProduct((prev) => ({
      ...prev,
      product_name: value,
      product_name_slug: slug,
    }));
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
        <button onClick={() => setTab("general")}>
          <b>Thông tin chung</b>
        </button>
        <button onClick={() => setTab("detail")}>
          <b>Thông tin chi tiết</b>
        </button>
        <button onClick={() => setTab("variant")}>
          <b>Biến thể sản phẩm</b>
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
            onChangeProductSku={handleChangeProductSku}
            onChangeProductName={handleChangeProductName}
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
        {tab === "variant" && (
          <div>
            <VariantProduct
              variants={product.variants}
              addVariant={addVariant}
              removeVariant={removeVariant}
              updateVariant={updateVariant}
              addColor={addColor}
              removeColor={removeColor}
              updateColor={updateColor}
            />
          </div>
        )}
        <div>
          <button type="submit">Lưu sản phẩm</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
