import Footer from "./Footer";
import Navbar from "./Navbar";
import MessengerCustomerChat from "react-messenger-customer-chat";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <MessengerCustomerChat pageId="<PAGE_ID>" appId="<APP_ID>" />
      <Footer />
    </>
  );
};

export default Layout;
