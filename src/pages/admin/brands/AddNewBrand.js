import React, { useState } from "react";
import axios from "axios";
const AddNewBrand = () => {
  const [brands, setBrand] = useState([{ name: "", slug_name: "" }]);
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
  const addBrand = () => {
    setBrand([
      ...brands,
      { name: "" }, // thêm brand mới
    ]);
  };
  const handleChangeBrand = (brandIndex, value) => {
    const newBrand = [...brands];
    newBrand[brandIndex].name = value;
    newBrand[brandIndex].slug_name = toSlug(value);
    setBrand(newBrand);
  };
  const removeBrand = (bIndex) => {
    if (brands.length === 1) {
      alert("Phải có ít nhất 1 biến thể sản phẩm");
      return;
    }
    const newbrand = brands.filter((_, index) => index !== bIndex);
    setBrand(newbrand);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/brand",
        brands, // gửi trực tiếp mảng
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Lưu thương hiệu thành công");
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("Lỗi khi lưu thương hiệu");
    }
  };
  return (
    <div>
      <button onClick={addBrand}>Thêm Thương hiệu mới</button>
      <form onSubmit={handleSubmit}>
        {brands.map((brand, bIndex) => (
          <div>
            <div className="form-groub" key={bIndex}>
              <div className="flex-row">
                <label>Tên thương hiệu</label>
                <button type="button" onClick={() => removeBrand(bIndex)}>
                  Xóa
                </button>
              </div>
              <input
                value={brand.name}
                onChange={(e) => handleChangeBrand(bIndex, e.target.value)}
              />
            </div>

            <div className="form-groub" key={bIndex}>
              <label>Thương hiện slug</label>

              <input
                value={brand.slug_name}
                onChange={(e) => handleChangeBrand(bIndex, e.target.value)}
              />
            </div>
          </div>
        ))}
        <button type="submit">Lưu thương hiệu</button>
      </form>
    </div>
  );
};

export default AddNewBrand;
