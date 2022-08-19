import styled from "styled-components";
import Collections from "./collections";

export default styled(Collections)`
  background-color: #343a40;
  color: #fff;
  .section-popular {
    margin: 3rem;
    font-size: 2.5rem;
  }

  .section-collections {
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: flex-start;
  }
`;
