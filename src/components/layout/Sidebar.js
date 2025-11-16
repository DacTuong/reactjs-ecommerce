import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div class="sidebar">
      <div class="sidebar-column nav">
        <div class="nav-item brand">
          <a href="#" class="nav-link">
            <img
              class="icon-nav"
              src="https://assets.website-files.com/5f8b9d47d4e3415c4d0a2d5e/5f8b9d47d4e341b5d10a2d98_atom-icon.svg"
              alt="Volt React Logo"
            />
            <span class="sidebar-text">Volt React</span>
          </a>
        </div>
        <div class="nav-item active">
          <Link to="/admin" class="nav-link">
            <img
              class="icon-nav"
              src="https://www.svgrepo.com/show/368817/pie-chart.svg"
              alt="Overview Icon"
            />
            <span class="sidebar-text">Overview</span>
          </Link>
        </div>
        <div class="nav-item">
          <Link to="/admin/products" class="nav-link">
            <img
              class="icon-nav"
              src="https://www.svgrepo.com/show/497135/envelope.svg"
              alt="Messages Icon"
            />
            <span class="sidebar-text">Products</span>
          </Link>
        </div>
        <div class="nav-item">
          <a href="#" class="nav-link">
            <img
              class="icon-nav"
              src="https://www.svgrepo.com/show/497148/money-transfer.svg"
              alt="Transactions Icon"
            />
            <span class="sidebar-text">Products</span>
          </a>
        </div>
        <div class="nav-item">
          <a href="#" class="nav-link">
            <img
              class="icon-nav"
              src="https://www.svgrepo.com/show/497144/settings.svg"
              alt="Settings Icon"
            />
            <span class="sidebar-text">Reports</span>
          </a>
        </div>
        <div class="nav-item">
          <a href="#" class="nav-link">
            <img
              class="icon-nav"
              src="https://www.svgrepo.com/show/497136/calendar.svg"
              alt="Calendar Icon"
            />
            <span class="sidebar-text">Calendar</span>
          </a>
        </div>
        <div class="nav-item">
          <a href="#" class="nav-link">
            <img
              class="icon-nav"
              src="https://www.svgrepo.com/show/497143/map.svg"
              alt="Map Icon"
            />
            <span class="sidebar-text">Map</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
