import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";

function RenderSpinner(props) {
  return (
    <>
      <Spinner animation="border" variant="dark" className={props.className} />
    </>
  );
}

export default styled(RenderSpinner)`
  width: 4rem;
  height: 4rem;
  --bs-spinner-border-width: 0.5em;
`;
