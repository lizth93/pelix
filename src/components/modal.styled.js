import styled from "styled-components";
import RenderModal from "./modal";

export default styled(RenderModal)`
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
