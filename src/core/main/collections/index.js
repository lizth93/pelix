import styled from "styled-components";
import Collections from "./collections.component";

export default styled(Collections)`
  background-color: #343a40;
  color: #fff;
  .section-popular {
    margin: 3rem;
    font-size: 2.5rem;
  }
  .container-top-rated {
    margin: 0 auto;
    margin-bottom: 18rem;
    max-height: 45rem;
  }
  .section-top-rated {
    background-color: #212529;
    border-radius: 2rem;
    margin: 0 auto;

    padding: 2rem;
    display: flex;
    gap: 2rem;
    flex-wrap: nowrap;
    overflow: hidden;
    max-width: 100vh;
    overflow-x: auto;
  }

  .movie-top {
    h1 {
      margin-top: 0;
      margin-bottom: 1.5rem;
      font-weight: 500;
      line-height: 0.6;
    }

    .text-description {
      font-size: 1.4rem;
      line-height: 0rem;
    }

    .collection__title {
      /* display: block; */
      background-color: #495057;
      width: 100%;
      border-bottom-left-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;
    }

    .collection__img {
      max-width: 15rem;
    }
  }
`;
