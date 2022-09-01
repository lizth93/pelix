import { useSelector } from "react-redux/es/exports";
import Badge from "react-bootstrap/Badge";
import BootstrapListGroup from "react-bootstrap/ListGroup";
import Spinner from "./spinner";

function ListGroup(props) {
  const {
    isLoading,
    totalResultsMovies,
    totalResultsTv,
    totalResultsPersons,
    totalResultsMultiple,
  } = useSelector((state) => ({
    multipleResults: state.searchResults.multipleResults,
    isLoading: state.searchResults.isLoading,
    error: state.searchResults.error,

    totalResultsMovies: state.searchResults.totalResultsMovies,
    totalResultsTv: state.searchResults.totalResultsTv,
    totalResultsPersons: state.searchResults.totalResultsPersons,
    totalResultsMultiple: state.searchResults.totalResultsMultiple,
  }));

  const handleShowResults = (selectedFilter) => {
    props.onFilterOfSearchSelected(selectedFilter);
  };
  return (
    <div>
      {isLoading && <Spinner />}
      <h1>Results:</h1>
      <BootstrapListGroup as="ul" numbered>
        <BootstrapListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          onClick={() => handleShowResults("movies")}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Movies</div>
          </div>
          <Badge bg="primary" pill>
            {totalResultsMovies}
          </Badge>
        </BootstrapListGroup.Item>
        <BootstrapListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          onClick={() => handleShowResults("tv")}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Tv</div>
          </div>
          <Badge bg="primary" pill>
            {totalResultsTv}
          </Badge>
        </BootstrapListGroup.Item>
        <BootstrapListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          onClick={() => handleShowResults("persons")}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Others</div>
          </div>
          <Badge bg="primary" pill>
            {totalResultsPersons}
          </Badge>
        </BootstrapListGroup.Item>

        <BootstrapListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          onClick={() => handleShowResults("all")}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">All Results</div>
          </div>
          <Badge bg="primary" pill>
            {totalResultsMultiple}
          </Badge>
        </BootstrapListGroup.Item>
      </BootstrapListGroup>
    </div>
  );
}

export default ListGroup;
