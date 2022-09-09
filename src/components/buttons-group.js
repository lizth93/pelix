import { useState } from "react";
import Button from "react-bootstrap/Button";
import BootstrapButtonGroup from "react-bootstrap/ButtonGroup";
import styled from "styled-components";
import {
  CATEGORY_TV_AIRING,
  CATEGORY_TEATHERS,
  CATEGORY_STREAMING,
} from "../config";

function ButtonsGroup(props) {
  const [activeButton, setActiveButton] = useState(true);

  const handleClick = (category) => {
    setActiveButton(false);
    props.onClickAdvance(category);
  };

  return (
    <div className={props.className}>
      <BootstrapButtonGroup aria-label="Basic example">
        <Button
          variant="secondary"
          active={activeButton}
          onClick={(e) => {
            e.preventDefault();
            handleClick(CATEGORY_STREAMING);
          }}
        >
          In Streaming
        </Button>
        <Button
          variant="secondary"
          onClick={(e) => {
            e.preventDefault();
            handleClick(CATEGORY_TV_AIRING);
          }}
        >
          In Tv
        </Button>
        <Button
          variant="secondary"
          onClick={(e) => {
            e.preventDefault();
            handleClick(CATEGORY_TEATHERS);
          }}
        >
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
    --bs-btn-border-color: #c5f6fa;
    background-color: #c5f6fa;
    --bs-btn-active-border-color: #0b7285;
  }

  .btn-secondary {
    --bs-btn-color: #fff;
    --bs-btn-border-color: #c5f6fa;
    --bs-btn-active-border-color: #c5f6fa;
    --bs-btn-hover-bg: #1098ad;
    --bs-btn-hover-border-color: #1098ad;
  }
`;
