import HomeIcon from "@material-ui/icons/Home";
import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

const routes = {
  home: {
    path: "/",
    title: "Home",
    icon: HomeIcon,
    onNavigation: true,
  },
  catalogs: {
    path: "/catalogs/list",
    title: "Catalogs",
    icon: FolderIcon,
    onNavigation: true,
  },
  products: {
    path: "/products/list",
    title: "Products",
    icon: InsertDriveFileIcon,
    onNavigation: true,
  },
  purchasedCatalogs: {
    path: "/catalogs/purchased",
    title: "Purchased Catalogs",
    icon: FolderIcon,
    onNavigation: true,
  },
  purchasedProducts: {
    path: "/products/purchased",
    title: "Purchased Products",
    icon: InsertDriveFileIcon,
    onNavigation: true,
  },
  plans: {
    path: "/plans",
    title: "Plans",
    icon: InsertDriveFileIcon,
    onNavigation: true,
  },
};

export const getRoute = (name) => routes[name]?.path;

export default routes;
