import styled from "styled-components";
import FilmsDetail from "./films-detail";

export default styled(FilmsDetail)`
  transition: all 0.2s;
  cursor: pointer;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: all 0.2s;
  background-color: #212529;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;

  &:hover {
    transform: scale(1.1);
  }

  figure {
    margin: 0;
  }
  .collection__title {
    display: none;
    padding: 1rem;
    padding-top: 0;
  }

  .collection__img {
    max-width: 15rem;
    height: auto;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;

    cursor: pointer;
  }
`;
