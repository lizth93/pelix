//own
import { useState } from "react";
import Button from "react-bootstrap/Button";
import BootstrapButtonGroup from "react-bootstrap/ButtonGroup";

import {
  CATEGORY_TV_AIRING,
  CATEGORY_TEATHERS,
  CATEGORY_STREAMING,
} from "../../config";

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

export default ButtonsGroup;
