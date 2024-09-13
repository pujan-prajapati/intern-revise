import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Drawer } from "antd";
import {
  RubyOutlined,
  AlertOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

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
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showDrawerr = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="container px-4 md:px-0 mx-auto py-4">
      <nav className="flex items-center justify-between">
        <h1 className="text-xl font-bold">LOGO.</h1>

        <div className="space-x-8 hidden md:block">
          {NavItems.map((value, index) => (
            <NavLink to={value.to} key={index}>
              {value.name}
            </NavLink>
          ))}
        </div>

        <div className="space-x-4 hidden md:block">
          <Link to="/login">
            <Button
              icon={<RubyOutlined />}
              className="bg-orange-500 text-white border-none py-5 hover:!bg-orange-600 hover:!text-white"
            >
              Log In
            </Button>
          </Link>
          <Button
            icon={<AlertOutlined />}
            loading={loading}
            onClick={handleLoading}
            className="text-white border-none py-5 bg-amber-500 hover:!bg-amber-600 hover:!text-white"
          >
            Register
          </Button>
        </div>

        <div className="md:hidden">
          <Button type="primary" onClick={showDrawerr}>
            <MenuFoldOutlined />
          </Button>
          <Drawer onClose={onClose} open={open} title="Menu">
            <div className="flex flex-col space-y-8">
              {NavItems.map((value, index) => (
                <NavLink to={value.to} key={index} className={"text-3xl"}>
                  {value.name}
                </NavLink>
              ))}
              <Link to="/login">
                <Button
                  icon={<RubyOutlined />}
                  className="w-full bg-orange-500 text-white border-none py-5 hover:!bg-orange-600 hover:!text-white"
                >
                  Log In
                </Button>
              </Link>
              <Button
                icon={<AlertOutlined />}
                loading={loading}
                onClick={handleLoading}
                className="text-white border-none py-5 bg-amber-500 hover:!bg-amber-600 hover:!text-white"
              >
                Register
              </Button>
            </div>
          </Drawer>
        </div>
      </nav>
    </section>
  );
};

export default NavbarComponent;
