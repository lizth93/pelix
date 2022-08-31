import { useSelector } from "react-redux";
import FilmsResults from "./films-results";
import Spinner from "../../components/spinner";
import useInitialiceSearchTerm from "./use-initialice-search";
import ListGroup from "../../components/list-group";

const SearchResults = (props) => {
  useInitialiceSearchTerm();
  const { multipleResults, isLoading, error } = useSelector((state) => ({
    multipleResults: state.searchResults.multipleResults,
    isLoading: state.searchResults.isLoading,
    error: state.searchResults.error,
  }));

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
          <ListGroup className="list-group" />
          <div className="section-results">
            {isLoading && <Spinner />}

            {!isLoading &&
              multipleResults.map((film) => (
                <FilmsResults key={film.id} collection={film} />
              ))}
          </div>
        </section>
      )}
    </div>
  );
};
export default SearchResults;
