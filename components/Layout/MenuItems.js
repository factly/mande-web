import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";

import routes from "../../routes";
import { NAVIGATION, PROFILE } from "./constants";

const useStyles = makeStyles((theme) => ({
  popover: {
    padding: theme.spacing(2),
  },
}));

const MenuItems = () => {
  const user = useSelector(({ user }) => user);

  const menuItems = Object.values(routes).filter(
    (route) => route.position === NAVIGATION && (!route.authorised || user.id)
  );

  return (
    <React.Fragment>
      {menuItems.map((item, index) => (
        <Link href={item.path} key={index}>
          <Button color="inherit" key={index}>
            {item.title}
          </Button>
        </Link>
      ))}
    </React.Fragment>
  );
};

export const Profile = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = useSelector(({ user }) => user);
  const openProfilePopover = (event) => setAnchorEl(event.currentTarget);
  const closeProfilePopover = () => setAnchorEl(null);
  const popoverIsOpen = Boolean(anchorEl);

  const profileListItem = Object.values(routes).filter(
    (route) => route.position === PROFILE && (!route.authorised || user.id)
  );

  const logout = () => {
    window.location =
      "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/logout";
    return;
  };

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="profile"
        edge="end"
        onClick={openProfilePopover}
      >
        <AccountCircleIcon />
      </IconButton>
      <Popover
        open={popoverIsOpen}
        anchorEl={anchorEl}
        onClose={closeProfilePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List component="nav">
          {profileListItem.map((route, index) => (
            <Link href={route.path} key={index}>
              <ListItem button onClick={closeProfilePopover}>
                <ListItemIcon>
                  <route.icon />
                </ListItemIcon>
                <ListItemText primary={route.title} />
              </ListItem>
            </Link>
          ))}
          {user.id && (
            <ListItem button onClick={logout}>
              <ListItemText primary={"Logout"} />
            </ListItem>
          )}
        </List>
      </Popover>
    </div>
  );
};

export default MenuItems;
