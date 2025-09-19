import React from "react";

const Cart = () => {
  return (
    <div className="row">
      <div
        className="col-md-12 col-lg-8"
        style={{ border: "1px solid black", height: "400px" }}
      >
        <div className="cart-items">
          <table>
            <thead>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th></th>
            </thead>
          </table>
        </div>
        <div>back to shop</div>
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
        <button class="btn">CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
