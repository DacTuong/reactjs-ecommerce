// src/routes/AppRoutes.js
import React from "react";
import { Routes, Route, Router } from "react-router-dom";

// Layouts
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

// User Pages
import Home from "../pages/user/HomePage";
import Cart from "../pages/user/CartPage";
import LoginPage from "../pages/user/LoginPage";
import CheckoutPage from "../pages/user/CheckoutPage";

import LaptopsPage from "../pages/user/categories/LaptopsPage";
import PhonesPage from "../pages/user/categories/PhonesPage";
import TabletsPage from "../pages/user/categories/TabletsPage";
import SmartWatchesPage from "../pages/user/categories/SmartWatchesPage";
import PhoneDetailPage from "../pages/user/product-detail/PhoneDetailPage";
import LaptopDetailPage from "../pages/user/product-detail/LaptopDetailPage";
import WatchDetailPage from "../pages/user/product-detail/WatchDetailPage";
import TabletDetailPage from "../pages/user/product-detail/TabletDetailPage";

// Admin Pages
import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";
import Orders from "../pages/admin/Orders";
import AddProduct from "../pages/admin/AddProduct";
import Brand from "../pages/admin/Brands";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* User Routes */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/phones" element={<PhonesPage />} />
        <Route path="/laptops" element={<LaptopsPage />} />
        <Route path="/smartwatches" element={<SmartWatchesPage />} />
        <Route path="/tablets" element={<TabletsPage />} />

        <Route path="/phone/:id" element={<PhoneDetailPage />} />
        <Route path="/laptop/:id" element={<LaptopDetailPage />} />
        <Route path="/smartwatch/:id" element={<WatchDetailPage />} />
        <Route path="/tablet/:id" element={<TabletDetailPage />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin/*" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="brands" element={<Brand />} />
        <Route path="new-product" element={<AddProduct />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
