import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

const AddNewSeri = () => {
  const [category, setCategory] = useState([]);
  const [categoryBrand, setCategoryBrand] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const [seri, setSeri] = useState([
    {
      nameSeri: "",
    },
  ]);

  const addSeries = (e) => {
    setSeri((prev) => [
      ...prev,
      {
        nameSeri: "",
      },
    ]);
  };
  useEffect(() => {
    getCategory();
    getCategoryBrand();
  }, []);
  const getCategory = async () => {
    const res = await axios.get("http://localhost:8080/api/categories");
    setCategory(res.data);
  };
  const getCategoryBrand = async () => {
    const res = await axios.get("http://localhost:8080/api/category-brand");
    setCategoryBrand(res.data);
  };
  const filterBrand = useMemo(() => {
    if (!selectedCategory) return [];
    return categoryBrand.filter(
      (item) => item.category.idCategory === Number(selectedCategory),
    );
  }, [selectedCategory, categoryBrand]);
  const hanldeChangeSeri = (index, value) => {
    setSeri((prev) =>
      prev.map((s, i) => (i === index ? { ...s, nameSeri: value } : s)),
    );
  };

  const removeSeri = (seriIndex) => {
    if (seri.length === 1) {
      alert("Phải có ít nhất 1 seri");
      return;
    }
    const newListSeri = seri.filter((_, index) => index !== seriIndex);
    setSeri(newListSeri);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCategory || !selectedBrand) {
      alert("Vui lòng chọn loại sản phẩm và thương hiệu");
      return;
    }

    if (seri.length === 0) {
      alert("Phải có ít nhất 1 seri");
      return;
    }
    const payload = seri.map((item) => ({
      category_id: Number(selectedCategory),
      brand_id: Number(selectedBrand),
      name_seri: item.nameSeri.trim(),
    }));

    try {
      await axios.post("http://localhost:8080/api/seri", payload);
      alert("Lưu seri thành công");
    } catch (error) {
      console.error(error.response?.data);
      alert(error.response?.data || "Có lỗi xảy ra");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-groub">
          <label>Loại sản phẩm</label>
          <select
            value={selectedCategory}
            onChange={(e) => {
              const newCategory = e.target.value;
              setSelectedCategory(newCategory);
            }}
          >
            <option value="">== Chọn loại sản phẩm ==</option>
            {category.map((item, index) => (
              <option value={item.idCategory} key={index}>
                {item.categoryName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-groub">
          <label>Thương hiệu sản phẩm</label>
          <select
            value={selectedBrand}
            onChange={(e) => {
              const newBrand = e.target.value;
              setSelectedBrand(newBrand);
            }}
          >
            <option value="">== Chọn thương hiệu ==</option>
            {filterBrand.map((item, index) => (
              <option key={index} value={item.brand.id}>
                {item.brand.name}
              </option>
            ))}
          </select>
        </div>
        <button onClick={addSeries} type="button">
          Thêm seri{" "}
        </button>
        {seri.map((item, index) => (
          <div className="form-groub" key={index}>
            <div className="flex-row">
              <label>Tên seri</label>
              <button type="button" onClick={(e) => removeSeri(index)}>
                Xóa dòng này
              </button>
            </div>

            <input
              value={item.nameSeri}
              onChange={(e) => hanldeChangeSeri(index, e.target.value)}
            />
          </div>
        ))}

        <button type="submit"> Lưu dữ liệu </button>
      </form>
    </div>
  );
};

export default AddNewSeri;
