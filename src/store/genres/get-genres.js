import { genresActions } from "store/genres/genres-slice";
import { URL_GENRES, API_KEY, URL_LENGUAGE } from "constants";

export const getGenres = () => {
  return async (dispatch) => {
    try {
      dispatch(genresActions.setIsLoading(true));
      const fetchResult = await fetchGenres();

      if (fetchResult.genres.length === 0) {
        dispatch(genresActions.setIsLoading(false));
        throw new Error("Something went wrong loading genres");
      }

      dispatch(genresActions.setGenres(fetchResult.genres));
      dispatch(genresActions.setIsLoading(false));
    } catch (error) {
      dispatch(genresActions.setIsLoading(false));
      dispatch(genresActions.setError(error.message));
      console.log(error);
    }
  };
};

async function fetchGenres() {
  const response = await fetch(`${URL_GENRES}${API_KEY}&${URL_LENGUAGE}`);

  if (!response.ok) {
    throw new Error("Error loading movies");
  }
  return response.json();
}
