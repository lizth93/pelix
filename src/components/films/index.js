import styled from "styled-components";
import Film from "./film.component";

export default styled(Film)`
  transition: all 0.2s;

  &.with-hover {
    .collection__title {
      display: none;
      padding: 1rem;
      padding-top: 0;
    }
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

      .collection__title {
        position: absolute;
        display: block;
        background-color: #212529;
        width: 100%;
        border-bottom-left-radius: 1.5rem;
        border-bottom-right-radius: 1.5rem;
      }

      .collection__img {
        border-bottom-left-radius: 0rem;
        border-bottom-right-radius: 0rem;
      }
    }
  }

  .collection__img {
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
    align-items: center;
  }

  .details-container {
    display: flex;
    gap: 0.5rem;
    align-items: center;
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

  .static-detail {
    .collection__title {
      background-color: #212529;
      width: 100%;
      border-bottom-left-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;
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

  .text-description {
    font-size: 1.6rem;
  }
`;
