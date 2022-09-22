import styled from "styled-components";
import HeroDescription from "./hero-description";
export default styled(HeroDescription)`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 3rem;

  .hero-background {
    min-width: 100%;
    max-height: 60vh;
  }

  .hero {
    &-text {
      color: #fff;
    }
    &-image {
      border-radius: 2rem;
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

    .hero-genres {
      display: flex;
      flex-direction: column;
    }
  }
`;
