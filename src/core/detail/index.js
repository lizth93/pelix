import styled from "styled-components";
import DetailFilm from "./detail-film";

export default styled(DetailFilm)`
  background-color: #0b7285;
  min-height: 60vh;
  display: flex;
  align-items: center;
  background-size: cover;

  @media (max-width: 62.5em) {
    //1000px
    padding: 2rem;
  }

  @media (max-width: 62.5em) {
    //1000px
    min-height: 30vh;
  }
`;
