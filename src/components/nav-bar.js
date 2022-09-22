import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
//own
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Logo from "layouts/brand";
import { getSearch } from "store/search/get-search";
import DropDown from "components/dropdown";
import { SEARCH } from "constants.js";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchFilms = (e) => {
    e.preventDefault();
    history.push(`${SEARCH}${searchTerm}`);
    dispatch(getSearch(searchTerm));
    setSearchTerm("");
  };

  return (
    <div className={props.className}>
      <BootstrapNavbar bg="dark" variant="dark">
        <Container fluid>
          <div className="logo">
            <Logo />
            <BootstrapNavbar.Brand href="#" className="logo-name">
              Pelix
            </BootstrapNavbar.Brand>
          </div>
          <BootstrapNavbar.Toggle aria-controls="navbarScroll" />
          <BootstrapNavbar.Collapse id="navbarScroll">
            <DropDown />

            <Form className="d-flex search-form" onSubmit={handleSearchFilms}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                size="lg"
                value={searchTerm}
                onChange={handleOnChangeSearchTerm}
              />
              <Button type="submit" variant="outline-success" size="lg">
                Search
              </Button>
            </Form>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;
