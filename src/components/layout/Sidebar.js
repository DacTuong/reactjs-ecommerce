import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openId, setOpenId] = useState(null);
  const toggleDropdownID = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <div>
      <nav className="navbar-cls-top">
        <div className="navbar-header">
          <a href="#" className="logo">
            <img
              className="logo-shop"
              src="https://assets.website-files.com/5f8b9d47d4e3415c4d0a2d5e/5f8b9d47d4e341b5d10a2d98_atom-icon.svg"
              alt="Volt React Logo"
            />
          </a>
          <button type="button" className="toggle-button">
            ☰
          </button>
        </div>
      </nav>
      <nav className="sidebar act-nav">
        <div className="sidebar-column nav">
          <div className="nav-item brand">
            <a href="#" className="nav-link">
              <img
                className="icon-nav"
                src="https://assets.website-files.com/5f8b9d47d4e3415c4d0a2d5e/5f8b9d47d4e341b5d10a2d98_atom-icon.svg"
                alt="Volt React Logo"
              />
              <span className="sidebar-text">Volt React</span>
            </a>
          </div>
          <div className="nav-item active">
            <Link to="/admin" className="nav-link">
              <img
                className="icon-nav"
                src="https://www.svgrepo.com/show/368817/pie-chart.svg"
                alt="Overview Icon"
              />
              <span className="sidebar-text">Overview</span>
            </Link>
          </div>
          <div className="nav-item">
            {/* Tiêu đề menu */}
            <div
              className="nav-link"
              onClick={() => toggleDropdownID(1)}
              style={{ cursor: "pointer" }}
            >
              <img
                className="icon-nav"
                src="https://www.svgrepo.com/show/497148/money-transfer.svg"
                alt="Transactions Icon"
              />
              <span className="sidebar-text">Quản lý sản phẩm</span>
              <span className={`arrow ${openId === 1 ? "rotate" : ""}`}>▾</span>
            </div>
            {openId === 1 && (
              <div className="sub-menu">
                <Link to="/admin/products">
                  <span className="sidebar-text">Products</span>
                </Link>
                <Link to="/admin/new-product">
                  <span className="sidebar-text">Create-products</span>
                </Link>
              </div>
            )}
          </div>

          <div className="nav-item">
            {/* Tiêu đề menu */}
            <div
              className="nav-link"
              onClick={() => toggleDropdownID(2)}
              style={{ cursor: "pointer" }}
            >
              <img
                className="icon-nav"
                src="https://www.svgrepo.com/show/497148/money-transfer.svg"
                alt="Transactions Icon"
              />
              <span className="sidebar-text">Thương hiệu</span>
              <span className={`arrow ${openId === 2 ? "rotate" : ""}`}>▾</span>
            </div>

            {/* Menu xổ xuống */}
            {openId === 2 && (
              <div className="sub-menu">
                <Link to="/admin/new-brand">Thêm thương hiệu mới</Link>
                <Link to="/admin/brands">Danh sách thương hiệu</Link>
              </div>
            )}
          </div>
          <div className="nav-item">
            <div
              className="nav-link"
              onClick={() => toggleDropdownID(3)}
              style={{ cursor: "pointer" }}
            >
              <img
                className="icon-nav"
                src="https://www.svgrepo.com/show/497144/settings.svg"
                alt="Settings Icon"
              />
              <span className="sidebar-text">Quản lý mối quan hệ</span>
              <span className={`arrow ${openId === 3 ? "rotate" : ""}`}>▾</span>
            </div>
            {openId === 3 && (
              <div className="sub-menu">
                <Link to="/admin/brand-categories">Danh sách mối quan hệ</Link>
                <Link to="/admin/brand-categories/create">Gắn mối quan hệ</Link>
              </div>
            )}
          </div>
          <div className="nav-item">
            <div
              className="nav-link"
              onClick={() => toggleDropdownID(4)}
              style={{ cursor: "pointer" }}
            >
              <img
                className="icon-nav"
                src="https://www.svgrepo.com/show/497144/settings.svg"
                alt="Settings Icon"
              />
              <span className="sidebar-text">Quản lý loại sản phẩm</span>
              <span className={`arrow ${openId === 4 ? "rotate" : ""}`}>▾</span>
            </div>
            {openId === 4 && (
              <div className="sub-menu">
                <Link to="/admin/categories">Danh sách loại sản phẩm</Link>
                <Link to="/admin/categories/create">
                  Thêm loại sản phẩm mới
                </Link>
              </div>
            )}
          </div>
          <div className="nav-item">
            <div
              className="nav-link"
              onClick={() => toggleDropdownID(5)}
              style={{ cursor: "pointer" }}
            >
              <img
                className="icon-nav"
                src="https://www.svgrepo.com/show/497144/settings.svg"
                alt="Settings Icon"
              />
              <span className="sidebar-text">Quản lý Seri sản phẩm</span>
              <span className={`arrow ${openId === 5 ? "rotate" : ""}`}>▾</span>
            </div>
            {openId === 5 && (
              <div className="sub-menu">
                <Link to="/admin/seri">Danh sách seri sản phẩm</Link>
                <Link to="/admin/seri/newseri">Thêm seri mới</Link>
              </div>
            )}
          </div>
          <div className="nav-item">
            <a href="#" className="nav-link">
              <img
                className="icon-nav"
                src="https://www.svgrepo.com/show/497136/calendar.svg"
                alt="Calendar Icon"
              />
              <span className="sidebar-text">Calendar</span>
            </a>
          </div>
          <div className="nav-item">
            <a href="#" className="nav-link">
              <img
                className="icon-nav"
                src="https://www.svgrepo.com/show/497143/map.svg"
                alt="Map Icon"
              />
              <span className="sidebar-text">Map</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
