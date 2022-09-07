import Button from "react-bootstrap/Button";
import BootstrapButtonGroup from "react-bootstrap/ButtonGroup";

function ButtonsGroup() {
  return (
    <BootstrapButtonGroup aria-label="Basic example">
      <Button variant="secondary">In Streaming</Button>
      <Button variant="secondary">In Tv</Button>
      <Button variant="secondary">In theaters</Button>
    </BootstrapButtonGroup>
  );
}

export default ButtonsGroup;
