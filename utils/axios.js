import axios from "axios";

function createAxiosAuthMiddleware() {
  return ({ getState }) =>
    (next) =>
    (action) => {
      axios.defaults.baseURL =
        "http://127.0.0.1:4455/.factly/mande/server/public";
      axios.defaults.headers.common["X-Organisation"] =
        getState().organisations.selected;
      axios.defaults.withCredentials = true;
      return next(action);
    };
}

const axiosAuth = createAxiosAuthMiddleware();

export default axiosAuth;
