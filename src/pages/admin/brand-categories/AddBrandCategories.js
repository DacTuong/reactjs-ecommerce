import axios from "axios";
import React, { useEffect, useState } from "react";

const AddBrandCategories = () => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([""]);
  useEffect(() => {
    loadBrands();
    loadCategory();
  }, []);

  const loadBrands = async () => {
    const res = await axios.get("http://localhost:8080/api/brand");
    setBrands(res.data);
  };

  const loadCategory = async () => {
    const res = await axios.get("http://localhost:8080/api/categories");
    setCategories(res.data);
  };
  const AddBrand = () => {
    setSelectedBrands([...selectedBrands, ""]);
  };
  const handleChangeBrand = (bIndex, value) => {
    const newBrand = [...selectedBrands];
    newBrand[bIndex] = value;
    setSelectedBrands(newBrand);
  };

  const removeCategoryBrand = (bIndex) => {
    if (selectedBrands.length === 1) {
      alert("Phải có ít nhất một tên thương hiệu");
      return;
    }
    const newBrand = selectedBrands.filter((_, index) => index !== bIndex);
    setSelectedBrands(newBrand);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      category_id: selectedCategory,
      brand_ids: selectedBrands, // 👈 MẢNG
    };

    try {
      await axios.post("http://localhost:8080/api/category-brand", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Lưu thành công");
    } catch (error) {
      console.log(error);
      alert("Lỗi khi lưu");
    }
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
            <option value="">-- Chọn loại sản phẩm --</option>
            {categories.map((category) => (
              <option key={category.idCategory} value={category.idCategory}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>
        <button onClick={AddBrand} type="button">
          Thêm thương hiệu
        </button>
        {selectedBrands.map((brandValue, bIndex) => (
          <div className="form-group" key={bIndex}>
            <div className="flex-row">
              <label>Thương hiệu</label>
              <button type="button" onClick={() => removeCategoryBrand(bIndex)}>
                Xóa
              </button>
            </div>
            <select
              value={brandValue}
              onChange={(e) => handleChangeBrand(bIndex, e.target.value)}
            >
              <option value="">-- Chọn thương hiệu --</option>

              {brands
                .filter(
                  (brand) =>
                    !selectedBrands.includes(brand.id.toString()) ||
                    brand.id.toString() === brandValue,
                )
                .map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
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
