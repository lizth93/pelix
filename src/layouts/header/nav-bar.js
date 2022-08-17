import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../brand/logo.styled";

const NavbarElement = () => {
  return (
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
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Movies</Nav.Link>
            <Nav.Link href="#action3">Series</Nav.Link>
            <Nav.Link href="#action4">My list</Nav.Link>
            <Nav.Link href="#action4">Genres</Nav.Link>
          </Nav>
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
  );
};

export default NavbarElement;