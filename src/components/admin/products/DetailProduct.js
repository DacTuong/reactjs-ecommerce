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

  const renderFeild = (feild) => {
    switch (feild.type) {
      case "text":
        return (
          <div key={feild.key} className="form-groub">
            <label>{feild.label}</label>

            <input type="text"></input>
            {/* <input
            value={product.details[field.key] || ""}
            onChange={(e) => updateDetail(field.key, e.target.value)}
          ></input> */}
          </div>
        );

      case "number":
        return (
          <div key={feild.key} className="form-groub">
            <label>{feild.label}</label>
            <input type="number" />;
            {/* <input
            value={product.details[field.key] || ""}
            onChange={(e) => updateDetail(field.key, e.target.value)}
          ></input> */}
          </div>
        );

      case "select":
        return (
          <div key={feild.key} className="form-groub">
            <label>{feild.label}</label>
            <select>
              <option>==Chọn hệ điều hành==</option>
              {feild.options.map((opt) => (
                <option value={opt.value}> {opt.label} </option>
              ))}
            </select>

            <select>
              <option> 1</option>
              <option>2</option>
            </select>
            {/* <input
            value={product.details[feild.key] || ""}
            onChange={(e) => updateDetail(feild.key, e.target.value)}
          ></input> */}
          </div>
        );
      case "checkbox":
        return (
          <div key={feild.key} className="form-groub">
            <label>{feild.label}</label>
            {feild.options.map((opt) => (
              <span>
                {opt.label} <input type="checkbox" value={opt.value} />
              </span>
            ))}
            {/* <input
            value={product.details[field.key] || ""}
            onChange={(e) => updateDetail(field.key, e.target.value)}
          ></input> */}
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <h1>Thông tin chi tiết sản phẩm</h1>
      {detailFields.map((field) => renderFeild(field))}
    </div>
  );
};

export default DetailProduct;
