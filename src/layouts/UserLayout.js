// src/layouts/UserLayout.js
import { Outlet } from "react-router-dom";
import "../assets/styles/base.scss"; // đường dẫn SCSS
import "../assets/styles/main.scss"; // đường dẫn SCSS
import Navbar from "../components/layout/Navbar";
const UserLayout = () => {
  return (
    <div>
      <header className="header">
        <Navbar />
      </header>

      <main>
        <Outlet /> {/* Quan trọng: chỗ này sẽ render Home hoặc các page con */}
      </main>

      <footer>Đây là Footer</footer>
    </div>
  );
};

export default UserLayout;
