import React, { useState } from "react";
import axios from "axios";
const AddNewBrand = () => {
  const [brands, setBrand] = useState([
    { name: "", slug_name: "", brand_image: null, preview: null },
  ]);
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
      { name: "", slug_name: "", image: null, preview: null }, // thêm brand mới
    ]);
  };
  const handleChangeBrand = (brandIndex, value) => {
    setBrand((prev) =>
      prev.map((b, i) =>
        i === brandIndex
          ? {
              ...b,
              name: value,
              slug_name: toSlug(value),
            }
          : b
      )
    );
  };

  const handleUploadImage = (bIndex, file) => {
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setBrand((prev) =>
      prev.map((b, i) =>
        i === bIndex
          ? {
              ...b,
              brand_image: file,
              preview: previewUrl,
            }
          : b
      )
    );
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
  };
  return (
    <div>
      <button onClick={addBrand}>Thêm Thương hiệu mới</button>
      <form onSubmit={handleSubmit}>
        {brands.map((brand, bIndex) => (
          <div key={bIndex} className="brand-item">
            <div className="flex-row">
              <h3>Thương hiệu {bIndex + 1}</h3>
              <button type="button" onClick={() => removeBrand(bIndex)}>
                Xóa
              </button>
            </div>
            <div className="brand-content">
              <div className="brand-left">
                <div className="form-groub">
                  <label>Tên thương hiệu</label>
                  <input
                    value={brand.name}
                    onChange={(e) => handleChangeBrand(bIndex, e.target.value)}
                  />
                </div>
                <div className="form-groub">
                  <label>Thương hiện slug</label>
                  <input
                    value={brand.slug_name}
                    onChange={(e) => handleChangeBrand(bIndex, e.target.value)}
                  />
                </div>
              </div>
              <div className="brand-right">
                <label>Hình ảnh thương hiệu</label>
                {brand.preview && (
                  <div className="preview">
                    <img src={brand.preview} alt="Preview" />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleUploadImage(bIndex, e.target.files[0])}
                />
              </div>
            </div>
          </div>
        ))}
        <button type="submit">Lưu thương hiệu</button>
      </form>
    </div>
  );
};

export default AddNewBrand;
