import React from "react";

const DetailProduct = ({ product, setProduct, detailFields }) => {
  const updateDetail = (key, value) => {
    setProduct({
      ...product,
      details: {
        ...product.details,
        [key]: value,
      },
    });
  };
  return (
    <div>
      <h1>Thông tin chi tiết sản phẩm</h1>
      {detailFields.map((field) => (
        <div key={field.key} className="form-groub">
          <label>{field.label}</label>
          <input
            value={product.details[field.key] || ""}
            onChange={(e) => updateDetail(field.key, e.target.value)}
          ></input>
        </div>
      ))}
    </div>
  );
};

export default DetailProduct;
