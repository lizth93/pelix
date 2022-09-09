import { useSelector, useDispatch } from "react-redux";
//own
import FilmsResults from "../films-results";
import Spinner from "../../../components/spinner";
import useInitialiceSearchTerm from "../use-initialice-search";
import ListGroup from "../../../components/list-group";
import ErrorSearch from "../../../components/error-search";
import { searchActions } from "../../../store/search/search-slice";

const SearchResults = (props) => {
  useInitialiceSearchTerm();
  const dispatch = useDispatch();

  const {
    multipleResults,
    moviesResults,
    tvResults,
    personsResults,
    isLoading,
    error,
    showOnScreen,
  } = useSelector((state) => ({
    multipleResults: state.searchResults.multipleResults,
    moviesResults: state.searchResults.moviesResults,
    personsResults: state.searchResults.personsResults,
    tvResults: state.searchResults.tvResults,
    isLoading: state.searchResults.isLoading,
    error: state.searchResults.error,
    showOnScreen: state.searchResults.showOnScreen,
  }));

  const handleFilterOfSearch = (results) => {
    if (results === "movies") {
      dispatch(searchActions.setShowOnTheScreen(moviesResults));
    }
    if (results === "tv") {
      dispatch(searchActions.setShowOnTheScreen(tvResults));
    }
    if (results === "persons") {
      dispatch(searchActions.setShowOnTheScreen(personsResults));
    }
    if (results === "all") {
      dispatch(searchActions.setShowOnTheScreen(multipleResults));
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
              showOnScreen.map((film) => (
                <FilmsResults key={film.id} collection={film} />
              ))}
          </div>
        </section>
      )}
    </div>
  );
};
export default SearchResults;
