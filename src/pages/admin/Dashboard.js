import React from "react";
import Header from "../../components/layout/Header";
const Dashboard = () => {
  return (
    <div>
      <div> Đây là trang Dashboard</div>
      <div>
        <Header />
      </div>
      <div className="row">
        <div className="col-sm-3">
          <h3>Doanh thu (30 ngày)</h3>
          <span>1</span>
        </div>
        <div className="col-sm-3">
          <h3>Đơn hàng hôm nay</h3>
          <span>1</span>
        </div>
        <div className="col-sm-3">
          <h3>Khách hàng mới</h3>
          <span>1</span>
        </div>
        <div className="col-sm-3">
          <h3>Sản phẩm tồn kho</h3>
          <span>1</span>
        </div>
      </div>
      <div className="row">
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
