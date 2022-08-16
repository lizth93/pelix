//own
import Header from "./header/header.styled";
import Footer from "./footer/footer.styled";

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
