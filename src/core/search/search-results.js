import { useSelector } from "react-redux";
import FilmsResults from "./films-results";
import Spinner from "../../components/spinner";
import useInitialiceSearchTerm from "./use-initialice-search";
import ListGroup from "../../components/list-group";
import { useState } from "react";
import ErrorSearch from "../../components/error-search";

const SearchResults = (props) => {
  useInitialiceSearchTerm();

  const {
    multipleResults,
    moviesResults,
    tvResults,
    personsResults,
    isLoading,
    error,
  } = useSelector((state) => ({
    multipleResults: state.searchResults.multipleResults,
    moviesResults: state.searchResults.moviesResults,
    personsResults: state.searchResults.personsResults,
    tvResults: state.searchResults.tvResults,
    isLoading: state.searchResults.isLoading,
    error: state.searchResults.error,
  }));

  const [results, setResults] = useState(multipleResults);

  const handleFilterOfSearch = (results) => {
    if (results === "movies") {
      setResults(moviesResults);
    }
    if (results === "tv") {
      setResults(tvResults);
    }
    if (results === "persons") {
      setResults(personsResults);
    }
    if (results === "all") {
      setResults(multipleResults);
    }
  };

  return (
    <div className={props.className}>
      {error && <ErrorSearch error={error} />}
      {!error && (
        <section className="container ">
          {!isLoading && (
            <ListGroup
              className="list-group"
              onFilterOfSearchSelected={handleFilterOfSearch}
            />
          )}
          <div className="section-results">
            {isLoading && <Spinner />}

            {!isLoading &&
              results.map((film) => (
                <FilmsResults key={film.id} collection={film} />
              ))}
          </div>
        </section>
      )}
    </div>
  );
};
export default SearchResults;
