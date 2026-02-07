import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditSeri = () => {
  const [seri, setSeri] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/seri/${id}`)
      .then((res) => {
        setSeri(res.data);
      })
      .catch((err) => {
        console.error("Lỗi lấy seri:", err);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/seri/${id}`, {
        name_seri: seri.nameSeri,
      })
      .then((res) => alert(res.data))
      .catch((err) => console.error(err));
  };
  if (!seri) return <p>Đang tải dữ liệu...</p>;
  return (
    <div>
      <header className="flex justify-between">
        <h1>Chỉnh sửa Series</h1>
        <div className="actions">
          <button className="btn-secondary">Hủy</button>
          <button className="btn-primary">Cập nhật ngay</button>
        </div>
      </header>

      <div>
        <div>
          <label>Tên Loại sản phẩm</label>
          <h4>{seri.category.categoryName}</h4>
        </div>
        <div>
          <label>Tên thương hiệu</label>
          <h4>{seri.brand.name}</h4>
        </div>

        <form onSubmit={handleUpdate}>
          <div>
            <label>Tên seri</label>
            <input
              value={seri.nameSeri}
              onChange={(e) => setSeri({ ...seri, nameSeri: e.target.value })}
              required
            />
          </div>
          <button type="submit">Cập nhật</button>
        </form>
      </div>
    </div>
  );
};

export default EditSeri;
