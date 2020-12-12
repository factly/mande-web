import axios from "axios";

export default axios.create({
  baseURL: window.REACT_APP_API_URL,
  headers: {
    common: {
      "X-User": "1",
    },
  },
});
