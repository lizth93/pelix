import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
//own
import { getDetailFilm } from "store/details/get-detail";

export default function useInitialiceDetails() {
  const dispatch = useDispatch();
  const typeCollection = useParams()?.typeCollection;
  const collectionId = useParams()?.collectionId;

  useEffect(() => {
    dispatch(getDetailFilm(collectionId, typeCollection));
  }, [dispatch, collectionId, typeCollection]);
}
