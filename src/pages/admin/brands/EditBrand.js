import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditBrand = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/brand/${id}`)
      .then((res) => {
        setBrand(res.data);
      })
      .catch((err) => {
        console.error("Lỗi lấy brand:", err);
      });
  }, [id]);

  if (!brand) return <p>Đang tải dữ liệu...</p>;
  return (
    <div>
      <h2>Cập nhật thương hiệu</h2>

      <input
        type="text"
        value={brand.name}
        onChange={(e) => setBrand({ ...brand, name: e.target.value })}
      />

      <input
        type="text"
        value={brand.slug_name}
        onChange={(e) => setBrand({ ...brand, slug_name: e.target.value })}
      />
    </div>
  );
};

export default EditBrand;
