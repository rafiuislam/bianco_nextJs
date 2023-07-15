import Footer from "./Footer";
import Navbar from "./Navbar";
import FacebookMsg from "./FacebookMsg";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <FacebookMsg />
      <Footer />
    </>
  );
};

export default Layout;
