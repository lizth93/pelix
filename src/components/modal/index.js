import styled from "styled-components";
import Modal from "./modal.component";

export default styled(Modal)`
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

  .modal-content {
    color: #fff;
    background-color: black !important;

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

  .hwPkLG {
    margin-top: 2rem;
    align-self: center;
  }

  .modal-body {
    margin: 0 auto;
  }
  .ppal-video {
    text-align: center;
  }
  .type-video {
    margin-top: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: none;
    list-style: none;
  }
  .overview {
    font-size: 1.5rem;
    line-height: 1.6rem;
    padding: 2rem;
  }
  .videos-related {
    padding: 2rem;
  }
  .more-videos {
    display: grid;
    grid-template-columns: repeat(auto-fill, 22rem);
    justify-content: center;
    text-align-last: center;
    gap: 0.5rem;
    overflow: auto;
    max-height: 30vh;

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

  .type-video:hover,
  .type-video:active {
    color: #dee2e6;
  }

  .type-video:link,
  .type-video:visited {
    color: #adb5bd;
    background-color: #495057;
  }
`;
