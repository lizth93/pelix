import { API_KEY, URL_MOVIES } from "../../config";
import { moviesActions } from "./movies-slice";

export const getMovies = () => {
  return async (dispatch) => {
    try {
      dispatch(moviesActions.setIsLoading(true));
      const fetchResult = await fetchMovies();

      if (fetchResult.results.length === 0) {
        dispatch(moviesActions.setIsLoading(false));
        throw new Error("Doesn't have movies");
      }

      if (fetchResult.results.length !== 0) {
        dispatch(moviesActions.setMovies(fetchResult.results));
      }
      dispatch(moviesActions.setIsLoading(false));
    } catch (error) {
      dispatch(moviesActions.setIsLoading(false));
      dispatch(moviesActions.setError(error.message));
      console.log(error);
    }
  };
};

async function fetchMovies() {
  const response = await fetch(`${URL_MOVIES}${API_KEY}`);
  console.log(response, "what response have");
  if (!response.ok) {
    throw new Error("Error loading movies");
  }
  return response.json();
}
