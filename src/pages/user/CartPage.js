import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 15",
      image: "iphone15.jpg",
      color: "Đen",
      ram: "8GB",
      storage: "256GB",
      warranty: "12 tháng",
      status: "Còn hàng",
      price: 25000000,
      quantity: 1, // số lượng mặc định
    },
    // bạn có thể thêm các sản phẩm khác vào đây
  ]);

  return (
    <div className="row">
      <Link to={"/"}>Back to shop</Link>
      <div
        className="col-md-12 col-lg-8"
        style={{ border: "1px solid black", height: "400px" }}
      >
        <div className="cart-items">
          {cartItems.map((item) => (
            <div class="cart-card">
              <img src="iphone15.jpg" alt="iPhone 15" />
              <div class="cart-info">
                <h3>iPhone 15</h3>
                <div class="details">Màu: Đen | RAM: 8GB | Bộ nhớ: 256GB</div>
                <div class="details">
                  Bảo hành: 12 tháng | Tình trạng: Còn hàng
                </div>
                <div class="price">25.000.000₫</div>
              </div>
              <div class="quantity">
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  style={{ width: "60px" }}
                />
              </div>
              <div class="cart-actions">
                <button class="btn btn-remove">❌ Xóa</button>
                <div>Tạm tính: 25.000.000₫</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-md-12 col-lg-4">
        <div>
          <h5>
            <b>Summary</b>
          </h5>
        </div>

        <div class="row">
          <div class="col" style={{ paddingLeft: "0px" }}>
            ITEMS 3
          </div>
          <div class="col text-right">&euro; 132.00</div>
        </div>
        <form>
          <p>SHIPPING</p>
          <select>
            <option class="text-muted">Standard-Delivery- &euro;5.00</option>
          </select>
          <p>GIVE CODE</p>
          <input id="code" placeholder="Enter your code" />
        </form>
        <div class="row">
          <div class="col">TOTAL PRICE</div>
          <div class="col text-right">&euro; 137.00</div>
        </div>
        <Link to={"/checkout"} class="btn">
          CHECKOUT
        </Link>
      </div>
    </div>
  );
};

export default Cart;
