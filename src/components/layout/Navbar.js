import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-xl py-3">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="https://cdn.mobilecity.vn/mobilecity-vn/images/2023/04/w300/logo-mobilecity-1.png.webp" />
          </Link>
        </div>
        <div className="search">
          <div className="search_input_area">
            <input type="text" placeholder="Nhập gì đó..." />
            <button>Tìm</button>
          </div>
        </div>
        <div className="profile">
          <Link>Đăng nhập</Link>
        </div>
        <Link to="/cart">Giỏ hàng</Link>
      </div>
    </div>
  );
};

export default Navbar;
