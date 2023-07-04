import Layout from "../components/Layout";
import "../styles/globals.css";

import { Provider } from "react-redux"; // Importing Provider
import store from "../redux/store"; // Importing redux store

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
