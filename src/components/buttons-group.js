import { useState } from "react";
import Button from "react-bootstrap/Button";
import BootstrapButtonGroup from "react-bootstrap/ButtonGroup";
import styled from "styled-components";

function ButtonsGroup(props) {
  const [activeButton, setActiveButton] = useState(true);

  const handleButtonStatus = () => {
    setActiveButton(false);
  };

  return (
    <div className={props.className}>
      <BootstrapButtonGroup aria-label="Basic example">
        <Button variant="secondary" active={activeButton}>
          In Streaming
        </Button>
        <Button variant="secondary" onClick={handleButtonStatus}>
          In Tv
        </Button>
        <Button variant="secondary" onClick={handleButtonStatus}>
          In theaters
        </Button>
      </BootstrapButtonGroup>
    </div>
  );
}

export default styled(ButtonsGroup)`
  .btn {
    background-color: transparent;
    font-size: 1.6rem;
    border-radius: 50rem;
  }

  .btn-check:active + .btn,
  .btn-check:checked + .btn,
  .btn.active,
  .btn.show,
  .btn:focus {
    color: #777;

    background-color: #c5f6fa;
    border-color: var(--bs-btn-active-border-color);
  }
`;
