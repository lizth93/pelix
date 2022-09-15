import {
  API_KEY,
  URL_LENGUAGE,
  URL_TOP_RATED_MOVIES,
  URL_TOP_RATED_TV,
} from "constants";
import { topRatedActions } from "store/top/top-rated-slice";

export const getTopRated = () => {
  return async (dispatch) => {
    try {
      dispatch(topRatedActions.setIsLoading(true));
      dispatch(topRatedActions.setError(null));
      const fetchResult = await fetchTopRated();

      fetchResult.map((fetchResult) =>
        fetchResult.results.length === 0
          ? dispatch(topRatedActions.setError("Something went wrong"))
          : ""
      );

      dispatch(
        topRatedActions.setTopRated({
          topRatedMovies: fetchResult[0].results,
          topRatedTv: fetchResult[1].results,
        })
      );
      dispatch(topRatedActions.setIsLoading(false));
    } catch (error) {
      dispatch(topRatedActions.setIsLoading(false));
      dispatch(topRatedActions.setError(error.message));
      console.log(error.message);
    }
  };
};

async function fetchTopRated() {
  const fetchTopRatedMovies = getJSON(
    `${URL_TOP_RATED_MOVIES}${API_KEY}&${URL_LENGUAGE}`
  );

  const fetchTopRatedTv = getJSON(
    `${URL_TOP_RATED_TV}${API_KEY}&${URL_LENGUAGE}`
  );

  const response = await Promise.all([fetchTopRatedMovies, fetchTopRatedTv]);
  return response;
}

function getJSON(url, errorMessage = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
}
