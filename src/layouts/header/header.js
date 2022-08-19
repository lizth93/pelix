import NavbarElement from "../../components/nav-bar";

function Header(props) {
  return (
    <header className={props.className}>
      <NavbarElement />
    </header>
  );
}

export default Header;
