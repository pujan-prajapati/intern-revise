import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import HomeLayout from "../layout/home.layout";
import AboutPage from "../pages/home/aboutpage";
import HomePage from "../pages/home";
import ContactPage from "../pages/home/contactpage";
import LoginPage from "../pages/auth/loginpage";
import AdminLayout from "../layout/admin.layout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

          <Route path="/admin" element={<AdminLayout />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="logout" element={<Logout />} />

          <Route path="*" element={<>Error page</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
