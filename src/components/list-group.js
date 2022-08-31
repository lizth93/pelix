import Badge from "react-bootstrap/Badge";
import BootstrapListGroup from "react-bootstrap/ListGroup";

function ListGroup(props) {
  console.log(props.totalResultsMovies);
  return (
    <div>
      <h1>Results:</h1>
      <BootstrapListGroup as="ul" numbered>
        <BootstrapListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Movies</div>
          </div>
          <Badge bg="primary" pill>
            {props.totalResultsMovies}
          </Badge>
        </BootstrapListGroup.Item>
        <BootstrapListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Tv</div>
          </div>
          <Badge bg="primary" pill>
            {props.totalResultsTv}
          </Badge>
        </BootstrapListGroup.Item>
        <BootstrapListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </BootstrapListGroup.Item>
      </BootstrapListGroup>
    </div>
  );
}

export default ListGroup;
