import styled from "styled-components";
import DetailFilm from "./detail-film";

export default styled(DetailFilm)`
  background-color: #0b7285;
  max-height: 60vh;
  display: flex;
  align-items: center;
  background-size: cover;

  .hero-background {
    min-width: 100%;
    max-height: 60vh;
  }

  .hero {
    &-text {
      color: #fff;
    }
    &-image {
      z-index: 1000;
      border-radius: 2rem;
    }

    &-description {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      gap: 3rem;
      z-index: 1000;
    }

    &-title {
      font-size: 4rem;
      font-weight: 700;
    }
    &-data {
      font-size: 2rem;
    }

    &-subtitle,
    &-rating {
      margin: 3rem 0 1.5rem 0;
      font-size: 2rem;
      font-weight: 700;
    }

    &-description {
      font-size: 1.8rem;
      font-weight: 400;
    }
  }
`;
