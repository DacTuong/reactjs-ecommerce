import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";

import "../assets/styles/admincustom.scss"; // đường dẫn SCSS
import "../assets/styles/admin.scss"; // đường dẫn SCSS

const AdminLayout = () => {
  return (
    <div className="grid-admin">
      <div>
        <Sidebar />
      </div>
      <div className="wrap-admin">
        <div className="page-inner">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
