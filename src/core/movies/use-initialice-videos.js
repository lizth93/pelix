import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getVideosFilm } from "../../store/collections/movies/details/get-detail";
import { videosActions } from "../../store/collections/movies/details/detail-slice";

export default function useInitialiceVideos() {
  const dispatch = useDispatch();
  const typeCollection = useParams()?.typeCollection;
  const collectionId = useParams()?.collectionId;

  useEffect(() => {
    dispatch(videosActions.setVideos([]));
    dispatch(getVideosFilm(collectionId, typeCollection));
  }, [dispatch, collectionId, typeCollection]);
}
