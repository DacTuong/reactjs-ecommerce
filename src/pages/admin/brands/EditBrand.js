import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditBrand = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState(null);
  const [image, setImage] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/brand/${id}`)
      .then((res) => {
        setBrand(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Lỗi lấy brand:", err);
      });
  }, [id]);
  const handlUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "brand",
      new Blob([JSON.stringify(brand)], { type: "application/json" })
    );
    if (image) {
      formData.append("image", image);
    }
    axios
      .put(`http://localhost:8080/api/brand/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => alert("Cập nhật thành công"))
      .catch((err) => console.error(err));
  };

  if (!brand) return <p>Đang tải dữ liệu...</p>;
  return (
    <div>
      <h2>Cập nhật thương hiệu</h2>

      <form onSubmit={handlUpdate}>
        <div className="brand-body">
          <div className="brand-left">
            <div className="form-groub">
              <label>Tên thương hiệu</label>
              <input
                type="text"
                value={brand.name}
                onChange={(e) => setBrand({ ...brand, name: e.target.value })}
                required
              />
            </div>

            <div className="form-groub">
              <label>Slug</label>
              <input
                type="text"
                value={brand.slug}
                onChange={(e) => setBrand({ ...brand, slug: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="brand-right">
            <label>Hình ảnh</label>

            <div className="preview">
              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : `http://localhost:8080/uploads/brands/${brand.image}`
                }
                alt=""
              />
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>

        <button type="submit">Cập nhật thương hiệu</button>
      </form>
    </div>
  );
};

export default EditBrand;
