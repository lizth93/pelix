import styled from "styled-components";
import ModalPlay from "components/modal/play/modal-play.component";

export default styled(ModalPlay)`
  .modal-content {
    background-color: black;
    color: #fff;
    align-items: center;
  }
  .modal-lg,
  .modal-xl {
    --bs-modal-width: 1281px;
  }
`;
