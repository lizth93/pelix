import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { COLLECTIONS, SECTION_MOVIES, SECTION_TV } from "../config";
//own

import useInitialiceGenres from "../layouts/header/use-initialice-genres";

function DropDown(props) {
  useInitialiceGenres();

  const { genres, isLoading } = useSelector((state) => ({
    genres: state.genresCollection.genres,
    isLoading: state.genresCollection.isLoading,
  }));

  return (
    <div className={props.className}>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={COLLECTIONS}>Home</Nav.Link>
              <Nav.Link href={SECTION_MOVIES}>Movies</Nav.Link>
              <Nav.Link href={SECTION_TV}>Tv</Nav.Link>

              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Genres"
                menuVariant="dark"
              >
                {!isLoading &&
                  genres.map((genre) => (
                    <NavDropdown.Item key={genre.id}>
                      {genre.name}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default DropDown;
