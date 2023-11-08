import Layout from "../components/Layout";
import "../styles/globals.css";
import { Provider } from "react-redux"; // Importing Provider
import store from "../redux/store"; // Importing redux store

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DefaultSeo } from "next-seo";

import GoogleAnalytics from "@bradgarropy/next-google-analytics";

// import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo />

      <GoogleAnalytics measurementId="G-EW59MKFTG2" />

      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
