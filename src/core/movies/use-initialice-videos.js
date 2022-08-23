import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getVideosFilm } from "../../store/collections/movies/trailers/get-videos";
import { videosActions } from "../../store/collections/movies/trailers/videos-slice";

export default function useInitialiceVideos() {
  const dispatch = useDispatch();
  const typeCollection = useParams()?.typeCollection;
  const collectionId = useParams()?.collectionId;

  useEffect(() => {
    dispatch(videosActions.setVideos([]));
    dispatch(getVideosFilm(collectionId, typeCollection));
  }, [dispatch, collectionId, typeCollection]);
}
