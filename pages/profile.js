import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import OrdersList from "../components/Order";
import MembershipsList from "../components/Membership";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "85vh",
  },
  tabs: {
    width: "20%",
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabpanel: {
    width: "80%",
  },
}));

export default function Profile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = {
    orders: {
      title: "Orders",
      component: <OrdersList />,
    },
    memberships: {
      title: "Memberships",
      component: <MembershipsList />,
    },
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {Object.values(tabs).map((tab, index) => (
          <Tab key={tab.title} label={tab.title} {...a11yProps(index)} />
        ))}
      </Tabs>
      {Object.values(tabs).map((tab, index) => (
        <TabPanel
          className={classes.tabpanel}
          key={tab.title}
          value={value}
          index={index}
        >
          {tab.component}
        </TabPanel>
      ))}
    </div>
  );
}
