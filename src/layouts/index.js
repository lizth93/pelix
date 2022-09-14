//own
import Header from "layouts/header";
import Footer from "layouts/footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
export default Layout;
