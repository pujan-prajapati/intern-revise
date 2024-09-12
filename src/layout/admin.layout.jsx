import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <h2>Admin Sidbar</h2>
      <h2>Admin Header</h2>
      <Outlet />
      <h2>Admin Footer</h2>
    </>
  );
};

export default AdminLayout;
