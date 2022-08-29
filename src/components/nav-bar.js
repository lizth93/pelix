import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import Logo from "../layouts/brand/logo.styled";
import { getSearch } from "../store/search/get-search";
import DropDown from "./dropdown";
import { SEARCH } from "../config.js";

const NavbarElement = (props) => {
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

            <Form className="d-flex" onSubmit={handleSearchFilms}>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarElement;
