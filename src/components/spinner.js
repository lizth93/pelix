import BootstrapSpinner from "react-bootstrap/Spinner";
import styled from "styled-components";

function Spinner(props) {
  return (
    <>
      <BootstrapSpinner
        animation="border"
        variant="dark"
        className={props.className}
      />
    </>
  );
}

export default styled(Spinner)`
  width: 4rem;
  height: 4rem;
  --bs-spinner-border-width: 0.5em;
`;
