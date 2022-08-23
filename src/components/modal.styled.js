import styled from "styled-components";
import Modal from "./modal";

export default styled(Modal)`
  .modal-content {
    color: #fff;
    background-color: black !important;
  }

  .hwPkLG {
    margin-top: 2rem;
    align-self: center;
  }

  .modal-body {
    margin: 0 auto;
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
  }
  .more-videos {
    display: grid;
    grid-template-columns: repeat(auto-fill, 22rem);
    justify-content: center;
    text-align-last: center;
    gap: 0.5rem;
    overflow: auto;
    max-height: 30vh;
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
