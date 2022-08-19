import styled from "styled-components";
import Movie from "./movie";

export default styled(Movie)`
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
    z-index: 2;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transition: all 0.2s;
    background-color: #212529;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
  }

  .movie__title {
    display: none;

    padding: 1rem;
    padding-top: 0;
  }

  &:hover .movie__title {
    position: absolute;
    display: block;
    background-color: #212529;
    width: 100%;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }

  &:hover .movie__img {
    border-bottom-left-radius: 0rem;
    border-bottom-right-radius: 0rem;
  }

  .movie__img {
    max-width: 20rem;
    height: auto;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;

    cursor: pointer;
  }
  .icons {
    display: flex;
    gap: 0.8rem;
    justify-content: space-between;
  }

  .play-icon {
    fill: #e3fafc;
    cursor: pointer;
    margin-right: 0.5rem;

    &:hover {
      fill: #3bc9db;
      cursor: pointer;
    }
  }

  .add-icon,
  .more-icon {
    fill: #e3fafc;
    stroke: #e3fafc;
    cursor: pointer;

    &:hover {
      fill: #3bc9db;
      stroke: #3bc9db;
      cursor: pointer;
    }
  }
`;
