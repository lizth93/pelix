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
  display: flex;

  &:hover {
    transform: scale(1.05);
  }

  figure {
    margin: 0;
  }
  .collection__title {
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

  .film {
    &__details {
      margin: 2rem;
    }

    &__overview {
      max-height: 8rem;
      overflow: hidden;
      font-size: 1.6rem;
      overflow-wrap: break-word;
    }
  }

  time {
    color: #ced4da;
    font-size: 1.2rem;
    font-family: inherit;
  }
`;
