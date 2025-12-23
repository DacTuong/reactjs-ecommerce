import React, { useState } from "react";

const AddNewBrand = () => {
  const [brands, setBrand] = useState([{ name: "" }]);
  const addBrand = () => {
    setBrand([
      ...brands,
      { name: "" }, // thêm brand mới
    ]);
  };
  const handleChangeBrand = (brandIndex, value) => {
    const newBrand = [...brands];
    newBrand[brandIndex].name = value;
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("DỮ LIỆU THƯƠNG HIỆU:", brands);
  };
  return (
    <div>
      <button onClick={addBrand}>Thêm Thương hiệu mới</button>
      <form onSubmit={handleSubmit}>
        {brands.map((brand, bIndex) => (
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
        ))}
        <button type="submit">Lưu thương hiệu</button>
      </form>
    </div>
  );
};

export default AddNewBrand;
