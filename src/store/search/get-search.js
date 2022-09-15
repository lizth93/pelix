import {
  API_KEY,
  URL_LENGUAGE,
  URL_QUERY,
  URL_SEARCH,
  URL_SEARCH_MOVIES,
  URL_SEARCH_PERSONS,
  URL_SEARCH_TV,
} from "constants";
import { searchActions } from "store/search/search-slice";

export const getSearch = (searchTerm) => {
  return async (dispatch) => {
    try {
      dispatch(searchActions.setError(null));
      dispatch(searchActions.setIsLoading(true));
      dispatch(
        searchActions.setSearchResults({
          multiple: [],
          movies: [],
          tv: [],
          persons: [],
        })
      );
      const fetchResult = await fetchSearch(searchTerm);
      fetchResult.map((fetchResult) =>
        fetchResult.results.length === 0
          ? dispatch(searchActions.setError("Something went wrong"))
          : ""
      );
      dispatch(
        searchActions.setSearchResults({
          multiple: fetchResult[0].results,
          movies: fetchResult[1].results,
          tv: fetchResult[2].results,
          persons: fetchResult[3].results.map((res) => res.known_for[0]),
        })
      );

      dispatch(
        searchActions.setTotalPages({
          multiple: fetchResult[0].total_pages,
          movies: fetchResult[1].total_pages,
          tv: fetchResult[2].total_pages,
          persons: fetchResult[3].total_pages,
        })
      );

      dispatch(
        searchActions.setTotalResults({
          multiple: fetchResult[0].total_results,
          movies: fetchResult[1].total_results,
          tv: fetchResult[2].total_results,
          persons: fetchResult[3].total_results,
        })
      );

      dispatch(searchActions.setIsLoading(false));
    } catch (error) {
      dispatch(searchActions.setIsLoading(false));
      dispatch(searchActions.setError(error.message));
      console.log(error);
    }
  };
};

async function fetchSearch(searchTerm) {
  const fetchMultiplesResults = getJSON(
    `${URL_SEARCH}${API_KEY}&${URL_LENGUAGE}&${URL_QUERY}${searchTerm}`
  );
  const fetchMovies = getJSON(
    `${URL_SEARCH_MOVIES}${API_KEY}&${URL_LENGUAGE}&${URL_QUERY}${searchTerm}`
  );
  const fetchTvShows = getJSON(
    `${URL_SEARCH_TV}${API_KEY}&${URL_LENGUAGE}&${URL_QUERY}${searchTerm}`
  );
  const fetchPersons = getJSON(
    `${URL_SEARCH_PERSONS}${API_KEY}&${URL_LENGUAGE}&${URL_QUERY}${searchTerm}`
  );

  const response = await Promise.all([
    fetchMultiplesResults,
    fetchMovies,
    fetchTvShows,
    fetchPersons,
  ]);
  return response;
}

function getJSON(url, errorMessage = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
}
