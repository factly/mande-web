import axios from "axios";

function createAxiosAuthMiddleware() {
  return ({ getState }) =>
    (next) =>
    (action) => {
      axios.defaults.baseURL = process.env.NEXT_PUBLIC_MANDE_PUBLIC_API_URL;
      axios.defaults.headers.common["X-Organisation"] =
        getState().organisations.selected;
      axios.defaults.withCredentials = true;
      return next(action);
    };
}

const axiosAuth = createAxiosAuthMiddleware();

export default axiosAuth;
