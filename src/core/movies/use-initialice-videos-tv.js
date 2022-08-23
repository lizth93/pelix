import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { videosActions } from "../../store/collections/movies/trailers/videos-slice";
import { getTvVideos } from "../../store/collections/tv/trailers/get-tv-videos";

export default function useInitialiceTvVideos(id) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(videosActions.setVideos([]));
    dispatch(getTvVideos(id));
  }, [dispatch, id]);
}
