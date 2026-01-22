import axios from "axios";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>số thứ tự</th>
            <th>Tên loại hàng</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cate, index) => (
            <tr key={index}>
              <td>{cate.idCategory}</td>
              <td>{cate.categoryName}</td>
              <td>{cate.categorySlug}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
