import React from "react";
const brands = [
  { id: 1, idcate: 1, brand_name: "samsung" },
  { id: 2, idcate: 1, brand_name: "xiaomi" },
  { id: 3, idcate: 2, brand_name: "samssung" },
  { id: 4, idcate: 2, brand_name: "xiaomii" },
  { id: 5, idcate: 3, brand_name: "Spple" },
  { id: 6, idcate: 3, brand_name: "SPSP" },
  { id: 7, idcate: 4, brand_name: "Spple" },
];
const CATEGORY_FIELDS = [
  {
    id: 1,
    value: 1,
    name: "điện thoại",
  },
  {
    id: 2,
    value: 2,
    name: "Laptop",
  },
  {
    id: 3,
    value: 3,
    name: "Đồng hồ",
  },
  {
    id: 4,
    value: 4,
    name: "Máy tính bảng",
  },
];
const AssignBrandToCategory = () => {
  return (
    <div>
      AssignBrandToCategory
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên loại</th>
            <th>Tên thương hiệu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Điện thoại</td>
            <td>samsung</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AssignBrandToCategory;
