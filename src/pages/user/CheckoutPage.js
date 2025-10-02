import React, { useState } from "react";

const CheckoutPage = () => {
  const [selecttedValue, setSelecttedValue] = useState("");
  const handleSelected = (event) => {
    setSelecttedValue(event.target.value);
    console.log("Giá trị mới:", event.target.value);
  };
  const [productItems] = useState([
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
      quantity: 1,
    },
    {
      id: 2,
      name: "Samsung S24",
      image: "s24.jpg",
      color: "Trắng",
      ram: "12GB",
      storage: "512GB",
      warranty: "12 tháng",
      status: "Còn hàng",
      price: 22000000,
      quantity: 2,
    },
  ]);
  return (
    <div>
      <div>CheckoutPage</div>
      <div className="row">
        <div className="col-md-12 col-lg-7">
          <h1>Thông tin thanh toán</h1>
          <div className="check-out">
            <form className="form-group">
              <div className="mb-3 row">
                <div className="col-md-6 mb-3">
                  <b>Họ và tên</b>
                  <input
                    className="form-control"
                    type="text"
                    data-input-value="fullname"
                    name="fullname"
                    id="fullname"
                    placeholder="Họ và tên"
                  />
                  <label
                    for=""
                    data-check-value="fullname"
                    className="check-validate"
                  >
                    Vui lòng điền thông tin!
                  </label>
                </div>

                <div className="col-md-6 mb-3">
                  <b>Số điện thoại</b>
                  <input
                    className="form-control"
                    type="text"
                    data-input-value="phonenumber"
                    name="phonenumber"
                    id="phonenumber"
                    placeholder="Số điện thoại"
                  />
                  <label
                    for=""
                    data-check-value="phonenumber"
                    className="check-validate"
                  >
                    Vui lòng điền thông tin!
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <b>Email</b>
                <input
                  className="form-control"
                  type="text"
                  data-input-value="email_order"
                  name="email_order"
                  id="email_order"
                  placeholder="Email người nhận"
                />
                <label
                  for=""
                  data-check-value="email_order"
                  className="check-validate"
                >
                  Vui lòng điền thông tin!
                </label>
              </div>
              <div className="mb-3 row">
                <div className="col-md-4">
                  <b>Thành phố</b>
                  <select
                    id="city"
                    name="city"
                    data-input-value="city"
                    className="form-control"
                  >
                    <option value="">Chọn tỉnh thành phố</option>

                    <option value=""></option>
                  </select>
                  <label
                    for=""
                    data-check-value="city"
                    className="check-validate"
                  >
                    Vui lòng điền thông tin!
                  </label>
                </div>

                <div className="col-md-4">
                  <b>Quận/Huyện</b>
                  <select
                    id="district"
                    data-input-value="district"
                    name="district"
                    className="form-control"
                  >
                    <option value="">Chọn Quận/Huyện</option>
                  </select>
                  <label
                    for=""
                    data-check-value="district"
                    className="check-validate"
                  >
                    Vui lòng điền thông tin!
                  </label>
                </div>
                <div className="col-md-4">
                  <b>Xã/Phường</b>
                  <select
                    id="wards"
                    name="wards"
                    data-input-value="wards"
                    className="form-control"
                  >
                    <option value="">Chọn Xã/Phường</option>
                  </select>
                  <label
                    for=""
                    data-check-value="wards"
                    className="check-validate"
                  >
                    Vui lòng điền thông tin!
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <b>Địa chỉ</b>
                <input
                  type="text"
                  name="address"
                  data-input-value="address"
                  id="address"
                  className="form-control"
                />
                <label
                  for=""
                  data-check-value="address"
                  className="check-validate"
                >
                  Vui lòng điền thông tin!
                </label>
              </div>
              <div className="mb-3">
                <b>Ghi chú</b>
                <textarea
                  className="form-control"
                  name="note_order"
                  id="note_order"
                  placeholder="Ghi chú"
                ></textarea>
              </div>

              <div className="mb-3">
                <b>Phương thức giao hàng</b>
                <select
                  className="form-control"
                  value={selecttedValue}
                  onChange={handleSelected}
                >
                  <option value={"40000"}>Giao hàng thường</option>
                  <option value={"60000"}>Giao hàng nhanh</option>
                </select>
                <label
                  for=""
                  data-check-value="email_order"
                  className="check-validate"
                >
                  Vui lòng điền thông tin!
                </label>
              </div>
              <div className="mb-3">
                <button
                  className="send-order mb-2"
                  type="button"
                  id=""
                  name="add_shipping_address"
                >
                  Hoàn thành thanh toán
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-12 col-lg-5 order-summary">
          <h2>Xem lại đơn hàng</h2>
          <div className="product-items">
            {productItems.map((item) => (
              <div key={item.id} className="product-item">
                <img src="https://cdn.mobilecity.vn/mobilecity-vn/images/2022/07/asus-rog-phone-6-pro-22.jpg.webp" />
                <div>
                  <b>{item.name}</b>
                  <span>{item.quantity}</span>
                  <b>{item.price}</b>
                </div>
              </div>
            ))}
          </div>
          <div className="summary">
            <div>
              <span>Subtotal</span>
              <span id="subtotal">$45.00</span>
            </div>
            <div>
              <span>Shipping</span>
              <span id="shipping">$5.00</span>
            </div>
            <div>
              <span>Discount</span>
              <span id="discountValue">-$10.00</span>
            </div>
            <p>Bạn đã chọn: {selecttedValue}</p>
            <div class="total">
              <span>Total</span>
              <span id="total">$40.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
