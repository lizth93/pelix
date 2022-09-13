import { useSelector } from "react-redux";
//own
import BootstrapAccordion from "react-bootstrap/Accordion";
import useInitialiceGenres from "../core/section-movies/use-initialice-genres";
import SwitchOption from "./switch-options";
import { Form } from "react-bootstrap";

function Accordion() {
  useInitialiceGenres();

  const { genres, isLoading } = useSelector((state) => ({
    genres: state.genresCollection.genres,
    isLoading: state.genresCollection.isLoading,
  }));
  return (
    <BootstrapAccordion defaultActiveKey="0">
      <BootstrapAccordion.Item eventKey="0">
        <BootstrapAccordion.Header>Filter by genre</BootstrapAccordion.Header>
        <BootstrapAccordion.Body>
          <SwitchOption>
            {!isLoading &&
              genres.map((genre) => (
                <Form.Check
                  type="switch"
                  id={genre.id}
                  key={genre.id}
                  label={genre.name}
                />
              ))}
          </SwitchOption>
        </BootstrapAccordion.Body>
      </BootstrapAccordion.Item>
      <BootstrapAccordion.Item eventKey="1">
        <BootstrapAccordion.Header>Where you can see</BootstrapAccordion.Header>
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
