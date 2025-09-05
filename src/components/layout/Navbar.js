import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="grid">
      <div className="header__navbar">
        <ul className="header__navbar-list">
          <li className="header__navbar-item header__navbar-item--h-qr header__navbar-item--separate ">
            Vào cửa hàng tại trang web của t1
            {/* Header QR code  */}
            <div className="header__qr">
              <img
                src="/img/qrcode.png"
                alt="QR code"
                className="header__qr-img"
              />

              <div className="header__qr-apps">
                <a href="" className="header__qr-link">
                  <img
                    src="/img/google_play.png"
                    alt="Google Play"
                    className="header__qr-download-app"
                  />
                </a>
                <a href="" className="header__qr-link">
                  <img
                    src="/img/appstort.png"
                    alt="App Stort"
                    className="header__qr-download-app"
                  />
                </a>
              </div>
            </div>
          </li>
          <li className="header__navbar-item">
            <span className="header__navbar-title--no-pointer">Kết Nối</span>
            <a href="" className="header__navbar-icon-link">
              <i className=" header__navbar-icon fa-brands fa-facebook"></i>
            </a>
            <a href="" className="header__navbar-icon-link">
              <i className=" header__navbar-icon fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
        <div className="header__navbar-list">
          <div className="header__navbar-item header__navbar-item--h-notify">
            <Link to="/cart" className="header__navbar-item-link">
              Thông báo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
