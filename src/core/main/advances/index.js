import styled from "styled-components";
import AdvancesFilms from "./advance.component";

export default styled(AdvancesFilms)`
  .container-advances {
    margin-bottom: 5rem;
    max-height: 45rem;
  }
  .section-films {
    display: flex;
  }

  .section-advances {
    background-color: #0b7285;
    border-radius: 2rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    margin: 0 auto;
    padding: 2rem;
    display: flex;

    flex-direction: column;

    gap: 2rem;
    flex-wrap: nowrap;
    overflow: hidden;
    max-width: 95vw;
    overflow-x: auto;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    scrollbar-width: thin;

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

  .section-films {
    display: flex;
    gap: 2rem;
  }
`;
