import React, { useEffect, useState } from "react";
import axios from "axios";

const AddNewBrand = () => {
  const [brands, setBrands] = useState([
    { name: "", slug: "", brand_image: null, preview: null },
  ]);

  /* =======================
      HÀM TẠO SLUG
  ======================== */
  const toSlug = (str) => {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };

  /* =======================
      THÊM BRAND
  ======================== */
  const addBrand = () => {
    setBrands([
      ...brands,
      { name: "", slug: "", brand_image: null, preview: null },
    ]);
  };

  /* =======================
      XÓA BRAND
  ======================== */
  const removeBrand = (index) => {
    if (brands.length === 1) {
      alert("Phải có ít nhất 1 thương hiệu");
      return;
    }

    const brand = brands[index];
    if (brand.preview) {
      URL.revokeObjectURL(brand.preview);
    }

    setBrands(brands.filter((_, i) => i !== index));
  };

  /* =======================
      ĐỔI NAME → AUTO SLUG
  ======================== */
  const handleChangeName = (index, value) => {
    setBrands((prev) =>
      prev.map((b, i) =>
        i === index
          ? {
              ...b,
              name: value,
              slug: toSlug(value),
            }
          : b
      )
    );
  };

  /* =======================
      ĐỔI SLUG (CHỈ SLUG)
  ======================== */
  const handleChangeSlug = (index, value) => {
    setBrands((prev) =>
      prev.map((b, i) =>
        i === index
          ? {
              ...b,
              slug: toSlug(value),
            }
          : b
      )
    );
  };

  /* =======================
      UPLOAD ẢNH + PREVIEW
  ======================== */
  const handleUploadImage = (index, file) => {
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);

    setBrands((prev) =>
      prev.map((b, i) =>
        i === index
          ? {
              ...b,
              brand_image: file,
              preview: previewUrl,
            }
          : b
      )
    );
  };

  /* =======================
      SUBMIT FORM
  ======================== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // JSON brands
    formData.append(
      "brands",
      new Blob(
        [
          JSON.stringify(
            brands.map((b) => ({
              name: b.name,
              slug: b.slug,
            }))
          ),
        ],
        { type: "application/json" }
      )
    );

    // Images
    brands.forEach((b) => {
      if (b.brand_image) {
        formData.append("images", b.brand_image);
      }
    });

    try {
      await axios.post("http://localhost:8080/api/brand", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Lưu thương hiệu thành công");

      // reset form
      setBrands([{ name: "", slug: "", brand_image: null, preview: null }]);
    } catch (error) {
      console.error(error);
      alert("Lỗi khi lưu thương hiệu");
    }
  };

  /* =======================
      CLEAN PREVIEW KHI UNMOUNT
  ======================== */
  useEffect(() => {
    return () => {
      brands.forEach((b) => {
        if (b.preview) URL.revokeObjectURL(b.preview);
      });
    };
  }, [brands]);

  return (
    <div className="brand-wrapper">
      <button type="button" onClick={addBrand}>
        + Thêm thương hiệu
      </button>

      <form onSubmit={handleSubmit}>
        {brands.map((brand, index) => (
          <div className="brand-item" key={index}>
            <div className="brand-header">
              <h3>Thương hiệu {index + 1}</h3>
              <button type="button" onClick={() => removeBrand(index)}>
                Xóa
              </button>
            </div>

            <div className="brand-body">
              <div className="brand-left">
                <div className="form-groub">
                  <label>Tên thương hiệu</label>
                  <input
                    type="text"
                    value={brand.name}
                    onChange={(e) => handleChangeName(index, e.target.value)}
                    required
                  />
                </div>

                <div className="form-groub">
                  <label>Slug</label>
                  <input
                    type="text"
                    value={brand.slug}
                    onChange={(e) => handleChangeSlug(index, e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="brand-right">
                <label>Hình ảnh</label>

                {brand.preview && (
                  <div className="preview">
                    <img src={brand.preview} alt="preview" />
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleUploadImage(index, e.target.files[0])}
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
