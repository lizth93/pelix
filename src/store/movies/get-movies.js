import { API_KEY, URL_MOVIES } from "constants";
import { moviesActions } from "store/movies/movies-slice";

export const getMovies = () => {
  return async (dispatch) => {
    try {
      dispatch(moviesActions.setIsLoading(true));
      const fetchResult = await fetchMovies();

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

async function fetchMovies() {
  const response = await fetch(getUrl());

  if (!response.ok) {
    throw new Error("Error loading movies");
  }
  return response.json();
}

function getUrl() {
  return `${URL_MOVIES}${API_KEY}`;
}
