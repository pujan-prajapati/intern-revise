import React from "react";
import NavbarComponent from "../components/home/NavbarComponent";
import { Outlet } from "react-router-dom";
import FooterComponent from "../components/home/FooterComponent";

const HomeLayout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default HomeLayout;
