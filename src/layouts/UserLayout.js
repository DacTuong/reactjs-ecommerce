// src/layouts/UserLayout.js
import { Outlet } from "react-router-dom";
import "../assets/styles/base.scss"; // đường dẫn SCSS
import "../assets/styles/main.scss"; // đường dẫn SCSS

import "../assets/styles/bootstrap.scss"; // đường dẫn SCSS
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
const UserLayout = () => {
  return (
    <div>
      <div className="header">
        <Navbar />
      </div>

      <div style={{ backgroundColor: "#f2f4f7" }}>
        <div className="container-xl">
          <Outlet />
          {/* Quan trọng: chỗ này sẽ render Home hoặc các page con */}
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default UserLayout;
