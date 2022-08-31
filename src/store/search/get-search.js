import {
  API_KEY,
  URL_LENGUAGE,
  URL_QUERY,
  URL_SEARCH,
  URL_SEARCH_MOVIES,
  URL_SEARCH_TV,
} from "../../config";
import { searchActions } from "./search-slice";

export const getSearch = (searchTerm) => {
  return async (dispatch) => {
    try {
      dispatch(searchActions.setError(null));
      dispatch(searchActions.setIsLoading(true));
      dispatch(searchActions.setSearchResults([]));
      const fetchResult = await fetchSearch(searchTerm);
      console.log(fetchResult[2].results, "from getSearch");

      dispatch(
        searchActions.setSearchResults({
          multiple: fetchResult[0].results,
          movies: fetchResult[1].results,
          tv: fetchResult[2].results,
        })
      );

      dispatch(
        searchActions.setTotalPages({
          multiples: fetchResult[0].total_pages,
          movies: fetchResult[1].total_pages,
          tv: fetchResult[2].total_pages,
        })
      );

      dispatch(
        searchActions.setTotalResults({
          multiples: fetchResult[0].total_results,
          movies: fetchResult[1].total_results,
          tv: fetchResult[2].total_results,
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

  const response = await Promise.all([
    fetchMultiplesResults,
    fetchMovies,
    fetchTvShows,
  ]);
  return response;
}

function getJSON(url, errorMessage = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
}
