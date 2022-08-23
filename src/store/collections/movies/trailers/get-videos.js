import {
  API_KEY,
  URL_BASE,
  URL_LENGUAGE,
  URL_VIDEO_MOVIES,
  URL_TV_VIDEO,
} from "../../../../config";
import { videosActions } from "./videos-slice";

export const getVideosFilm = (id, typeCollection) => {
  return async (dispatch) => {
    try {
      dispatch(videosActions.setIsLoading(true));
      dispatch(videosActions.setError(null));

      const fetchResult = await fetchVideos(id, typeCollection);

      if (fetchResult.results.length === 0) {
        dispatch(videosActions.setIsLoading(false));
        throw new Error("This movie doesn't have videos related.");
      }

      dispatch(videosActions.setVideos(fetchResult.results));
      dispatch(videosActions.setIsLoading(false));
    } catch (error) {
      dispatch(videosActions.setIsLoading(false));
      dispatch(videosActions.setError(error.message));
      console.log(error);
    }
  };
};
async function fetchVideos(id, typeCollection) {
  const response = await fetch(getUrl(id, typeCollection));

  if (!response.ok) {
    throw new Error("Error loading videos");
  }
  return response.json();
}

function getUrl(id, typeCollection) {
  if (typeCollection === "movies") {
    return `${URL_BASE}${id}${URL_VIDEO_MOVIES}${API_KEY}&${URL_LENGUAGE}`;
  } else {
    return `${URL_TV_VIDEO}${id}${URL_VIDEO_MOVIES}${API_KEY}&${URL_LENGUAGE}`;
  }
}
