import { API_KEY, URL_LENGUAGE, URL_QUERY, URL_SEARCH } from "../../config";
import { searchActions } from "./search-slice";

export const getSearch = (searchTerm) => {
  return async (dispatch) => {
    try {
      dispatch(searchActions.setError(null));
      dispatch(searchActions.setIsLoading(true));
      dispatch(searchActions.setSearchResults([]));
      const fetchResult = await fetchSearch(searchTerm);

      if (fetchResult.results.length === 0) {
        dispatch(searchActions.setIsLoading(false));
        throw new Error("Something went wrong loading the results");
      }

      dispatch(searchActions.setSearchResults(fetchResult.results));
      dispatch(searchActions.setTotalPages(fetchResult.total_pages));
      dispatch(searchActions.setTotalResults(fetchResult.total_results));
      dispatch(searchActions.setIsLoading(false));
    } catch (error) {
      dispatch(searchActions.setIsLoading(false));
      dispatch(searchActions.setError(error.message));
      console.log(error);
    }
  };
};

async function fetchSearch(searchTerm) {
  const response = await fetch(
    `${URL_SEARCH}${API_KEY}&${URL_LENGUAGE}&${URL_QUERY}${searchTerm}`
  );
  if (!response.ok) {
    throw new Error("Error loading the results");
  }
  return response.json();
}
