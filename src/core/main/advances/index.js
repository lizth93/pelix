import styled from "styled-components";
import AdvancesFilms from "./advance-films.component";

export default styled(AdvancesFilms)`
  .container-advances {
    margin-bottom: 5rem;
    max-height: 45rem;
  }
  .section-films {
    display: flex;
    gap: 2rem;
    min-height: 15rem;

    .film {
      max-width: 20rem;
      position: relative;

      .play-icon {
        fill: #e3fafc;
        cursor: pointer;
        margin-right: 0.5rem;
        z-index: 1000;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(110%, -86%);

        width: 6rem;
        height: 6rem;

        &:hover {
          fill: #3bc9db;
          cursor: pointer;
        }
      }
    }
  }

  h1 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 500;
    line-height: 0.8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: -webkit-center;
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
`;
