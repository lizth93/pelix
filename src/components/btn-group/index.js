import styled from "styled-components";
import ButtonsGroup from "./buttons-group";

export default styled(ButtonsGroup)`
  .btn {
    background-color: transparent;
    font-size: 1.6rem;
    border-radius: 50rem;
  }

  .btn-check:active + .btn,
  .btn-check:checked + .btn,
  .btn.active,
  .btn.show,
  .btn:focus {
    color: #777;
    --bs-btn-border-color: #c5f6fa;
    background-color: #c5f6fa;
    --bs-btn-active-border-color: #0b7285;
  }

  .btn-secondary {
    --bs-btn-color: #fff;
    --bs-btn-border-color: #c5f6fa;
    --bs-btn-active-border-color: #c5f6fa;
    --bs-btn-hover-bg: #1098ad;
    --bs-btn-hover-border-color: #1098ad;
  }
`;
