import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { RubyOutlined, AlertOutlined } from "@ant-design/icons";

const NavItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About Us",
    to: "/aboutus",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

const NavbarComponent = () => {
  return (
    <section className="container mx-auto py-4">
      <nav className="flex items-center justify-between">
        <h1 className="text-xl font-bold">LOGO.</h1>

        <div className="space-x-8">
          {NavItems.map((value, index) => (
            <NavLink to={value.to} key={index}>
              {value.name}
            </NavLink>
          ))}
        </div>

        <div className="space-x-4">
          <Button
            icon={<RubyOutlined />}
            className="bg-orange-500 text-white border-none py-5 hover:bg-orange-300"
          >
            Sign In
          </Button>
          <Button
            icon={<AlertOutlined />}
            className="text-white border-none py-5 bg-amber-500 hover:bg-amber-300"
          >
            Register
          </Button>
        </div>
      </nav>
    </section>
  );
};

export default NavbarComponent;
