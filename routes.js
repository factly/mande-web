import HomeIcon from "@material-ui/icons/Home";
import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

import { NAVIGATION, PROFILE } from "./components/Layout/constants";

const routes = {
  home: {
    path: "/",
    title: "Home",
    icon: HomeIcon,
  },
  catalogs: {
    path: "/catalogs/list",
    title: "Catalogs",
    icon: FolderIcon,
    position: NAVIGATION,
  },
  products: {
    path: "/products/list",
    title: "Products",
    icon: InsertDriveFileIcon,
    position: NAVIGATION,
  },
  purchasedCatalogs: {
    path: "/catalogs/purchased",
    title: "My Catalogs",
    icon: FolderIcon,
    position: PROFILE,
  },
  purchasedProducts: {
    path: "/products/purchased",
    title: "My Products",
    icon: InsertDriveFileIcon,
    position: PROFILE,
  },
  plans: {
    path: "/plans",
    title: "Plans",
    icon: InsertDriveFileIcon,
    position: PROFILE,
  },
  orders: {
    path: "/orders",
    title: "Orders",
    icon: InsertDriveFileIcon,
    position: PROFILE,
  },
  memberships: {
    path: "/memberships",
    title: "Memberships",
    icon: InsertDriveFileIcon,
    position: PROFILE,
  },
};

export const getRoute = (name) => routes[name]?.path;

export default routes;
