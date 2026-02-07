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
    // console.log(seri.nameSeri);

    axios
      .put(`http://localhost:8080/api/seri/${id}`, {
        nameSeri: seri.nameSeri,
      })
      .then(alert("Cập nhật thành công"))
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
          <labe>Tên Loại sản phẩm</labe>
          <h4>{seri.category.categoryName}</h4>
        </div>
        <div>
          <labe>Tên thương hiệu</labe>
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
