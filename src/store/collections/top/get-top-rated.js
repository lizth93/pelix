import { API_KEY, URL_LENGUAGE, URL_TOP_RATED } from "../../../config";
import { topRatedActions } from "./top-rated-slice";

export const getTopRated = () => {
  return async (dispatch) => {
    try {
      dispatch(topRatedActions.setIsLoading(true));
      const fetchResult = await fetchTopRated();

      if (fetchResult.results.length === 0) {
        dispatch(topRatedActions.setIsLoading(false));
        throw new Error("Doesn't have TOP RATED MOVIES");
      }

      dispatch(topRatedActions.setTopRated(fetchResult.results));
      dispatch(topRatedActions.setIsLoading(false));
    } catch (error) {
      dispatch(topRatedActions.setIsLoading(false));
      dispatch(topRatedActions.setError(error.message));
      console.log(error.message);
    }
  };
};

async function fetchTopRated() {
  const response = await fetch(`${URL_TOP_RATED}${API_KEY}&${URL_LENGUAGE}`);

  if (!response.ok) {
    throw new Error("Error loading top rated Movies");
  }
  return response.json();
}
