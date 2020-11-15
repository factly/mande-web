import { PieChartOutlined } from "@ant-design/icons";

const routes = {
  home: {
    path: "/",
    title: "Home",
    icon: PieChartOutlined,
    onNavigation: true,
  },
  favourites: {
    path: "/favourites",
    title: "Favourites",
    icon: PieChartOutlined,
    onNavigation: true,
  },
  recents: {
    path: "/recents",
    title: "Recents",
    icon: PieChartOutlined,
    onNavigation: true,
  },
  recommendations: {
    path: "/recommendations",
    title: "Recommendations",
    icon: PieChartOutlined,
    onNavigation: true,
  },
};

export const getRoute = (name) => routes[name]?.path;

export default routes;
