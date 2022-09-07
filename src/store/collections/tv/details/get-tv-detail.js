import {
  API_KEY,
  URL_LENGUAGE,
  URL_TV_VIDEO,
  URL_VIDEO_MOVIES,
} from "../../../../config";
import { videosTvActions } from "./detail-tv-slice";

export const getTvVideos = (id) => {
  return async (dispatch) => {
    try {
      dispatch(videosTvActions.setIsLoading(true));
      dispatch(videosTvActions.setError(null));

      const fetchResult = await fetchVideos(id);

      if (fetchResult.results.length === 0) {
        dispatch(videosTvActions.setIsLoading(false));
        throw new Error("This tv doesn't have videos related.");
      }

      dispatch(videosTvActions.setVideos(fetchResult.results));
      dispatch(videosTvActions.setIsLoading(false));
    } catch (error) {
      dispatch(videosTvActions.setIsLoading(false));
      dispatch(videosTvActions.setError(error.message));
      console.log(error);
    }
  };
};
async function fetchVideos(id) {
  const response = await fetch(
    `${URL_TV_VIDEO}${id}${URL_VIDEO_MOVIES}${API_KEY}&${URL_LENGUAGE}`
  );

  if (!response.ok) {
    throw new Error("Error loading videos");
  }
  return response.json();
}
