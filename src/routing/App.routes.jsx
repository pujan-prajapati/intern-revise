import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AdminLayout, HomeLayout } from "../layout";

import { AboutPage, ContactPage, HomePage } from "../pages/home";

import LoginPage from "../pages/auth/loginpage";

import DashboardPage from "../pages/admin/dashboard";
import CategoryPage from "../pages/admin/category";

import { BannerList, BannerPage, BannerAdd } from "../pages/admin/banner";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    navigate("/login");
  });
  return <></>;
};

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path="aboutus" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />

            <Route path="category" element={<CategoryPage />} />

            <Route path="banner" element={<BannerPage />}>
              <Route index element={<BannerList />} />
              <Route path="add" element={<BannerAdd />} />
            </Route>
          </Route>

          <Route path="/login" element={<LoginPage />} />

          <Route path="logout" element={<Logout />} />

          <Route path="*" element={<>Error page</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
