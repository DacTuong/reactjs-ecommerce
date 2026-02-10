import axios from "axios";
import React, { useEffect, useState } from "react";

const AddGroupAttribute = () => {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([
    {
      category_id: "",
      groups_name: [""],
    },
  ]);
  const handleAddCategory = () => {
    setData([
      ...data,
      {
        category_id: "",
        groups_name: [""],
      },
    ]);
  };

  const handleAddGroupName = (categoryIdx) => {
    setData((prev) =>
      prev.map((item, cIdx) =>
        cIdx === categoryIdx
          ? { ...item, groups_name: [...item.groups_name, ""] }
          : item,
      ),
    );
  };

  const handelUpdateCategory = (index, value) => {
    const newData = [...data];
    newData[index].category_id = value;
    setData(newData);
  };

  const handleChangeGroupName = (cIdx, gIdx, value) => {
    setData((prev) =>
      prev.map((item, idx) =>
        idx === cIdx
          ? {
              ...item,
              groups_name: item.groups_name.map((g, i) =>
                i === gIdx ? value : g,
              ),
            }
          : item,
      ),
    );
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handelSendData = async (e) => {
    e.preventDefault();
    // console.log(data);
    try {
      const res = await axios.post(
        "http://localhost:8080/api/attribute-group",
        data,
      );

      alert(res.data);
    } catch (err) {
      console.log(err);
      alert("Lỗi khi lưu");
    }
  };
  return (
    <div>
      <form onSubmit={handelSendData}>
        <button type="button" onClick={handleAddCategory}>
          Thêm category
        </button>
        {data.map((item, index) => (
          <div key={index}>
            <b>Nhóm {index + 1}</b>
            <div>
              <label>Chọn loại sản phẩm</label>
              <select
                className="form-groub"
                value={item.category_id}
                onChange={(e) => handelUpdateCategory(index, e.target.value)}
              >
                <option value="">Chọn loại sản phẩm</option>
                {categories.map((item, index) => (
                  <option value={item.idCategory} key={index}>
                    {item.categoryName}
                  </option>
                ))}
              </select>
            </div>

            <button type="button" onClick={() => handleAddGroupName(index)}>
              Thêm tên nhóm thuộc tính
            </button>
            {item.groups_name.map((groupname, gIndex) => (
              <div key={gIndex}>
                <label>Tên nhóm</label>
                <input
                  value={groupname}
                  onChange={(e) =>
                    handleChangeGroupName(index, gIndex, e.target.value)
                  }
                />
              </div>
            ))}
          </div>
        ))}

        <button type="submit">Lưu dữ liệu</button>
      </form>
    </div>
  );
};

export default AddGroupAttribute;
