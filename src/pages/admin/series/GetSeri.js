import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GetSeri = () => {
  const [seri, setSeri] = useState([]);
  useEffect(() => {
    getSeri();
  }, []);
  const getSeri = async () => {
    const res = await axios.get("http://localhost:8080/api/seri");
    setSeri(res.data);
  };

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>số thứ tự</th>
              <th>Tên loại hàng</th>
              <th>Thương hiệu</th>
              <th>Tên seri</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {seri.map((item, index) => (
              <tr>
                <td>{item.idSeri}</td>
                <td>{item.category.categoryName}</td>
                <td>{item.brand.name}</td>
                <td>{item.nameSeri}</td>

                <td>
                  <Link to={`/admin/seri/edit-seri/${item.idSeri}`}>Sửa</Link>/
                  <button>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetSeri;
