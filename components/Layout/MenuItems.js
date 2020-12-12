import React from "react";
import Link from "next/link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import routes from "../../routes";

const MenuItems = () => {
  const menuItems = Object.values(routes).filter((route) => route.onNavigation);

  return (
    <List>
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          <Divider />
          <Link href={item.path}>
            <ListItem button key={item}>
              <>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </>
            </ListItem>
          </Link>
        </React.Fragment>
      ))}
    </List>
  );
};

export default MenuItems;
