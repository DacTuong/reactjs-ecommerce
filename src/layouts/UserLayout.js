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
      <header className="header">
        <Navbar />
      </header>

      <main>
        <div className="container-xl">
          <Outlet />
          {/* Quan trọng: chỗ này sẽ render Home hoặc các page con */}
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default UserLayout;
