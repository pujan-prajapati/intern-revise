import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeLayout from "../layout/home.layout";
import AboutPage from "../pages/home/aboutpage";
import HomePage from "../pages/home";
import ContactPage from "../pages/home/contactpage";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path="aboutus" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>

          <Route path="*" element={<>Error page</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
