import styled from "styled-components";
import Accordion from "./accordion";
export default styled(Accordion)`
  .accordion {
    --bs-accordion-color: #fff;
    --bs-accordion-bg: #212529;
    --bs-accordion-border-color: #0b7285;
    font-size: 1.2rem;
  }
  .accordion-button {
    color: #fff;
    background-color: #495057;
  }
  .form-check-input:checked {
    background-color: #22b8cf;
    border-color: #0b7285;
  }

  .accordion-item .accordion-button {
    font-size: 1.4rem;
  }
`;
