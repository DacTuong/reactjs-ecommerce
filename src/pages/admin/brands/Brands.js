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

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa thương hiệu này không")) return;
    try {
      await axios.delete(`http://localhost:8080/api/brand/${id}`);
      alert("Đã xóa thành công");
      setBrands((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      console.error(err);
      alert("Xoá thất bại");
    }
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
            <th>Hoạt động</th>
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
                    height="60"
                    style={{ objectFit: "cover" }}
                  />
                )}
              </td>
              <td>{b.name}</td>
              <td>{b.slug}</td>
              <td>
                <Link to={`/admin/edit-brand/${b.id}`}>Sửa</Link>/
                <button onClick={() => handleDelete(b.id)}>
                  Xóa {b.id_brand}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Brands;
