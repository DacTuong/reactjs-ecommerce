import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    loadBrands();
  }, []);

  const loadBrands = async () => {
    const res = await axios.get("http://localhost:8080/api/brand");
    setBrands(res.data);
  };

  return (
    <div>
      <Link to="/admin/add-brand">➕ Thêm thương hiệu mới</Link>

      <h3>Danh sách thương hiệu</h3>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>#</th>
            <th>Hình ảnh</th>
            <th>Tên</th>
            <th>Slug</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((b, i) => (
            <tr key={b.id}>
              <td>{i + 1}</td>
              <td>
                {b.image && (
                  <img
                    src={`http://localhost:8080/uploads/brands/${b.image}`}
                    width="60"
                    height="60"
                    style={{ objectFit: "cover" }}
                  />
                )}
              </td>
              <td>{b.name}</td>
              <td>{b.slug}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Brands;
