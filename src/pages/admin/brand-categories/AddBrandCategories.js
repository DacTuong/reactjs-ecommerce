import React, { useState } from "react";
const brands = [
  { id: 1, brand_name: "samsung" },
  { id: 2, brand_name: "xiaomi" },
  { id: 3, brand_name: "samssung" },
  { id: 4, brand_name: "xiaomii" },
  { id: 5, brand_name: "Spple" },
  { id: 6, brand_name: "SPSP" },
  { id: 7, brand_name: "Spple" },
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

const AddBrandCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([""]);
  const AddBrand = () => {
    setSelectedBrands([...selectedBrands, ""]);
  };
  const handleChangeBrand = (index, value) => {
    const newBrand = [...selectedBrands];
    newBrand[index] = value;
    setSelectedBrands(newBrand);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      category_id: selectedCategory,
      brand_ids: selectedBrands, // 👈 MẢNG
    };

    console.log(data);
  };
  return (
    <div>
      AddBrandCategories
      <form onSubmit={handleSubmit}>
        <div className="form-groub">
          <label>Loại sản phẩm</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {CATEGORY_FIELDS.map((category) => (
              <option key={category.id} value={category.value}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button onClick={AddBrand} type="button">
          Thêm thương hiệu
        </button>
        {selectedBrands.map((brandValue, index) => (
          <div className="form-group" key={index}>
            <label>Thương hiệu</label>
            <select
              value={brandValue}
              onChange={(e) => handleChangeBrand(index, e.target.value)}
            >
              <option value="">-- Chọn thương hiệu --</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.brand_name}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBrandCategories;
