import axios from "axios";
import React, { useEffect, useState } from "react";

const AssignBrandToCategory = () => {
  const [categoryBrand, setCategoryBrand] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const res = await axios.get("http://localhost:8080/api/category-brand");
    setCategoryBrand(res.data);
  };
  return (
    <div>
      AssignBrandToCategory
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên loại</th>
            <th>Tên thương hiệu</th>
          </tr>
        </thead>
        <tbody>
          {categoryBrand.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.category.categoryName}</td>
              <td>{item.brand.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignBrandToCategory;
