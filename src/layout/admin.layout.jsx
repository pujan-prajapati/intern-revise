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

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} width={288}>
          <div className="p-4 bg-gray-200">
            <h1 className="text-2xl m-0">LOGO.</h1>
          </div>
          <Menu className="h-screen">
            <Menu.Item icon={<UserOutlined />} key={1}>
              <NavLink to={""}>Item 1</NavLink>
            </Menu.Item>
            <Menu.Item icon={<VideoCameraOutlined />} key={2}>
              <NavLink to={""}>Item 2</NavLink>
            </Menu.Item>
            <Menu.Item icon={<UploadOutlined />} key={3}>
              <NavLink to={""}>Item 3</NavLink>
            </Menu.Item>
          </Menu>
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
          <Content className=" m-4 p-10 bg-gray-200 border rounded-lg">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminLayout;
