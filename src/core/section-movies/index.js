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
    @media (max-width: 46.875em) {
      //750px
      flex-wrap: wrap;
      margin: 0rem;
    }
  }
  .accordion {
    max-width: 20rem;
    min-width: 20rem;

    @media (max-width: 46.875em) {
      //750px
      display: flex;
      justify-content: center;
      max-width: 100%;
      min-width: 100%;
    }
  }

  .accordion-body {
    @media (max-width: 46.875em) {
      //750px
      display: grid;
      row-gap: 0.5rem;
      grid-template-columns: repeat(4, minmax(15rem, min-content));
    }
    @media (max-width: 31.25em) {
      //750px
      display: grid;
      grid-template-columns: repeat(2, minmax(15rem, min-content));
    }
  }

  .section-collections {
    margin-top: 0rem;

    justify-content: flex-start;

    @media (max-width: 46.875em) {
      //750px
      justify-content: center;
    }
  }
  .message {
    font-size: 1.8rem;
    align-self: center;
  }
`;
