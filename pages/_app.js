import { Provider } from "react-redux";
import configureStore from "../store";
import "antd/dist/antd.css";

const store = configureStore();

import Layout from "../components/Layout";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
