import Button from "react-bootstrap/Button";
import BootstrapButtonGroup from "react-bootstrap/ButtonGroup";

function ButtonsGroup(props) {
  return (
    <div className={props.className}>
      <BootstrapButtonGroup aria-label="Basic example">
        <Button variant="secondary">In Streaming</Button>
        <Button variant="secondary">In Tv</Button>
        <Button variant="secondary">In theaters</Button>
      </BootstrapButtonGroup>
    </div>
  );
}

export default ButtonsGroup;
