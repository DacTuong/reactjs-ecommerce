import axios from "axios";
import React, { useEffect, useState } from "react";

const Attributes = () => {
  const [attributes, setAttributes] = useState([]);
  useEffect(() => {
    getAttribute();
  }, []);
  const getAttribute = async () => {
    const res = await axios.get("http://localhost:8080/api/attributes");
    setAttributes(res.data);
  };
  return (
    <div>
      <div>Danh sách thuộc tính</div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên loại sản phẩm</th>
            <th>Tên Nhóm thuộc tính</th>
            <th>Tên Thuộc tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {attributes.map((category) =>
            category.group_attributes.map((group) =>
              group.attributes.map((attr, index) => (
                <tr key={attr.id}>
                  <td>{index + 1}</td>
                  <td>{attr.category_name}</td>
                  <td>{attr.name_group}</td>
                  <td>{attr.name_attribute}</td>
                  <td>
                    <button>Sửa</button>
                    <button>Xoá</button>
                  </td>
                </tr>
              )),
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Attributes;
