import axios from "axios";
import React, { useEffect, useState } from "react";

const GroupAttribute = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    loadGroup();
  }, []);

  const loadGroup = async () => {
    const res = await axios.get("http://localhost:8080/api/attribute-group");
    setGroups(res.data);
  };
  return (
    <div>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Category ID</th>
            <th>Tên nhóm thuộc tính</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((item) =>
            item.groups_name.map((group, idx) => (
              <tr key={`${item.category_id}-${idx}`}>
                <td>{item.category_id}</td>
                <td>{group}</td>
              </tr>
            )),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GroupAttribute;
