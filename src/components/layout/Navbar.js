import { Link } from "react-router-dom";

const Navbar = () => {
  const categories = [
    { name: "Điện thoại", cateslug: "phones" },
    { name: "Laptop", cateslug: "laptops" },
    { name: "Đồng hồ thông minh", cateslug: "smartwatches" },
    { name: "Tablet", cateslug: "tablets" },
  ];
  return (
    <div className="container-xl py-3">
      <div className="header__top">
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
          <Link to="/login">Đăng nhập</Link>
        </div>
        <Link to="/cart">Giỏ hàng</Link>
      </div>
      <div className="header__main">
        <ul className="main-menu">
          {categories.map((cate, index) => (
            <li key={index}>
              <Link to={`/${cate.cateslug}`}>{cate.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
