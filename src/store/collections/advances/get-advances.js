import { API_KEY, STREAMING_TV, URL_LENGUAGE } from "../../../config";
import { advancesAction } from "./advances-slice";

export const getAdvancesFilm = (type = "streaming") => {
  return async (dispatch) => {
    try {
      dispatch(advancesAction.setIsLoading(true));
      const fetchResult = await fetchAdvancesFilm(type);

      console.log(fetchResult, "from get advances");
      if (fetchResult.results.length === 0) {
        dispatch(advancesAction.setIsLoading(false));
        throw new Error("Doesn't have movies");
      }

      dispatch(advancesAction.setAdvanceVideos(fetchResult.results));
      dispatch(advancesAction.setIsLoading(false));
    } catch (error) {
      dispatch(advancesAction.setIsLoading(false));
      dispatch(advancesAction.setError(error.message));
      console.log(error);
    }
  };
};
async function fetchAdvancesFilm(type) {
  const response = await fetch(getUrl(type));

  if (!response.ok) {
    throw new Error("Error loading movies");
  }
  return response.json();
}

function getUrl(type) {
  let fetchAdvance;
  if (type === "streaming") {
    fetchAdvance = `${STREAMING_TV}${API_KEY}&${URL_LENGUAGE}`;
  }
  return fetchAdvance;
}
