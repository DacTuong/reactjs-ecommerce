import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";
import Orders from "../pages/admin/Orders";
const AdminRoute = () => {
  <Routes>
    <Route element={<AdminLayout />}>
      <Route index element={<Dashboard />} />{" "}
      {/* http://localhost:3000/admin */}
      <Route path="products" element={<Products />} />
      <Route path="orders" element={<Orders />} />
    </Route>
  </Routes>;
};

export default AdminRoute;
