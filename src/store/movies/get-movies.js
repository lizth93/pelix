import { PAGE } from "constants";
import { API_KEY, URL_MOVIES, URL_LENGUAGE } from "constants";
import { moviesActions } from "store/movies/movies-slice";

export const getMovies = (numberPage) => {
  return async (dispatch) => {
    try {
      dispatch(moviesActions.setIsLoading(true));
      const fetchResult = await fetchMovies(numberPage);

      console.log(fetchResult, "what have this");
      if (fetchResult.results.length === 0) {
        dispatch(moviesActions.setIsLoading(false));
        throw new Error("Doesn't have movies");
      }

      dispatch(moviesActions.setMovies(fetchResult.results));
      dispatch(moviesActions.setTotalPages(fetchResult.total_pages));
      dispatch(moviesActions.setTotalResults(fetchResult.total_results));

      dispatch(moviesActions.setIsLoading(false));
    } catch (error) {
      dispatch(moviesActions.setIsLoading(false));
      dispatch(moviesActions.setError(error.message));
      console.log(error);
    }
  };
};

async function fetchMovies(numberPage) {
  const response = await fetch(getUrl(numberPage));

  if (!response.ok) {
    throw new Error("Error loading movies");
  }
  return response.json();
}

function getUrl(numberPage = 1) {
  return `${URL_MOVIES}${API_KEY}&${URL_LENGUAGE}${PAGE}${numberPage}`;
}
