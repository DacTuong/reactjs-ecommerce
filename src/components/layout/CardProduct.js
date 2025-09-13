import React from "react";

const CardProduct = ({ name, image, price }) => {
  return (
    <div
      className="col-lg-2 col-md-2 col-sm-6 col-6"
      style={{
        border: "1px solid black",
        borderRadius: "8px", // ví dụ bo góc 8px
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", borderRadius: "5px", marginBottom: "8px" }}
      />
      <h5>{name}</h5>
      <p>{price}₫</p>
    </div>
  );
};

export default CardProduct;
