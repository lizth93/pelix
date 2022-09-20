import { API_KEY, URL_LENGUAGE, URL_TV_POPULAR, PAGE } from "constants";
import { tvActions } from "store/tv/tv-slice";

export const getTvPopular = (numberPage = 1) => {
  return async (dispatch) => {
    try {
      dispatch(tvActions.setIsLoading(true));
      const fetchResult = await fetchTvPopular(numberPage);

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

async function fetchTvPopular(numberPage) {
  const response = await fetch(getUrl(numberPage));

  if (!response.ok) {
    throw new Error("Error loading TV");
  }
  return response.json();
}

function getUrl(numberPage) {
  return `${URL_TV_POPULAR}${API_KEY}&${URL_LENGUAGE}${PAGE}${numberPage}`;
}
