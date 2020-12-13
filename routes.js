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
  favourites: {
    path: "/catalogs/list",
    title: "Catalogs",
    icon: FolderIcon,
    onNavigation: true,
  },
  recents: {
    path: "/products/list",
    title: "Products",
    icon: InsertDriveFileIcon,
    onNavigation: true,
  },
};

export const getRoute = (name) => routes[name]?.path;

export default routes;
