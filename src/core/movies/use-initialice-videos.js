import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideos } from "../../store/trailers/get-videos";
import { videosActions } from "../../store/trailers/videos-slice";

export default function useInitialiceVideos(id) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(videosActions.setVideos([]));
    dispatch(getVideos(id));
  }, [dispatch, id]);
}
