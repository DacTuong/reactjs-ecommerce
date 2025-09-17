import React from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ name, image, price, type }) => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-6 col-6 product-box">
      <div className="product-content">
        {/* {`/${type}/${name}`} */}
        <Link to={`/${type}/${name}`}>
          <img
            src={image}
            alt={name}
            style={{ width: "100%", borderRadius: "5px", marginBottom: "8px" }}
          />
          <h5>{name}</h5>
          <p>{price}₫</p>
        </Link>
      </div>
    </div>
  );
};

export default CardProduct;
