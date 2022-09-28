import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCredits } from "store/credits/get-credits";

export default function useLoadCredits() {
  const dispatch = useDispatch();
  const typeCollection = useParams()?.typeCollection;
  const collectionId = useParams()?.collectionId;

  useEffect(() => {
    dispatch(getCredits(typeCollection, collectionId));
  }, [dispatch, typeCollection, collectionId]);
}
