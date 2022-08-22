import { API_KEY, URL_LENGUAGE, URL_TV_POPULAR } from "../../../config";
import { tvActions } from "./tv-slice";

export const getTvPopular = () => {
  return async (dispatch) => {
    try {
      dispatch(tvActions.setIsLoading(true));
      const fetchResult = await fetchTvPopular();

      if (fetchResult.results.length === 0) {
        dispatch(tvActions.setIsLoading(false));
        throw new Error("Doesn't have Tv");
      }

      dispatch(tvActions.setTvPopular(fetchResult.results));
      dispatch(tvActions.setTotalPages(fetchResult.total_pages));
      dispatch(tvActions.setTotalResults(fetchResult.total_results));

      dispatch(tvActions.setIsLoading(false));
    } catch (error) {
      dispatch(tvActions.setIsLoading(false));
      dispatch(tvActions.setError(error.message));
      console.log(error);
    }
  };
};

async function fetchTvPopular() {
  const response = await fetch(getUrl());

  if (!response.ok) {
    throw new Error("Error loading TV");
  }
  return response.json();
}

function getUrl() {
  return `${URL_TV_POPULAR}${API_KEY}&${URL_LENGUAGE}`;
}
