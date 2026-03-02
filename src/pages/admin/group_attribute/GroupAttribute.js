import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GroupAttribute = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    loadGroup();
  }, []);

  const loadGroup = async () => {
    const res = await axios.get("http://localhost:8080/api/attribute-group");
    setGroups(res.data);
  };

  const flatData = groups.flatMap((group) =>
    group.groups_name.map((item) => ({
      ...item,
      category_name: group.category_name,
    })),
  );
  return (
    <div>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>#</th>
            <th>Loại sản phẩm</th>
            <th>Tên nhóm thuộc tính</th>
            <th>Hoạt động</th>
          </tr>
        </thead>
        <tbody>
          {flatData.map((item, index) => (
            <tr key={item.id_group}>
              <td>{index + 1}</td>
              <td>{item.category_name}</td>
              <td>{item.name_group}</td>
              <td>
                <button>Sửa</button> | <button>Xóa</button> |
                <Link
                  to={`/admin/group-attributes/${item.id_group}/attributes`}
                >
                  Quản lý thuộc tính
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupAttribute;
