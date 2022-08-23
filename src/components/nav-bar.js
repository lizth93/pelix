import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../layouts/brand/logo.styled";
import DropDown from "./dropdown";

const NavbarElement = (props) => {
  return (
    <div className={props.className}>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <div className="logo">
            <Logo />
            <Navbar.Brand href="#" className="logo-name">
              Pelix
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <DropDown />

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                size="lg"
              />
              <Button variant="outline-success" size="lg">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarElement;
