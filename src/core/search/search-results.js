import { useSelector } from "react-redux";
import Results from "./films-results";
import RenderSpinner from "../../components/spinner";
import useInitialiceSearchTerm from "./use-initialice-search";

const SearchResults = (props) => {
  useInitialiceSearchTerm();
  const { results, isLoading, error } = useSelector((state) => ({
    results: state.searchResults.results,
    isLoading: state.searchResults.isLoading,
    error: state.searchResults.error,
  }));

  if (error) {
    console.log(error, "from search results");
  }

  return (
    <div className={props.className}>
      {error && (
        <div className="error">
          <p>
            <strong>{error}</strong>
          </p>
          <span className="error__suggestions">Suggestions:</span>
          <ul>
            <li>Try with keywords. </li>
            <li>Are you looking for a movie? or a series?.</li>
            <li>
              Try searching for the type of genre or the name of the film.
            </li>
          </ul>
        </div>
      )}
      {!error && (
        <section className="container ">
          <div className="section-results">
            {isLoading && <RenderSpinner />}
            {results.map((film) => (
              <Results key={film.id} collection={film} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
export default SearchResults;
