import React from "react";
import Link from "next/link";
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
  profileButton: {
    marginLefft: 36,
  },
  popover: {
    padding: theme.spacing(2),
  },
}));

const MenuItems = () => {
  const menuItems = Object.values(routes).filter(
    (route) => route.position === NAVIGATION
  );

  return (
    <React.Fragment>
      {menuItems.map((item, index) => (
        <Link href={item.path}>
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
  const openProfilePopover = (event) => setAnchorEl(event.currentTarget);
  const closeProfilePopover = () => setAnchorEl(null);
  const popoverIsOpen = Boolean(anchorEl);

  const profileListItem = Object.values(routes).filter(
    (route) => route.position === PROFILE
  );

  return (
    <div>
      <IconButton
        className={classes.profileButton}
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
          {profileListItem.map((route) => (
            <Link href={route.path}>
              <ListItem button onClick={closeProfilePopover}>
                <ListItemIcon>
                  <route.icon />
                </ListItemIcon>
                <ListItemText primary={route.title} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Popover>
    </div>
  );
};

export default MenuItems;
