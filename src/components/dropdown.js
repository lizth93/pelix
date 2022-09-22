//own
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { COLLECTIONS, URL_SECTION_MOVIES, URL_TV } from "constants";

function DropDown(props) {
  return (
    <div className={props.className}>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={COLLECTIONS}>Home</Nav.Link>
              <Nav.Link href={URL_SECTION_MOVIES}>Movies</Nav.Link>
              <Nav.Link href={URL_TV}>Tv</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default DropDown;
