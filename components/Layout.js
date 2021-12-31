import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Banner from "./Header/Banner";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Banner />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
