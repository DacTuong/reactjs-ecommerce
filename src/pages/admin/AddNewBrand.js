import React, { useState } from "react";

const AddNewBrand = () => {
  const [brands, setBrand] = useState([{ name: "" }]);
  const addBrand = () => {
    setBrand([
      ...brands,
      { name: "" }, // thêm brand mới
    ]);
  };
  const handleChangeCategory = (cateIndex, value) => {
    const newBrand = [...brands];
    newBrand[cateIndex].name = value;
    setBrand(newBrand);
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
            <label>Tên thương hiệu</label>
            <input
              value={brand.name}
              onChange={(e) => handleChangeCategory(bIndex, e.target.value)}
            />
          </div>
        ))}
        <button type="submit">Lưu thương hiệu</button>
      </form>
    </div>
  );
};

export default AddNewBrand;
