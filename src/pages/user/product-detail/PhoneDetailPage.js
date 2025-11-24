import React from "react";
import { Link } from "react-router-dom";
import CarouselDetail from "../../../components/layout/CarouselDetail";
const PhoneDetailPage = () => {
  const product = {
    name: "iPhone 17 Pro Max",
    price: 32990000,
    images: [
      "https://cdn.tgdd.vn/Products/Images/42/342679/Slider/vi-vn-iphone-17-pro-max-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/342679/Slider/vi-vn-iphone-17-pro-max-2.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/342679/Slider/vi-vn-iphone-17-pro-max-3.jpg",
    ],
  };
  return (
    <div>
      <div>
        <ol className="breadcrumb">
          <li>
            <Link to="/">
              <span>Trang chủ</span>
            </Link>
          </li>
          <li>
            <Link to="/phones">
              <span>Điện thoại</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <span>Phone Asus</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <span>Phone Series</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <span>Tên Phone</span>
            </Link>
          </li>
        </ol>
      </div>
      <div>
        <h3>{product.name}</h3>
      </div>
      <div className="row">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <CarouselDetail images={product.images} />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="product-panel white-bg">
            <div className="box-options">
              <div className="options">
                <Link>8/126GB</Link>
                <Link>8/126GB</Link>
                <Link>8/126GB</Link>
                <Link>8/126GB</Link>
              </div>
              <div className="colors">
                <Link>Xanh</Link>
                <Link>Xanh</Link>
                <Link>Xanh</Link>
                <Link>Xanh</Link>
              </div>
            </div>
            <div className="block-button buy">
              <Link to="/cart">Thêm vào giỏ hàng</Link>
              <Link to="/buy-now">Mua ngay</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetailPage;
