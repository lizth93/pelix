import { useSelector } from "react-redux";
//own
import BootstrapAccordion from "react-bootstrap/Accordion";
import NavDropdown from "react-bootstrap/NavDropdown";
import useInitialiceGenres from "../core/section-movies/use-initialice-genres";

function Accordion() {
  useInitialiceGenres();

  const { genres, isLoading } = useSelector((state) => ({
    genres: state.genresCollection.genres,
    isLoading: state.genresCollection.isLoading,
  }));
  return (
    <BootstrapAccordion defaultActiveKey="0">
      <BootstrapAccordion.Item eventKey="0">
        <BootstrapAccordion.Header>Filters</BootstrapAccordion.Header>
        <BootstrapAccordion.Body>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Genres"
            menuVariant="dark"
          >
            {!isLoading &&
              genres.map((genre) => (
                <NavDropdown.Item key={genre.id}>{genre.name}</NavDropdown.Item>
              ))}
          </NavDropdown>
        </BootstrapAccordion.Body>
      </BootstrapAccordion.Item>
      <BootstrapAccordion.Item eventKey="1">
        <BootstrapAccordion.Header>Accordion Item #2</BootstrapAccordion.Header>
        <BootstrapAccordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </BootstrapAccordion.Body>
      </BootstrapAccordion.Item>
    </BootstrapAccordion>
  );
}

export default Accordion;
