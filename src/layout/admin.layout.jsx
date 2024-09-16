import { Button, Layout, Menu } from "antd";
import React, { useState } from "react";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Link, NavLink, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const menuItems = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: <NavLink to="/admin">Dashboard</NavLink>,
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: <NavLink to="/admin/category">Category</NavLink>,
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: <NavLink to="/admin/banner">Banner</NavLink>,
  },
];

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} width={288}>
          <div className="p-4 bg-gray-200">
            {collapsed ? (
              <h1 className="text-2xl m-0">LO.</h1>
            ) : (
              <h1 className="text-2xl m-0">LOGO.</h1>
            )}
          </div>
          <Menu items={menuItems} className="h-screen" />
        </Sider>
        <Layout>
          <Header className="px-4 bg-gray-200 flex items-center justify-between">
            <Button type="primary" onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <div>
              <Button type="primary">
                <Link to="/">Home</Link>
              </Button>
            </div>
          </Header>
          <Content className=" m-4 p-5 bg-gray-200 border rounded-lg">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminLayout;
