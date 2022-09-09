import {
  API_KEY,
  STREAMING_TV,
  URL_TV_AIRING,
  URL_LENGUAGE,
  CATEGORY_TV_AIRING,
  CATEGORY_TEATHERS,
  CATEGORY_STREAMING,
  URL_TEATHERS,
} from "../../../config";
import { advancesAction } from "./advances-slice";

export const getAdvancesFilm = (type = { CATEGORY_STREAMING }) => {
  return async (dispatch) => {
    try {
      dispatch(advancesAction.setIsLoading(true));
      const fetchResult = await fetchAdvancesFilm(type);

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
  console.log(type, CATEGORY_STREAMING);
  if (type === CATEGORY_STREAMING) {
    fetchAdvance = `${STREAMING_TV}${API_KEY}&${URL_LENGUAGE}`;
  }
  if (type === CATEGORY_TV_AIRING) {
    fetchAdvance = `${URL_TV_AIRING}${API_KEY}&${URL_LENGUAGE}`;
  }
  if (type === CATEGORY_TEATHERS) {
    fetchAdvance = `${URL_TEATHERS}${API_KEY}&${URL_LENGUAGE}`;
  }
  return fetchAdvance;
}
