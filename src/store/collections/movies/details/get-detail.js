import {
  API_KEY,
  URL_BASE_MOVIES,
  URL_LENGUAGE,
  URL_VIDEO_MOVIES,
} from "../../../../config";
import { detailActions } from "./detail-slice";

export const getDetailMovies = (id) => {
  return async (dispatch) => {
    try {
      dispatch(detailActions.setClearDetails());
      dispatch(detailActions.setIsLoading(true));
      dispatch(detailActions.setError(null));

      const fetchResult = await fetchDetailMovies(id);
      console.log(fetchResult[1].results);

      dispatch(
        detailActions.setDetails({
          videos: fetchResult[0].results,
          currentMovie: fetchResult[1],
        })
      );
      dispatch(detailActions.setIsLoading(false));
    } catch (error) {
      dispatch(detailActions.setIsLoading(false));
      dispatch(detailActions.setError(error.message));
      console.log(error);
    }
  };
};
async function fetchDetailMovies(id) {
  const fetchVideosMovies = getJSON(
    `${URL_BASE_MOVIES}${id}${URL_VIDEO_MOVIES}${API_KEY}&${URL_LENGUAGE}`
  );
  const fetchCurrentMovie = getJSON(`${URL_BASE_MOVIES}${id}?${API_KEY}`);

  const response = await Promise.all([fetchVideosMovies, fetchCurrentMovie]);
  return response;
}

function getJSON(url, errorMessage = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
}
