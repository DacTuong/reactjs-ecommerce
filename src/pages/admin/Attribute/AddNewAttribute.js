import axios from "axios";
import React, { useEffect, useState } from "react";

const AddNewAttribute = () => {
  const [categories, setCategories] = useState([]);
  const [groups, setGroups] = useState([]);

  const [selectedCategory, setSeletedCategory] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (!selectedCategory) {
      setGroups([]);
      return;
    }
    getGroupsByCategoryId(Number(selectedCategory));
  }, [selectedCategory]);

  const loadCategories = async () => {
    const res = await axios.get("http://localhost:8080/api/categories");
    setCategories(res.data);
  };

  const [groupAttributes, setGroupAttributes] = useState([
    {
      id_group: "",
      attributes: [
        {
          name_attribute: "",
          data_type: "",
        },
      ],
    },
  ]);

  const addNewGroup = () => {
    setGroupAttributes([
      ...groupAttributes,
      {
        id_group: "",
        attributes: [
          {
            name_attribute: "",
            data_type: "",
          },
        ],
      },
    ]);
  };

  const AddNewAttribute = (groupAttributeIdx) => {
    setGroupAttributes((prev) =>
      prev.map((item, gAIdx) =>
        gAIdx === groupAttributeIdx
          ? {
              ...item,
              attributes: [
                ...item.attributes,
                {
                  name_attribute: "",
                  data_type: "",
                },
              ],
            }
          : item,
      ),
    );
  };
  const getGroupsByCategoryId = async (categoryId) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/attribute-group/by-category?categoryId=${categoryId}`,
      );
      setGroups(res.data);
    } catch (error) {
      console.error("Lỗi khi load group:", error);
    }
  };
  const handleOnchangeGroupId = (index, value) => {
    setGroupAttributes((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, id_group: value } : item,
      ),
    );
  };
  const hanldeChangeAttribute = (groupAttributeIdx, attributeIdx, value) => {
    setGroupAttributes((prev) =>
      prev.map((gItem, gaIdx) =>
        gaIdx === groupAttributeIdx
          ? {
              ...gItem,
              attributes: gItem.attributes.map((a, i) =>
                i === attributeIdx ? { ...a, name_attribute: value } : a,
              ),
            }
          : gItem,
      ),
    );
  };

  const handleChangeDataType = (groupAttributeIdx, attributeIdx, value) => {
    setGroupAttributes((prev) =>
      prev.map((gItem, gIdx) =>
        gIdx === groupAttributeIdx
          ? {
              ...gItem,
              attributes: gItem.attributes.map((d, i) =>
                i === attributeIdx ? { ...d, data_type: value } : d,
              ),
            }
          : gItem,
      ),
    );
  };

  const removeAttribute = (groupAttributeIdx, attributeIdx) => {
    if (groupAttributes.length === 1) {
      alert("Phải có ít nhất 1 thuộc tính");
      return;
    }
    setGroupAttributes((prev) =>
      prev.map((groupItem, gAIdx) =>
        gAIdx === groupAttributeIdx
          ? {
              ...groupItem,
              attributes: groupItem.attributes.filter(
                (_, aIdx) => aIdx !== attributeIdx,
              ),
            }
          : groupItem,
      ),
    );
  };
  const filteredGroups = (curentIdx) => {
    if (!groups.length) return [];

    const selectedGroupIds = groupAttributes
      .map((itemAttribute, idx) =>
        idx !== curentIdx ? Number(itemAttribute.id_group) : null,
      )
      .filter(Boolean);

    return groups.filter(
      (group) => !selectedGroupIds.includes(Number(group.id_group)),
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      id_category: selectedCategory,
      group_attributes: groupAttributes,
    };
    try {
      const res = await axios.post(
        "http://localhost:8080/api/attributes",
        payload,
      );

      alert(res.data);
    } catch (err) {
      console.log(err);
      alert("Lỗi khi lưu");
    }

    setSeletedCategory("");
    setGroupAttributes([
      {
        id_group: "",
        attributes: [
          {
            name_attribute: "",
            data_type: "",
          },
        ],
      },
    ]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-groub">
          <label>Loại sản phẩm</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSeletedCategory(e.target.value)}
          >
            <option>==Chọn loại sản phẩm==</option>
            {categories.map((item) => (
              <option value={item.idCategory} key={item.idCategory}>
                {item.categoryName}
              </option>
            ))}
          </select>
        </div>

        <button type="button" onClick={addNewGroup}>
          Thêm nhóm attribute
        </button>
        {groupAttributes.map((groupAtribute, gAIdx) => (
          <div key={gAIdx} className="border-form">
            <div className="form-groub">
              <label>Tên nhóm</label>
              <select
                value={groupAtribute.id_group}
                onChange={(e) => handleOnchangeGroupId(gAIdx, e.target.value)}
              >
                <option value="">==Chọn nhóm==</option>

                {filteredGroups(gAIdx).map((group) => (
                  <option key={group.id_group} value={group.id_group}>
                    {group.name_group}
                  </option>
                ))}
              </select>
            </div>

            <button type="button" onClick={() => AddNewAttribute(gAIdx)}>
              Thêm attribute
            </button>
            {groupAtribute.attributes.map((attribute, attributeIdx) => (
              <div key={attributeIdx} className="border-form">
                <div className="section-header">
                  <h5>Thuộc tính {attributeIdx + 1}</h5>
                  <button
                    type="button"
                    onClick={() => removeAttribute(gAIdx, attributeIdx)}
                  >
                    Xóa
                  </button>
                </div>
                <div className="flex-row">
                  <div className="form-groub">
                    <label>Tên attribute</label>
                    <input
                      value={attribute.name_attribute}
                      placeholder="Nhập tên attribute"
                      onChange={(e) =>
                        hanldeChangeAttribute(
                          gAIdx,
                          attributeIdx,
                          e.target.value,
                        )
                      }
                    />
                  </div>
                  <div className="form-groub">
                    <label>Chọn loại dữ liệu</label>
                    <select
                      onChange={(e) =>
                        handleChangeDataType(
                          gAIdx,
                          attributeIdx,
                          e.target.value,
                        )
                      }
                    >
                      <option value="">==Chọn kiểu dữ liệu==</option>
                      <option value="text">Text</option>
                      <option value="number">Number</option>
                      <option value="boolean">Boolean</option>
                      <option value="multiple">Multiple</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

        <button type="submit">Lưu dữ liệu</button>
      </form>
    </div>
  );
};

export default AddNewAttribute;
