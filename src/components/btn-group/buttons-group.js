//own
import { useState } from "react";
import Button from "react-bootstrap/Button";
import BootstrapButtonGroup from "react-bootstrap/ButtonGroup";

import {
  CATEGORY_TV_AIRING,
  CATEGORY_TEATHERS,
  CATEGORY_STREAMING,
} from "constants";

function ButtonsGroup(props) {
  const [activeButton, setActiveButton] = useState(CATEGORY_STREAMING);

  const handleClick = (category) => {
    setActiveButton(category);
    props.onClickAdvance(category);
  };

  return (
    <div className={props.className}>
      <BootstrapButtonGroup aria-label="Basic example">
        <Button
          id="streaming"
          variant="secondary"
          active={activeButton === CATEGORY_STREAMING ? true : false}
          onClick={(e) => {
            e.preventDefault();
            handleClick(CATEGORY_STREAMING);
          }}
        >
          In Streaming
        </Button>
        <Button
          id="tv"
          variant="secondary"
          active={activeButton === CATEGORY_TV_AIRING ? true : false}
          onClick={(e) => {
            e.preventDefault();
            handleClick(CATEGORY_TV_AIRING);
          }}
        >
          In Tv
        </Button>
        <Button
          id="theaters"
          variant="secondary"
          active={activeButton === CATEGORY_TEATHERS ? true : false}
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
