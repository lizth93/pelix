import styled from "styled-components";
import HeroDescription from "./hero-description";
export default styled(HeroDescription)`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 62.5em) {
    //1000px
    flex-wrap: wrap;
  }

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

      @media (max-width: 62.5em) {
        //1000px
        font-size: 3rem;
        font-weight: 600;
      }
    }
    &-data {
      font-size: 2rem;
    }

    &-subtitle,
    &-rating {
      margin: 3rem 0 1.5rem 0;
      font-size: 2rem;
      font-weight: 700;

      @media (max-width: 62.5em) {
        //1000px
        margin: 1rem 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 400;
      }
    }

    .hero-genres {
      display: flex;
      flex-direction: column;
    }
  }
`;
