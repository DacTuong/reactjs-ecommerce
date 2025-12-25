import React from "react";
import { Link } from "react-router-dom";
import CarouselDetail from "../../../components/layout/CarouselDetail";
const PhoneDetailPage = () => {
  const product = {
    name: "iPhone 17 Pro Max",
    default_sku: "IP17PMDEN",
    default_slug: "iphone-17-pro-max-256gb",
    price: 29990000,
    original_price: 32990000,
    images: [
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/341688/samsung-galaxy-a17-5g-gray-1-638925131547875229-750x500.jpg",
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/341688/samsung-galaxy-a17-5g-gray-2-638925131541619295-750x500.jpg",
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/341688/samsung-galaxy-a17-5g-gray-3-638925131535079597-750x500.jpg",
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/341688/samsung-galaxy-a17-5g-gray-4-638925131528503776-750x500.jpg",
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/341688/samsung-galaxy-a17-5g-gray-5-638925131519844861-750x500.jpg",
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/341688/samsung-galaxy-a17-5g-gray-6-638925131512486372-750x500.jpg",
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/341688/samsung-galaxy-a17-5g-gray-7-638925131505532821-750x500.jpg",
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/341688/samsung-galaxy-a17-5g-gray-8-638925131497911816-750x500.jpg",
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/341688/samsung-galaxy-a17-5g-gray-9-638925131491175268-750x500.jpg",
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/341688/samsung-galaxy-a17-5g-gray-10-638925131484367936-750x500.jpg",
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/341688/samsung-galaxy-a17-5g-gray-11-638925131477412712-750x500.jpg",
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/341688/samsung-galaxy-a17-5g-gray-12-638925131468522278-750x500.jpg",
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/341688/samsung-galaxy-a17-5g-gray-13-638925131460429115-750x500.jpg",
      "https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/42/341688/Kit/galaxy-a17-5g-bbh-638925135876358788.jpg",
    ],
    colors: [
      { name: "Black", sku: "IP17PMDEN" },
      { name: "White", sku: "IP17PMTRANG" },
      { name: "Blue", sku: "IP17PMXANH" },
    ],
    variants: [
      {
        name: "iPhone 17 Pro Max 256GB",
        slug: "iphone-17-pro-max-256gb",
        price: 32990000,
        option: "258GB",
      },
      {
        name: "iPhone 17 Pro Max 512GB",
        slug: "iphone-17-pro-max-512gb",
        price: 37990000,
        option: "512GB",
      },
      {
        name: "iPhone 17 Pro Max 1TB",
        slug: "iphone-17-pro-max-1tb",
        option: "1TB",
      },
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
          <div className="policy">
            <h2>Điện máy shop cam kêys</h2>
            <ul>
              <li>
                <div className="pl-icon"></div>
                <div className="pl-text">
                  <p>
                    Hư gì đổi nấy <b>12 tháng</b> tại các nơi trên cần thơ (Miến
                    phí tháng đầu)
                  </p>
                </div>
              </li>
              <li>
                <div className="pl-icon"></div>
                <div className="pl-text">
                  <p>
                    Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cáp Type C, Ốp lưng,
                    Củ sạc nhanh rời đầu Type A
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="product-panel white-bg">
            <div className="box-options">
              <div className="options">
                {product.variants.map((v) => (
                  <Link
                    className={`option-link ${
                      v.slug === product.default_slug ? "act" : ""
                    }`}
                    to={`/phone/${v.slug}`}
                  >
                    {v.option}
                  </Link>
                ))}
              </div>
              <div className="colors">
                {product.colors.map((color) => (
                  <Link
                    className={`color-link ${
                      color.sku === product.default_sku ? "act" : ""
                    }`}
                    key={color.code}
                  >
                    {color.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="box-price">
              <span className="price-sale">
                {product.price?.toLocaleString("vi-VN") + "đ"}
              </span>
              <span className="price-original">
                {product.original_price?.toLocaleString("vi-VN") + "đ"}
              </span>
            </div>
            <div className="block-button buy">
              <Link to="/cart" className="btn btn-add-cart">
                Thêm vào giỏ hàng
              </Link>
              <Link to="/checkout" className="btn btn-buy-now">
                Mua ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetailPage;
