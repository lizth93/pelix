import styled from "styled-components";
import SearchResults from "core/search/results/results.component";

export default styled(SearchResults)`
  background-color: #343a40;
  color: #fff;

  .container {
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: flex;
    gap: 3rem;

    @media (max-width: 50em) {
      //800px
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .list-group {
    min-width: 20rem;
    font-size: 1.5rem;
    --bs-list-group-bg: #212529;
    --bs-list-group-color: #fff;
    --bs-primary-rgb: 11, 114, 133;
    --bs-list-group-border-color: rgba(11, 114, 133, 0.5);

    cursor: pointer;

    @media (max-width: 50em) {
      //800px
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border-bottom-left-radius: 0.5rem;
      border-radius: 0;
      justify-content: center;
    }

    &-item:first-child {
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }

    &-item:last-child {
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
  }

  .fw-bold:first-child {
    @media (max-width: 50em) {
      //800px
      padding-right: 1rem;
    }
  }
  .section-results {
    margin: 0 auto;
    font-size: 2.5rem;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .error {
    margin-top: 3rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.8rem;

    &__suggestions {
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;
