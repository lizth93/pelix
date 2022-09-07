import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getDetailMovies } from "../../store/collections/movies/details/get-detail";
import { detailActions } from "../../store/collections/movies/details/detail-slice";

export default function useInitialiceVideos() {
  const dispatch = useDispatch();
  const typeCollection = useParams()?.typeCollection;
  const collectionId = useParams()?.collectionId;

  useEffect(() => {
    dispatch(detailActions.setDetails([]));
    dispatch(getDetailMovies(collectionId, typeCollection));
  }, [dispatch, collectionId, typeCollection]);
}
