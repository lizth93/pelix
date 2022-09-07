import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getDetailFilm } from "../../store/collections/details/get-detail";
import { detailActions } from "../../store/collections/details/detail-slice";

export default function useInitialiceVideos() {
  const dispatch = useDispatch();
  const typeCollection = useParams()?.typeCollection;
  const collectionId = useParams()?.collectionId;

  useEffect(() => {
    dispatch(detailActions.setDetails([]));
    dispatch(getDetailFilm(collectionId, typeCollection));
  }, [dispatch, collectionId, typeCollection]);
}
