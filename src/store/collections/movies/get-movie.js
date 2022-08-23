import { API_KEY, URL_BASE, URL_LENGUAGE } from "../../../config";
import { moviesActions } from "./movies-slice";

export const getMovie = (collectionId) => {
  return async (dispatch) => {
    try {
      dispatch(moviesActions.setIsLoadingCurrentMovie(true));
      const fetchResult = await fetchMovie(collectionId);

      // if (fetchResult.results !== 0) {
      //   dispatch(moviesActions.setIsLoading(false));
      //   throw new Error("Doesn't have movies");
      // }
      console.log(fetchResult, "fetchresult what have");
      dispatch(moviesActions.setCurrentMovie(fetchResult));

      dispatch(moviesActions.setIsLoadingCurrentMovie(false));
    } catch (error) {
      dispatch(moviesActions.setIsLoadingCurrentMovie(false));
      dispatch(moviesActions.setError(error.message));
      console.log(error);
    }
  };
};

async function fetchMovie(id) {
  const response = await fetch(getUrl(id));

  if (!response.ok) {
    throw new Error("Error loading movies");
  }
  return response.json();
}

function getUrl(id) {
  return `${URL_BASE}${id}?${API_KEY}&${URL_LENGUAGE}`;
}
