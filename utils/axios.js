import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:4455/.factly/mande/server/public",
  headers: {
    common: {
      "X-Organisation": "2",
    },
  },
});
