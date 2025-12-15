import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
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
            <Link to="/admin/products" className="nav-link">
              <img
                className="icon-nav"
                src="https://www.svgrepo.com/show/497135/envelope.svg"
                alt="Messages Icon"
              />
              <span className="sidebar-text">Products</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/admin/new-product" className="nav-link">
              <img
                className="icon-nav"
                src="https://www.svgrepo.com/show/497135/envelope.svg"
                alt="Messages Icon"
              />
              <span className="sidebar-text">Products</span>
            </Link>
          </div>
          <div className="nav-item">
            {/* Tiêu đề menu */}
            <div
              className="nav-link"
              onClick={() => setOpen(!open)}
              style={{ cursor: "pointer" }}
            >
              <img
                className="icon-nav"
                src="https://www.svgrepo.com/show/497148/money-transfer.svg"
                alt="Transactions Icon"
              />
              <span className="sidebar-text">Thương hiệu</span>
              <span className={`arrow ${open ? "rotate" : ""}`}>▾</span>
            </div>

            {/* Menu xổ xuống */}
            {open && (
              <div className="sub-menu">
                <Link to="/admin/new-brand">Thêm thương hiệu mới</Link>
                <Link to="/admin/brands">Danh sách thương hiệu</Link>
              </div>
            )}
          </div>
          <div className="nav-item">
            <a href="#" className="nav-link">
              <img
                className="icon-nav"
                src="https://www.svgrepo.com/show/497144/settings.svg"
                alt="Settings Icon"
              />
              <span className="sidebar-text">Reports</span>
            </a>
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
