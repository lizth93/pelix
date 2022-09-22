import { genresActions } from "store/genres/genres-slice";
import { URL_GENRES, API_KEY, URL_LENGUAGE } from "constants";
import { URL_GENRES_TV } from "constants";

export const getGenres = (type) => {
  return async (dispatch) => {
    try {
      dispatch(genresActions.setIsLoading(true));
      const fetchResult = await fetchGenres(type);

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

async function fetchGenres(type) {
  const response = await fetch(getUrl(type));

  if (!response.ok) {
    throw new Error("Error loading movies");
  }
  return response.json();
}

function getUrl(type) {
  let fetchUrl;
  if (type === "movies") {
    fetchUrl = `${URL_GENRES}${API_KEY}&${URL_LENGUAGE}`;
  } else {
    fetchUrl = `${URL_GENRES_TV}${API_KEY}&${URL_LENGUAGE}`;
  }
  return fetchUrl;
}
