import React, { useState } from "react";

const AddCategory = () => {
  const [categories, setCategory] = useState([{ name_category: "" }]);
  const addCategories = () => {
    setCategory([...categories, { name_category: "" }]);
  };
  const handleChangeCategory = (cateIndex, value) => {
    const newCategory = [...categories];
    newCategory[cateIndex].name_category = value;
    setCategory(newCategory);
  };
  const removeCategory = (cateIndex) => {
    const newCategory = categories.filter((_, index) => index !== cateIndex);
    setCategory(newCategory);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu từ form data category:", categories);
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
            <div className="form-groub" key={cateIndex}>
              <div className="flex-row">
                <label>Tên thương hiệu</label>
                <button type="button" onClick={() => removeCategory(cateIndex)}>
                  Xóa
                </button>
              </div>

              <input
                value={cate.name}
                onChange={(e) =>
                  handleChangeCategory(cateIndex, e.target.value)
                }
              />
            </div>
          ))}
          <button type="submit">Lưu thương hiệu</button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
