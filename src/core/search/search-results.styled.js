import styled from "styled-components";
import SearchResults from "./search-results";

export default styled(SearchResults)`
  background-color: #343a40;
  color: #fff;

  .section-results {
    margin: 0 auto;
    font-size: 2.5rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
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
