import styled from "styled-components";
import AdvancesFilms from "./advance.component";

export default styled(AdvancesFilms)`
  .container-advances {
    margin-bottom: 5rem;
    max-height: 45rem;
    position: relative;
    max-width: 100%;
  }
  .section-films {
    display: flex;
  }

  .section-advances {
    flex-direction: column;

    &::-webkit-scrollbar {
      height: 10px;
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background-color: #0b7285;
    }

    &::-webkit-scrollbar-thumb {
      box-shadow: inset rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }
  }

  .menu-section {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .section-films {
    display: flex;
    gap: 2rem;
  }
`;
