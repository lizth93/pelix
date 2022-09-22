import styled from "styled-components";
import SectionMovies from "core/section-movies/movies.component";

export default styled(SectionMovies)`
  background-color: #343a40;
  color: #fff;

  .section-popular {
    margin: 3rem;
    font-size: 2.5rem;
  }

  .container-fluid {
    display: flex;
    margin: 3rem;
    gap: 2rem;
  }
  .accordion {
    max-width: 20rem;
    min-width: 20rem;
  }

  .section-collections {
    margin-top: 0rem;

    justify-content: flex-start;
  }
  .message {
    font-size: 1.8rem;
    align-self: center;
  }
`;
