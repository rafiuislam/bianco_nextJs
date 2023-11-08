import Footer from "./Footer";
import Navbar from "./Navbar";
import FacebookMsg from "./FacebookMsg";
import SessionProvider from "./SessionProvider";

const Layout = ({ children }) => {
  return (
    <>
      <SessionProvider>
        <Navbar />
        {children}
        <FacebookMsg />
        <Footer />
      </SessionProvider>
    </>
  );
};

export default Layout;
