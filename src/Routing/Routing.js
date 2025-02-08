import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";

import Cart from "../Pages/Cart/Cart";
import PlaceOrder from "../Pages/PlaceOrder/PlaceOrder";
import AdminLogin from "../Admin/AdminLogin";
import Dashboard from "../Admin/DashBoard";
import Payment from "../Pages/Payment/Payment";
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<PlaceOrder />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/dashboardaabbccdd" element={<Dashboard />} />
    </Routes>
  );
}

export default Routing;
