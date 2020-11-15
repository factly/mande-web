import React from "react";
import { Menu } from "antd";
import Link from "next/link";

import routes from "../../routes";

const MenuItems = () => {
  const menuItems = Object.values(routes).filter((route) => route.onNavigation);

  return (
    <Menu theme="dark" mode="inline">
      {menuItems.map((item) => (
        <Menu.Item key={item.title} icon={<item.icon />}>
          <Link href={item.path}>{item.title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuItems;
