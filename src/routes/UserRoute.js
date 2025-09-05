// src/routes/UserRoute.js
import { Route, Routes } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/user/Home";
import Cart from "../pages/user/Cart";
const UserRoute = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default UserRoute;
