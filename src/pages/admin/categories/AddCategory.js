import axios from "axios";
import React, { useState } from "react";

const AddCategory = () => {
  const [categories, setCategory] = useState([
    { categoryName: "", categorySlug: "" },
  ]);
  const addCategories = () => {
    setCategory([...categories, { categoryName: "", categorySlug: "" }]);
  };
  const toSlug = (str) => {
    return str
      .toLowerCase()
      .normalize("NFD") // bỏ dấu
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };
  const handleChangeCategory = (cateIndex, value) => {
    const newCategory = [...categories];
    newCategory[cateIndex].categoryName = value;
    newCategory[cateIndex].categorySlug = toSlug(value);
    setCategory(newCategory);
  };
  const removeCategory = (cateIndex) => {
    const newCategory = categories.filter((_, index) => index !== cateIndex);
    setCategory(newCategory);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Dữ liệu từ form data category:", categories);
    try {
      await axios.post("http://localhost:8080/api/categories", categories);
      alert("Lưu thành công");
    } catch (error) {
      console.log(error);
      alert("Lỗi khi lưu");
    }
  };
  return (
    <div>
      AddCategory
      <div>
        <button type="button" onClick={addCategories}>
          Thêm Thương hiệu mới
        </button>
        <form onSubmit={handleSubmit}>
          {categories.map((cate, cateIndex) => (
            <div key={cateIndex}>
              <button type="button" onClick={() => removeCategory(cateIndex)}>
                Xóa
              </button>
              <div className="form-groub">
                <label>Tên Loại</label>
                <input
                  value={cate.categoryName}
                  onChange={(e) =>
                    handleChangeCategory(cateIndex, e.target.value)
                  }
                />
              </div>
              <div className="form-groub">
                <label>Slug</label>
                <input
                  value={cate.categorySlug}
                  onChange={(e) => {
                    const newCategory = [...categories];
                    newCategory[cateIndex].categorySlug = e.target.value;
                    setCategory(newCategory);
                  }}
                />
              </div>
            </div>
          ))}
          <button type="submit">Lưu</button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
