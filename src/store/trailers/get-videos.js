import { API_KEY, URL_BASE, URL_LENGUAGE, URL_VIDEO } from "../../config";
import { videosActions } from "./videos-slice";

export const getVideos = (id) => {
  return async (dispatch) => {
    try {
      dispatch(videosActions.setIsLoading(true));
      dispatch(videosActions.setError(null));

      const fetchResult = await fetchVideos(id);

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
async function fetchVideos(id) {
  const response = await fetch(
    `${URL_BASE}${id}${URL_VIDEO}${API_KEY}&${URL_LENGUAGE}`
  );

  if (!response.ok) {
    throw new Error("Error loading videos");
  }
  return response.json();
}
