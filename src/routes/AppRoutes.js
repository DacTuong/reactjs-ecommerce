// src/routes/AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

// User Pages
import Home from "../pages/user/HomePage";
import Cart from "../pages/user/CartPage";
import LoginPage from "../pages/user/LoginPage";

// Admin Pages
import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";
import Orders from "../pages/admin/Orders";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* User Routes */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
