import { useSelector } from "react-redux";
//own
import BootstrapAccordion from "react-bootstrap/Accordion";
import useInitialiceGenres from "core/section-movies/use-initialice-genres";

import { Form } from "react-bootstrap";

function Accordion(props) {
  useInitialiceGenres(props.type);

  const { isLoading } = useSelector((state) => ({
    isLoading: state.genresCollection.isLoading,
  }));

  const handleFilterGenre = (genreId) => {
    props.onClickGenre(genreId);
  };
  return (
    <div className={props.className}>
      <BootstrapAccordion defaultActiveKey="0">
        <BootstrapAccordion.Item eventKey="0">
          <BootstrapAccordion.Header>Filter by genre</BootstrapAccordion.Header>
          <BootstrapAccordion.Body>
            <>
              <Form.Check
                key={"all"}
                label={"All"}
                name="group1"
                type={"radio"}
                id={`inline-radio-all`}
                onClick={() => handleFilterGenre("all")}
              />
              {!isLoading &&
                props.genres.map((genre) => (
                  <Form.Check
                    key={genre.id}
                    label={genre.name}
                    name="group1"
                    type={"radio"}
                    id={`inline-radio-${genre.id}`}
                    onClick={() => handleFilterGenre(genre.id)}
                  />
                ))}
            </>
          </BootstrapAccordion.Body>
        </BootstrapAccordion.Item>
        <BootstrapAccordion.Item eventKey="1">
          <BootstrapAccordion.Header>
            Where you can see
          </BootstrapAccordion.Header>
          <BootstrapAccordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </BootstrapAccordion.Body>
        </BootstrapAccordion.Item>
      </BootstrapAccordion>
    </div>
  );
}

export default Accordion;
