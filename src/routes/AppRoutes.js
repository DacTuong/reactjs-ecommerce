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
import Products from "../pages/admin/products/Products";
import Orders from "../pages/admin/Orders";
import AddProduct from "../pages/admin/products/AddProduct";
import Brand from "../pages/admin/brands/Brands";
import AddNewBrand from "../pages/admin/brands/AddNewBrand";
import EditBrand from "../pages/admin/brands/EditBrand";
import AssignBrandToCategory from "../pages/admin/brand-categories/AssignBrandToCategory";
import AddBrandCategories from "../pages/admin/brand-categories/AddBrandCategories";
import AddCategory from "../pages/admin/categories/AddCategory";
import Categories from "../pages/admin/categories/Categories";
import AddNewSeri from "../pages/admin/series/AddNewSeri";

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
        <Route path="new-brand" element={<AddNewBrand />} />

        <Route path="edit-brand/:id" element={<EditBrand />} />

        <Route path="new-product" element={<AddProduct />} />
        <Route path="orders" element={<Orders />} />
        <Route path="brand-categories" element={<AssignBrandToCategory />} />
        <Route
          path="brand-categories/create"
          element={<AddBrandCategories />}
        />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/create" element={<AddCategory />} />
        <Route path="seri/newseri" element={<AddNewSeri />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
