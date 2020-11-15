import React from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.css";

import MenuItems from "./MenuItems";

const { Header, Content, Footer, Sider } = Layout;

const CustomLayout = ({ children }) => {
  return (
    <Layout>
      <Header
        className="header"
        style={{ overflow: "auto", position: "fixed" }}
      >
        <div className="logo" />
        <Menu theme="light" mode="horizontal"></Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Layout className="site-layout-background" style={{ marginLeft: 200 }}>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
            }}
          >
            <div className="logo" />
            <MenuItems />
          </Sider>
          <Content style={{ margin: "24px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>
      </Content>
    </Layout>
  );
};

export default CustomLayout;
