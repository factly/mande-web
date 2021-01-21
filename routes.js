import HomeIcon from "@material-ui/icons/Home";
import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

import { NAVIGATION, PROFILE } from "./components/Layout/constants";

const routes = {
  home: {
    path: "/",
    title: "Home",
    authorised: false,
    icon: HomeIcon,
  },
  catalogs: {
    path: "/catalogs/list",
    title: "Catalogs",
    icon: FolderIcon,
    authorised: false,
    position: NAVIGATION,
  },
  products: {
    path: "/products/list",
    title: "Products",
    icon: InsertDriveFileIcon,
    authorised: false,
    position: NAVIGATION,
  },
  purchasedCatalogs: {
    path: "/catalogs/purchased",
    title: "My Catalogs",
    icon: FolderIcon,
    authorised: true,
    // position: PROFILE,
  },
  purchasedProducts: {
    path: "/products/purchased",
    title: "My Products",
    icon: InsertDriveFileIcon,
    authorised: true,
    // position: PROFILE,
  },
  plans: {
    path: "/plans",
    title: "Plans",
    icon: InsertDriveFileIcon,
    authorised: false,
    position: PROFILE,
  },
  orders: {
    path: "/orders",
    title: "Orders",
    icon: InsertDriveFileIcon,
    authorised: true,
    // position: PROFILE,
  },
  memberships: {
    path: "/memberships",
    title: "Memberships",
    icon: InsertDriveFileIcon,
    authorised: true,
    position: PROFILE,
  },
};

export const getRoute = (name) => routes[name]?.path;

export default routes;
